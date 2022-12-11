<script>
  import { page } from '$app/stores';
  import { atcb_action } from '../../utils/atcb.js'
  import fridayEvent from '../../assets/fridayEvent.json'
  import saturdayEvent from '../../assets/saturdayEvent.json'
  import { FRIDAY_EVENT, SATURDAY_EVENT } from '../../utils/constants.js'


  let isPaymentVisible = false
  let back = $page.data.params.get('back') || ''
  let backPage = back === "signup" ? "events" : back

  let eventType = $page.data.params.get('event') || ''
  const eventData = eventType == FRIDAY_EVENT ? fridayEvent : saturdayEvent

  const handleAddEventToCalendar = (event) => {
    event.preventDefault()
    atcb_action({
      name: eventData.name,
      location: eventData.location,
      description: eventData.description,
      startDate: eventData.startDate,
      endDate: eventData.endDate,
      startTime: eventData.startTime,
      endTime: eventData.endTime,
      options: eventData.options,
      iCalFileName: eventData.iCalFileName
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
          <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">{ eventData.signup.heading }</h2>
          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{ eventData.signup.subheading }</p>
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
                  <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">{ eventData.date }</h3>
                </div>
                <div class="mt-4 flex items-baseline text-6xl font-extrabold">
                  { eventData.signup.title }
                </div>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  {#each eventData.signup.summaryInfo as summaryBullet}
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">{ summaryBullet }</p>
                    </li>
                  {/each}
                </ul>
                <button id="addCalendarBtn" class="atcb flex items-center m-auto" on:click={ handleAddEventToCalendar }>
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white">Save this to my calendar!!!</span>
                </button>
                <a id="checkoutLink" class="flex items-center m-auto" href="checkout?back=signup&event={ eventType }">
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white">Proceed to checkout</span>
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