<script>
  export let isPayByCard
  export let handlePayByCard
</script>

<li class="flex items-start">
  <div class="flex-shrink-0">
    <!-- Heroicon name: outline/check -->
    <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <div class="ml-3 text-base text-gray-700">How will you be paying?</div>

  <div class="relative flex text-left mt-4">
    <li class="flex mt-4">
      <span class="relative flex items-center text-left">
        <input id="paybycard-radio" type="radio" value="" name="paybycard-radio" 
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="paybycard-radio" class="block ml-2">
          Credit/debit card
        </label>

        <input id="paybymail-radio" type="radio" value="" name="paybymail-radio" 
          class="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="paybymail-radio" class="block ml-2">
          By Mail
        </label>

        <input id="payatdoor-radio" type="radio" value="" name="payatdoor-radio" 
          class="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="payatdoor-radio" class="block ml-2">
          At the door
        </label>
      </span>
    </li>
  </div>
</li>