<script>
  import { goto } from '$app/navigation'
  import { page } from '$app/stores';
  import { atcb_action } from '../../utils/atcb.js'

  export let cartTotal = 25.00

  let isPaymentVisible = false
  let back = $page.data.params.get('back') || ''
  let backPage = back === "signup" ? "events" : back

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
</script>

<style>
</style>

<section class="relative">
  <div class="bg-gray-900">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Signup for Saturday</h2>
          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Signup for Saturday's Gathering</p>
          <p class="text-xl text-gray-300"></p>
        </div>
      </div>
    </div>
    <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
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
                  Drury Plaza Conference Center
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
                    <p class="ml-3 text-base text-gray-700">Drury Plaza Hotel Conf. Center: 4:00 PM - 11:30 PM</p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">Hors d’oeurves + cash bar</p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">Music + a few surprises</p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">$25 for the evening</p>
                  </li>
                </ul>
                <button class="atcb flex items-center m-auto" on:click={ handleAddDruryToCalendar }>
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white"> Save this to my calendar!!! </span>
                </button>
                <a class="flex items-center m-auto" href="checkout?back=signup">
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white"> Proceed to checkout </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {#if isPaymentVisible}
      <div class="flex flex-col items-center rounded-lg shadow-lg bg-gray-200">
        <div id="paypal-button-container" />
      </div>
    {/if}

  </div>
</section>