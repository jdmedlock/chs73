<script>
  import axios from 'axios'
  import { page } from '$app/stores';
  import { loadScript } from "@paypal/paypal-js"
  import generateOrderID from '../../utils/generateOrderID.js'
  import fridayEvent from '../../assets/fridayEvent.json'
  import saturdayEvent from '../../assets/saturdayEvent.json'
  import Attendees from './attendees.svelte'
  import EventSummary from './eventSummary.svelte'
  import PaymentMethod from './paymentMethod.svelte'
  import OrderSummary from './orderSummary.svelte'
  import Payment from './payment.svelte'
  import Receipt from './receipt.svelte'
  import { 
    FRIDAY_EVENT, SATURDAY_EVENT, PREPAY_FEE, AT_DOOR_FEE,
    CREDITCARD_TXN_FEE, PAYPAL_TXN_FEE, PAYPAL_FIXED_FEE, 
    NO_CHARGE, PAY_AT_DOOR, PAY_BY_MAIL, 
    TXN_COMPLETED, TXN_PAYMENT_PENDING_MAIL, TXN_PAYMENT_PENDING_DOOR
  } from '../../utils/constants.js'

  let eventType = $page.data.params.get('event')
  const eventData = eventType === FRIDAY_EVENT ? fridayEvent : saturdayEvent

  let resultData
  let resultDetails

  let classmateEmail = ''
  let classmateFirstName = ''
  let classmateLastName = ''
  let companionFirstName = ''
  let companionLastName = ''

  let calculatedAttendees = 0
  let calculatedAttendanceFee = 0
  let attendanceFee = 0
  let txnChargeFee = 0
  let estTxnFee = 0
  let noAttendees = 0
  let orderTotal = 0
  let orderId
  
  // Error States
  let isAttendeeError = false
  let isEmailError = false
  let isClassmateNameError = false
  let isCompanionNameError = false

  // Attendee Attribures
  let isSponsor = false
  let isVeteran = false

  // Payment Processing States
  let isPaymentSuccessful = false

  // Payment Option States
  let isPayByCard = false
  let isPayAtDoor = false
  let isPayByMail = false

  const calculateOrder = (paymentSource) => {
    // paymentSource is an optional parameter. It's only used when this
    // function is invoked from the PayPal API
    calculatedAttendees = isSponsor ? noAttendees + 1 : noAttendees
    if (isVeteran) {
      calculatedAttendees = isSponsor ? 1 : 0
    }

    if (paymentSource !== undefined && typeof paymentSource === 'string' && 
        eventType === SATURDAY_EVENT && calculatedAttendees > 0) {
      txnChargeFee = paymentSource === 'card' ? CREDITCARD_TXN_FEE : PAYPAL_TXN_FEE
    } else {
      txnChargeFee = 0
      estTxnFee = 0
    }

    attendanceFee = !isPayAtDoor ? PREPAY_FEE : AT_DOOR_FEE

    if (eventType === SATURDAY_EVENT && calculatedAttendees > 0) {
      calculatedAttendanceFee = attendanceFee * calculatedAttendees
      if (isPayAtDoor || isPayByMail) {
        estTxnFee = 0
      } else {
        estTxnFee = (calculatedAttendanceFee * txnChargeFee) + PAYPAL_FIXED_FEE
      }
      orderTotal = calculatedAttendanceFee + estTxnFee
    } else {
      calculatedAttendanceFee = 0
      estTxnFee = 0
      orderTotal = 0
    }

  }

  const logPayment = (details, resultData) => {
    axios.post(`${ import.meta.env.VITE_BE_URL }/logPayment`, {
      order_id: `${ details.id }`,
      item_description: eventData.eventType,
      order_amount: parseFloat(details.purchase_units[0].amount.value), 
      transaction_status: details.status, 
      transaction_creation_time: details.create_time, 
      transaction_update_time: details.update_time,
      payer_source: resultData ? resultData.paymentSource : '', 
      payer_email_address: details.payer.email_address, 
      payer_firstname: details.payer.name.given_name, 
      payer_lastname: details.payer.name.surname,
      payer_id: details.payer.name.payer_id, 
      shipping_address_line_1: details.purchase_units[0].shipping.address.address_line_1, 
      shipping_address_line_2: details.purchase_units[0].shipping.address.address_line_2, 
      shipping_city: details.purchase_units[0].shipping.address.admin_area_2, 
      shipping_state: details.purchase_units[0].shipping.address.admin_area_1, 
      shipping_postal_code: details.purchase_units[0].shipping.address.postal_code, 
      shipping_country_code: details.purchase_units[0].shipping.address.country_code, 
      billing_token: resultData ? resultData.billingToken : '', 
      facilitator_access_token: resultData ? resultData.facilitatorAccessToken : '', 
      accelerated_payment: resultData ? resultData.accelerated : '', 
      soft_descriptor: details.softDescriptor, 
      is_sponsor: isSponsor ? 'Yes' : 'No',
      is_veteran: isVeteran ? 'Yes' : 'No',
      classmateFirstName: classmateFirstName,
      classmateLastName: classmateLastName,
      companionFirstName: companionFirstName || '',
      companionLastName: companionLastName || '',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const emailEventAcknowledgement = (details) => {
    axios.post(`${ import.meta.env.VITE_BE_URL }/sendEventAck`, {
      order_id: details.id,
      item_description: eventData.eventType, 
      event_date: eventData.startDate,
      order_amount: parseFloat(details.purchase_units[0].amount.value).toFixed(2), 
      transaction_status: details.status, 
      transaction_creation_time: details.create_time, 
      payer_email_address: details.payer.email_address, 
      payer_firstname: details.payer.name.given_name, 
      payer_lastname: details.payer.name.surname,
      shipping_address_line_1: details.purchase_units[0].shipping.address.address_line_1, 
      shipping_address_line_2: details.purchase_units[0].shipping.address.address_line_2, 
      shipping_city: details.purchase_units[0].shipping.address.admin_area_2, 
      shipping_state: details.purchase_units[0].shipping.address.admin_area_1, 
      shipping_postal_code: details.purchase_units[0].shipping.address.postal_code, 
      is_sponsor: isSponsor ? 'Yes' : 'No',
      is_veteran: isVeteran ? 'Yes' : 'No',
      classmateFirstName: classmateFirstName,
      classmateLastName: classmateLastName,
      companionFirstName: companionFirstName || '',
      companionLastName: companionLastName || '',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const createNochargeDetails = () => {
    const currentDate = new Date()
    const currentTime = currentDate.toISOString()
    orderId = generateOrderID(classmateFirstName.concat(classmateLastName))
    return ({
      id: orderId,
      status: TXN_COMPLETED, 
      create_time: currentTime, 
      update_time: currentTime,
      payer: {
        email_address: classmateEmail,
        name: {
          given_name: classmateFirstName, 
          surname: classmateLastName
        },
      },
      purchase_units: [
        { amount: { 
            value: parseFloat(0.00),
          },
          shipping: { 
            address: { 
              address_line_1: '', 
              address_line_2: '',
              admin_area_1: '',  
              admin_area_2: '', 
              postal_code: '',
            },
          },
        },
      ],  
    })
  }

  const createNochargeResultData = () => {
    let calculatedPaymentSource = NO_CHARGE
    if (isPayAtDoor) {
      calculatedPaymentSource = PAY_AT_DOOR
    } else if (isPayByMail) {
      calculatedPaymentSource = PAY_BY_MAIL
    }
    
    const resultData = {
      accelerated: false,
      billingToken: null,
      facilitatorAccessToken: "na",
      orderID: orderId,
      payerID: "na",
      paymentID: null,
      paymentSource: calculatedPaymentSource
    }
    return resultData
  }

  const processFridaySignup = () => {
    const details = createNochargeDetails()
    const resultData = createNochargeResultData()

    resultDetails = details
    logPayment(details, resultData)
    emailEventAcknowledgement(details, resultData)
    isPaymentSuccessful = true
  }

  const processCardPayment = () => {
    loadScript({ 
      "client-id": `${ import.meta.env.VITE_PAYPAL_CLIENT_ID }`, 
      "integration-date": "2023-01-07",
      "locale": "en_US",
      "disable-funding": "paylater",
      "enable-funding": "card",
      }).then((paypal) => {
        paypal
          .Buttons({
            style: {
              color: "blue",
              shape: "rect",
              label: "paypal",
              layout: "vertical"
            },
            onInit: function(data, actions) {
              // Set the z-index of the iframe injected by Paypal so it won't
              // overlay the top nav bar
              const iframes = document.getElementsByTagName("iframe")
              if (iframes.length === 0) {
                throw new Error("PayPal iframe not found")
              }
              iframes[0].style.zIndex = 5
            },
            createOrder: function (data, actions) {
              // Process the payment if no errors were detected
              isPayByCard = true
              calculateOrder(data.paymentSource)
              return actions.order.create({
                payer: {
                  email_address: classmateEmail,
                },
                purchase_units: [
                  {
                    amount: {
                      value: calculatedAttendanceFee,
                    },
                  },
                ],
              })
            },
            onApprove: function (data, actions) {
              // Capture order after payment approved
              resultData = data
              return actions.order.capture().then(function (details) {
                resultDetails = details // Save details to be rendered
                orderId = resultDetails.id
                isPaymentSuccessful = true
                logPayment(details, resultData)
                emailEventAcknowledgement(details)
              })
            },
            
            onError: function (err) {
              // Log error if something goes wrong during approval
              console.log("Something went wrong", err)
            },
          })
          .render("#paypal-button-container")
        })
  }

  const handleRegisterAndPay = () => {
    if (isPaymentSuccessful) {
      return
    }
    isAttendeeError = false
    isEmailError = false
    isClassmateNameError = false
    isCompanionNameError = false

    // Validate the input data
    if (noAttendees === 0) {
      isAttendeeError = true
    }
    if (classmateEmail === '') {
      isEmailError = true
    }
    if (classmateFirstName === '' || classmateLastName === '') {
      isClassmateNameError = true
    }
    if (noAttendees > 1) {
      if (companionLastName === '' || companionLastName === '') {
        isCompanionNameError = true
      }
    }

    if (isAttendeeError || isEmailError || isClassmateNameError || isCompanionNameError) {
      return
    }

    if(eventType === FRIDAY_EVENT) {
      processFridaySignup()
    }

    if (eventType === SATURDAY_EVENT) {
      // Create payment no charge details & results when
      // credit card payment isn't allowed
      if (isPayAtDoor || isPayByMail) {
        isAttendeeError = false
        const details = createNochargeDetails()
        const resultData = createNochargeResultData()
        details.status = isPayByMail ? TXN_PAYMENT_PENDING_MAIL : TXN_PAYMENT_PENDING_DOOR
        details.purchase_units[0].amount.value = orderTotal

        resultDetails = details
        logPayment(details, resultData)
        emailEventAcknowledgement(details, resultData)
        isPaymentSuccessful = true
      } 
      
      if (isPayByCard) {
        if (orderTotal > 0) {
          processCardPayment()
        }
        if (orderTotal === 0) {
          const details = createNochargeDetails()
          const resultData = createNochargeResultData()
          details.purchase_units[0].amount.value = orderTotal

          resultDetails = details
          logPayment(details, resultData)
          emailEventAcknowledgement(details, resultData)
          isPaymentSuccessful = true
        }
      }

    }
  }
</script>

<section class="relative">
  <div class="bg-gray-900">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2 class="text-lg font-semibold leading-6 tracking-wider text-gray-300 uppercase">{ eventData.checkout.heading }</h2>
          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{ eventData.checkout.subheading }</p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white sm:mt-12 lg:mt-10">
      <div class="relative">
        <div class="absolute inset-0 bg-gray-900 h-3/4"></div>
        <div class="relative px-4 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-1 lg:gap-5 lg:space-y-0">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="px-6 py-8 bg-gray-50 sm:p-10 sm:pb-6">
                <div>
                  <h3 class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full" id="tier-standard">{ eventData.date }</h3>
                </div>
                <div class="flex items-baseline mt-4 text-6xl font-extrabold">
                  { eventData.checkout.title }
                </div>
              </div>
              <div class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <EventSummary event={ eventData }/>

                  <Attendees
                    eventType={ eventType }
                    calculateOrder={ calculateOrder }
                    bind:isSponsor={ isSponsor }
                    bind:isVeteran={ isVeteran }
                    bind:isAttendeeError={ isAttendeeError }
                    bind:isClassmateNameError={ isClassmateNameError } 
                    bind:isCompanionNameError={ isCompanionNameError } 
                    bind:isEmailError={ isEmailError }
                    bind:noAttendees={ noAttendees }
                    bind:classmateEmail={ classmateEmail }
                    bind:classmateFirstName={ classmateFirstName }
                    bind:classmateLastName={ classmateLastName }
                    bind:companionFirstName={ companionFirstName }
                    bind:companionLastName={ companionLastName }
                  />

                  {#if eventType === SATURDAY_EVENT}
                    <PaymentMethod 
                      bind:isPayByCard={ isPayByCard }
                      bind:isPayByMail={ isPayByMail }
                      bind:isPayAtDoor={ isPayAtDoor }
                      calculateOrder={ calculateOrder }
                    />
                  {/if}

                  <OrderSummary eventType={ eventType } 
                    bind:noAttendees={ calculatedAttendees } 
                    bind:subtotal={calculatedAttendanceFee } 
                    bind:estTxnFee={ estTxnFee } 
                    bind:orderTotal={ orderTotal }
                  />
                </ul>

                {#if !isPaymentSuccessful}
                  <button class="flex items-center m-auto" on:click={ handleRegisterAndPay }>
                    <span class="inline-flex items-center mb-4 px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white">
                      {#if eventType === FRIDAY_EVENT}
                        Register
                      {:else}
                        Register & pay
                      {/if}
                    </span>
                  </button>
                {/if}

                {#if eventType === SATURDAY_EVENT}
                  <Payment bind:orderId={ orderId }
                    bind:isPayByCard={ isPayByCard }
                    bind:isPayAtDoor={ isPayAtDoor }
                    bind:isPayByMail={ isPayByMail }
                    bind:isPaymentSuccessful={ isPaymentSuccessful }
                  />
                {/if}

                {#if isPaymentSuccessful}
                  <Receipt 
                    eventType={ eventType }
                    orderId={ orderId } 
                    totalCharged={ resultDetails.purchase_units[0].amount.value }
                    txnStatus={ resultDetails.status } txnCreated={ resultDetails.create_time }
                    payerFirstName={ resultDetails.payer.name.given_name }
                    payerLastName={ resultDetails.payer.name.surname }
                    payerAddressLine1={ resultDetails.purchase_units[0].shipping.address.address_line_1 }
                    payerAddressLine2={ resultDetails.purchase_units[0].shipping.address.address_line_2 }
                    payerCity={ resultDetails.purchase_units[0].shipping.address.admin_area_2 }
                    payerState={ resultDetails.purchase_units[0].shipping.address.admin_area_1 }
                    payerPostalCode={ resultDetails.purchase_units[0].shipping.address.postal_code }
                    payerEmail={ resultDetails.payer.email_address }
                    isSponsor={ isSponsor }
                    isVeteran={ isVeteran }
                    classmateFirstName={ classmateFirstName } classmateLastName={ classmateLastName }
                    companionFirstName={ companionFirstName } companionLastName={ companionLastName }
                    isPayByCard={ isPayByCard }
                  />
                {/if}

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>