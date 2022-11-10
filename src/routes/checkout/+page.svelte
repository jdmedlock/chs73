<script>
  import axios from 'axios'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores';
  import { atcb_action } from '../../utils/atcb.js'
  import { loadScript } from "@paypal/paypal-js"
  import { PUBLIC_BE_URL, PUBLIC_PAYPAL_CLIENT_ID } from '$env/static/public'

  const CREDITCARD_TXN_FEE = 1.24
  const PAYPAY_TXN_FEE = 1.36

  export let EVENT_FEE = 30.00

  let isPaymentVisible = false
  let isPaymentSuccessful = false
  let back = $page.data.params.get('back') || ''
  let backPage = back === "signup" ? "events" : back
  let resultData 
  let resultDetails
  let estTxnFee = 0
  let orderTotal = 0
  let sponsor

  const handleAddDruryToCalendar = (event) => {
    event.preventDefault()
    atcb_action({
      name: "CHS73 50th Reunion - Dinner",
      location: "Drury Inn, 3351 Percy Drive, Cape Girardeau, MO 63701",
      description: "Hors d’oeurves, a cash bar and a time to remember!\n\n- Hors d’oeurves + cash bar\n- Discounted room rate of $148/night for Sept. 15 & 16 (includes free breakfast + evening drinks & snacks)\n- Call 1-800-325-0720 before August 28, 2023 and use Group number 10018741 to make your reservation",
      startDate: "2023-09-16",
      endDate: "2023-09-16",
      startTime:"16:00",
      endTime:"23:30",
      options: ['Apple', 'Google', 'iCal'],
      iCalFileName: "CHS73_Reunion_20230916",
    })
  }

  const handleSaturdaySignup = (event) => {
    isPaymentVisible = !isPaymentVisible
    isPaymentSuccessful = false
    if (isPaymentVisible) {
      loadScript({ 
        "client-id": `${ PUBLIC_PAYPAL_CLIENT_ID }`, 
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
            createOrder: function (data, actions) {
              // Set up the transaction
              console.log('Create order: ', data)
              if (data.paymentSource === 'card') {
                estTxnFee = CREDITCARD_TXN_FEE
              } else {
                estTxnFee = PAYPAY_TXN_FEE 
              }
              orderTotal = estTxnFee + EVENT_FEE
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: EVENT_FEE,
                    },
                  },
                ],
              })
            },
            onApprove: function (data, actions) {
              // Capture order after payment approved
              console.log('Payment approved: ', data)
              resultData = data
              return actions.order.capture().then(function (details) {
                resultDetails = details
                console.log("Captured order: ", details)
                isPaymentVisible = false
                isPaymentSuccessful = true

                axios.post(`${ PUBLIC_BE_URL }/logPayment`, {
                  order_id: details.id,
                  item_description: 'Saturday Gathering',
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
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                })
                
                // Email transaction receipt to user
                axios.post(`${ PUBLIC_BE_URL }/sendEventAck`, {
                  order_id: details.id,
                  item_description: 'Saturday Gathering', 
                  event_date: '2023-09-16',
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
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                })
              })
            },
            
            onError: function (err) {
              // Log error if something goes wrong during approval
              alert("Something went wrong");
              console.log("Something went wrong", err)
            },
          })
          .render("#paypal-button-container")
        })
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
          <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Checkout</h2>
          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Review & pay for Saturday's Gathering</p>
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
                  Saturday's Reunion Gathering
                </div>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">Drury Plaza Hotel Conf. Center: 6:00 PM - 11:30 PM</p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div class="flex flex-col gap-y-0">
                      <div class="ml-3 text-base text-gray-700 mb-2">Order Summary:</div>
                      <div class="grid grid-cols-2 gap-x-4 ml-8 bg-gray-200">
                        <div>Subtotal </div><div class="justify-self-end">${ EVENT_FEE.toFixed(2) }</div>
                        <div>Est. transaction fee </div><div class="justify-self-end">{ estTxnFee.toFixed(2) }</div>
                        <div>Taxes </div><div class="underline justify-self-end">0.00</div>
                        <div class="font-bold">Order Total </div><div class="font-bold justify-self-end">${ orderTotal.toFixed(2) }</div>
                      </div>
                    </div>
                  </li>

                  <li class="flex items-start">
                    <label>
                      <input type="checkbox" bind:checked={ sponsor }>
                      I'd like to sponsor a classmate who needs help
                    </label>
                  </li>

                </ul>
                <button class="flex items-center m-auto" on:click={ handleSaturdaySignup }>
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white"> Register & pay </span>
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
      <div class="flex flex-col items-center bg-white h-96 text-base">
        <h3 class="mt-4 rounded-full font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">Your payment was successfully processed (check your email for a reciept)</h3>
        <div class="grid grid-cols-2 gap-x-4 mt-4 ml-8 bg-gray-200 w-1/2">
          <div>Order ID:</div><div>{ resultDetails.id }</div>
          <div>Amount:</div><div>{ resultDetails.purchase_units[0].amount.value }</div>
          <div>Transaction status:</div><div>{ resultDetails.status }</div>
          <div>Transaction created:</div><div>{ resultDetails.create_time }</div>
          <div>Name:</div><div> { resultDetails.payer.name.given_name } { resultDetails.payer.name.surname }</div>
          <div>Address:</div><div>{ resultDetails.purchase_units[0].shipping.address.address_line_1 }</div>
          {#if resultDetails.purchase_units[0].shipping.address.address_line_2}
            <div>&nbsp;</div><div>{ resultDetails.purchase_units[0].shipping.address.address_line_2 }</div>
          {/if}
          <div>City:</div><div>{ resultDetails.purchase_units[0].shipping.address.admin_area_2 }</div>
          <div>State:</div><div>{ resultDetails.purchase_units[0].shipping.address.admin_area_1 }</div>
          <div>Zipcode:</div><div>{ resultDetails.purchase_units[0].shipping.address.postal_code }</div>
          <div>Email:</div><div>{ resultDetails.payer.email_address }</div>
        </div>
      </div>
    {/if}

  </div>
</section>