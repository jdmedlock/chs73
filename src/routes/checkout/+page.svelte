<script>
  import axios from 'axios'
  import { page } from '$app/stores';
  import { loadScript } from "@paypal/paypal-js"
  import generateOrderID from '../../utils/generateOrderID.js'
  import fridayEvent from '../../assets/fridayEvent.json'
  import saturdayEvent from '../../assets/saturdayEvent.json'
  import { 
    FRIDAY_EVENT, SATURDAY_EVENT, 
    CREDITCARD_TXN_FEE, PAYPAY_TXN_FEE, EVENT_FEE, 
    TXN_COMPLETED
  } from '../../utils/constants.js'
  import EventSummary from './eventSummary.svelte'
  import OrderSummary from './orderSummary.svelte'
  import Receipt from './checkoutReceipt.svelte'

  let back = $page.data.params.get('back') || ''
  let backPage = back === "signup" ? "events" : back

  let eventType = $page.data.params.get('event') === 'friday' ? FRIDAY_EVENT : SATURDAY_EVENT
  const eventData = eventType === FRIDAY_EVENT ? fridayEvent : saturdayEvent

  let resultData
  let resultDetails

  let classmateEmail = ''
  let classmateFirstName = ''
  let classmateLastName = ''
  let companionFirstName = ''
  let companionLastName = ''

  let calculatedAttendees = 0
  let calculatedEventFee = 0
  let estTxnFee = 0
  let noAttendees = 0
  let orderTotal = 0
  
  let showAttendees = false
  let showBadgeNames = false
  let isAttendeeError = false
  let isClassmateNameError = false
  let isCompanionNameError = false
  let isPaymentVisible = false
  let isPaymentStarted = false
  let isPaymentSuccessful = false
  let isSponsor = false

  const calculateOrder = (paymentSource) => {
    if (paymentSource !== undefined && typeof paymentSource === 'string' && eventType === SATURDAY_EVENT) {
      estTxnFee = paymentSource === 'card' ? CREDITCARD_TXN_FEE : PAYPAY_TXN_FEE
    } else {
      estTxnFee = 0
    }
    calculatedAttendees = isSponsor ? noAttendees + 1 : noAttendees

    if (eventType === SATURDAY_EVENT) {
      calculatedEventFee = EVENT_FEE * calculatedAttendees
      orderTotal = calculatedEventFee + estTxnFee
    } else {
      calculatedEventFee = 0
      orderTotal = 0
    }
  }

  const handleNoAttendees = (event) => {
    noAttendees = parseInt(event.target.text)
    calculateOrder()
    showAttendees = false
    showBadgeNames = true
  }

  const handleSponsor = (event) => {
    isSponsor = !isSponsor
    calculateOrder()
    setTimeout(() => event.target.checked = isSponsor, 0)
  }

  const logPayment = (details) => {
    axios.post(`${ import.meta.env.VITE_BE_URL }/logPayment`, {
      order_id: details.id,
      item_description: eventData.eventType,
      order_amount: parseFloat(details.purchase_units[0].amount.value), 
      transaction_status: details.status, 
      transaction_creation_time: details.create_time, 
      transaction_update_time: details.update_time,
      payer_source: data.paymentSource, 
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
      billing_token: data.billingToken, 
      facilitator_access_token: data.facilitatorAccessToken, 
      accelerated_payment: data.accelerated, 
      soft_descriptor: details.softDescriptor, 
      is_sponsor: isSponsor ? 'Yes' : 'No',
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

  const processFridaySignup = () => {
    const currentDate = new Date()
    const currentTime = currentDate.toISOString()
    console.log(`currentTime: ${ currentTime }`)
    const details = {
      id: generateOrderID(classmateFirstName.concat(classmateLastName)),
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
    }
    console.log('details: ', details)

    logPayment(details)
    emailEventAcknowledgement(details)
  }

  const processSaturdayPayment = () => {
    loadScript({ 
        "client-id": `${ import.meta.env.VITE_PAYPAL_CLIENT_ID }`, 
        "disable-funding": "paylater"
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
              // Set up the transaction
              console.log('Create order: ', data)

              // Process the payment if no errors were detected
              calculateOrder(data.paymentSource)
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: calculatedEventFee,
                    },
                  },
                ],
              })
            },
            onApprove: function (data, actions) {
              // Capture order after payment approved
              resultData = data
              return actions.order.capture().then(function (details) {
                resultDetails = details
                console.log("Captured order: ", details)
                isPaymentSuccessful = true
                logPayment(details)
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

  const handleCalculateCheckout = () => {
    isPaymentVisible = true
    isAttendeeError = false
    isClassmateNameError = false
    isCompanionNameError = false

    // Validate the input data
    if (noAttendees === 0) {
      isAttendeeError = true
      isPaymentVisible = false
      return
    }
    if (classmateFirstName === '' || classmateLastName === '') {
      isClassmateNameError = true
      isPaymentVisible = false
      return
    }
    if (noAttendees > 1) {
      if (companionLastName === '' || companionLastName === '') {
        isCompanionNameError = true
        isPaymentVisible = false
        return
      }
    }

    if(eventType === FRIDAY_EVENT) {
      processFridaySignup()
    }

    if (isPaymentVisible && !isPaymentStarted && eventType === SATURDAY_EVENT) {
      isPaymentStarted = true
      processSaturdayPayment()
    }

  }
</script>

<style>
#paypal-button-container {
  margin: 30px 0;
}
</style>

<section class="relative">
  <div class="bg-gray-900">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">{ eventData.checkout.heading }</h2>
          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{ eventData.checkout.subheading }</p>
          <p class="text-xl text-gray-300"></p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white sm:mt-12 lg:mt-16">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-gray-900"></div>
        <div class="relative mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-1 lg:gap-5 lg:space-y-0">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="px-6 py-8 bg-gray-50 sm:p-10 sm:pb-6">
                <div>
                  <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">September 16, 2023</h3>
                </div>
                <div class="mt-4 flex items-baseline text-6xl font-extrabold">
                  { eventData.checkout.title }
                </div>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <EventSummary event={ eventData }/>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div class="ml-3 text-base text-gray-700">Who will be attending?</div>
                  </li>

                  <li class="flex items-start ml-8">
                    <div class="flex flex-col relative text-left">
                      <div>
                        <button type="button" class="flex no-wrap w-2/12 justify-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
                          id="NoAttendeesBtn" aria-expanded="true" aria-haspopup="true" on:click={() => (showAttendees = !showAttendees)}>
                          No. Attendees
                          <!-- Heroicon name: mini/chevron-down -->
                          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                          </svg>
                        </button>
                        {#if isAttendeeError}
                          <div name="attendeeError" class="font-bold text-red-700">
                            You must choose the number of attendees before selecting a payment option
                          </div>
                        {/if}
                      </div>

                      {#if showAttendees}
                        <div class="relative w-8 ml-28 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                          <div class="py-1" role="none">
                            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                            <a href="#top" class="text-gray-700 block px-4 py-2 text-sm" 
                              role="menuitem" tabindex="0" id="menu-item-0" on:click={ handleNoAttendees }>1</a>
                            <a href="#top" class="text-gray-700 block px-4 py-2 text-sm" 
                              role="menuitem" tabindex="0" id="menu-item-1" on:click={ handleNoAttendees }>2</a>
                          </div>
                        </div>
                      {/if}

                      {#if showBadgeNames}
                        <div class="flex flex-wrap relative w-full ml-5 mb-3 mt-1">
                          {#if eventType === FRIDAY_EVENT}
                            <span class="relative w-5/12 mb-3">
                              <label
                                class="flex-nowrap block uppercase text-gray-700 text-xs font-bold mb-2"
                                for="full-name">
                                Your email address:
                              </label>
                              <input name="name" bind:value={ classmateEmail } 
                                type="text" required aria-required="true"
                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                                bg-white rounded text-sm shadow focus:outline-none focus:ring
                                w-full"
                                placeholder="Your email address"
                                style="transition: all 0.15s ease 0s;"
                                on:input={ classmateEmail } />
                            </span>
                          {/if}
                          <span class="relative w-5/12 mb-3">
                            <label
                              class="flex-nowrap block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="full-name">
                              Your name badge:
                            </label>
                            <input name="name" bind:value={ classmateFirstName } 
                              type="text" required aria-required="true"
                              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                              bg-white rounded text-sm shadow focus:outline-none focus:ring
                              w-full"
                              placeholder="Your first name"
                              style="transition: all 0.15s ease 0s;"
                              on:input={ classmateFirstName } />
                          </span>
                          <span class="relative w-5/12 mb-3">
                            <label
                              class="block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="full-name">
                              &nbsp;
                            </label>
                            <input name="name" bind:value={ classmateLastName } 
                              type="text" required aria-required="true"
                              class="border-0 ml-2 px-3 py-3 placeholder-gray-400 text-gray-700
                              bg-white rounded text-sm shadow focus:outline-none focus:ring
                              w-full"
                              placeholder="Your last name"
                              style="transition: all 0.15s ease 0s;"
                              on:input={ classmateLastName } />
                          </span>
                          {#if isClassmateNameError}
                            <div name="classmateError" class="font-bold text-red-700">
                              You must enter your first and last name for your name badge
                            </div>
                          {/if}
                          {#if noAttendees > 1}
                            <span class="relative w-5/12 mb-3">
                              <label
                                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                for="full-name">
                                Companion name badge:
                              </label>
                              <input name="name" bind:value={ companionFirstName } 
                                type="text" required aria-required="true"
                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                                bg-white rounded text-sm shadow focus:outline-none focus:ring
                                w-full"
                                placeholder="Companion first name"
                                style="transition: all 0.15s ease 0s;"
                                on:input={ companionFirstName } />
                            </span>
                            <span class="relative w-5/12 mb-3">
                              <label
                                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                for="full-name">
                                &nbsp;
                              </label>
                              <input name="name" bind:value={ companionLastName } 
                                type="text" required aria-required="true"
                                class="border-0 ml-1 px-3 py-3 placeholder-gray-400 text-gray-700
                                bg-white rounded text-sm shadow focus:outline-none focus:ring
                                w-full"
                                placeholder="Companion last name"
                                style="transition: all 0.15s ease 0s;"
                                on:input={ companionLastName } />
                            </span>
                            {#if isCompanionNameError}
                              <div name="companionError" class="font-bold text-red-700">
                                You must enter youe companions first and last name for their name badge
                              </div>
                            {/if}
                          {/if}
                        </div>
                      {/if}
                      {#if eventType === SATURDAY_EVENT}
                        <label class="mt-2">
                          <input type="checkbox" bind:checked={ isSponsor } on:click|preventDefault={ handleSponsor }/>
                          Click here if you'd like to help a classmate who might otherwise not be able to attend. You will be billed for one additional admittance.
                        </label>
                      {/if}
                    </div>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <OrderSummary noattendees={ calculatedAttendees } subtotal={calculatedEventFee }
                      esttxnfee={ estTxnFee } ordertotal={ orderTotal } />
                  </li>

                </ul>
                <button class="flex items-center m-auto" on:click={ handleCalculateCheckout }>
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white"> Calculate & checkout </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {#if isPaymentVisible}
      <div class="flex flex-col items-center bg-white">
        <div id="paypal-button-container" />
      </div>
    {/if}

    {#if isPaymentSuccessful}
      <Receipt id={ resultDetails.id } 
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
        classmateFirstName={ classmateFirstName } classmateLastName={ classmateLastName }
        companionFirstName={ companionFirstName } companionLastName={ companionLastName }
      />
    {/if}

  </div>
</section>