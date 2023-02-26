<script>
  import { PAY_BY_MAIL, PAY_AT_DOOR } from '../../utils/constants.js'

  export let isPayByMail
  export let isPayAtDoor
  export let calculateOrder

  const handlePaymentMethod = () => {
    const paymentMethod = document.querySelector('input[name="paymentmethod-radio"]:checked').value
    switch (paymentMethod) {
      case PAY_BY_MAIL:
        isPayByMail = true
        isPayAtDoor = false
        break
      case PAY_AT_DOOR:
        isPayAtDoor = true
        isPayByMail = false
        break
      default:
        throw new Error(`Unknown payment method selected - ${ paymentMethod }`)
    }
    calculateOrder()
  }
</script>

<paymentmethod>
  <li class="relative flex mt-4 text-gray-700">
    <div class="flex flex-shrink-0">
      <!-- Heroicon name: outline/check -->
      <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span class="ml-3 text-base text-gray-700">How will you be paying?</span>
    </div>

    <div class="flex mt-10 justify-items-start">
      <li class="flex justify-items-start">
        <div class="grid items-center grid-cols-2 gap-1 -mx-40 lg:grid-cols-3">

          <div class="flex items-center">
            <input id="paybymail-radio" type="radio" value="{ PAY_BY_MAIL }" name="paymentmethod-radio" 
              class="w-4 h-4 ml-1 lg:ml-6 checked:bg-orange-600"
              on:change={ handlePaymentMethod }>
            <label for="paybymail-radio" class="block ml-2">
              By mail
            </label>
          </div>

          <div class="flex items-center">
            <input id="payatdoor-radio" type="radio" value="{ PAY_AT_DOOR }" name="paymentmethod-radio" 
              class="w-4 h-4 ml-0 checked:bg-orange-600"
              on:change={ handlePaymentMethod }>
            <label for="payatdoor-radio" class="block ml-2">
              At the door
            </label>
          </div>
        </div>
      </li>
    </div>
  </li>
</paymentmethod>