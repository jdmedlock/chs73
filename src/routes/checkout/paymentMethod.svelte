<script>
  import { PAY_BY_CARD, PAY_BY_MAIL, PAY_AT_DOOR } from '../../utils/constants.js'

  export let isPayByCard
  export let isPayByMail
  export let isPayAtDoor

  const handlePaymentMethod = () => {
    const paymentMethod = document.querySelector('input[name="paymentmethod-radio"]:checked').value
    switch (paymentMethod) {
      case PAY_BY_CARD:
        isPayByCard = true
        break
      case PAY_BY_MAIL:
        isPayByMail = true
        break
      case PAY_AT_DOOR:
        isPayAtDoor = true
        break
      default:
        throw new Error(`Unknown payment method selected - ${ paymentMethod }`)
    }
  }
</script>

<li class="flex relative">
  <div class="flex flex-shrink-0">
    <!-- Heroicon name: outline/check -->
    <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span class="ml-3 text-base text-gray-700">How will you be paying?</span>
  </div>

  <div class="mt-10 flex justify-items-start">
    <li class="flex justify-items-start">
      <div class="relative flex items-center gap-1 -mx-40">
        <input id="paybycard-radio" type="radio" value="{ PAY_BY_CARD }" name="paymentmethod-radio" 
          class="w-4 h-4 checked:bg-orange-600"
          on:change={ handlePaymentMethod }>
        <label for="paybycard-radio" class="block ml-2">
          Credit/debit card
        </label>

        <input id="paybymail-radio" type="radio" value="{ PAY_BY_MAIL }" name="paymentmethod-radio" 
          class="ml-4 w-4 h-4 checked:bg-orange-600"
          on:change={ handlePaymentMethod }>
        <label for="paybymail-radio" class="block ml-2">
          By Mail
        </label>

        <input id="payatdoor-radio" type="radio" value="{ PAY_AT_DOOR }" name="paymentmethod-radio" 
          class="ml-4 w-4 h-4 checked:bg-orange-600"
          on:change={ handlePaymentMethod }>
        <label for="payatdoor-radio" class="block ml-2">
          At the door
        </label>
      </div>
    </li>
  </div>
</li>