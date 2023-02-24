<script>
  import { page } from '$app/stores';
  import { atcb_action } from '../../utils/atcb.js'
  import fridayEvent from '../../assets/fridayEvent.json'
  import saturdayEvent from '../../assets/saturdayEvent.json'
  import golfEvent from '../../assets/golfEvent.json'
  import tourEvent from '../../assets/tourEvent.json'
  import { FRIDAY_EVENT, SATURDAY_EVENT, GOLF_EVENT, TOUR_EVENT } from '../../utils/constants.js'

  let isPaymentVisible = false

  let eventParam = $page.data.params.get('event')
  let eventType
  let eventData
  switch (eventParam) {
    case 'friday':
      eventType = FRIDAY_EVENT 
      eventData = fridayEvent
      break
    case 'saturday':
      eventType = SATURDAY_EVENT 
      eventData = saturdayEvent
      break
    case 'golf':
      eventType = GOLF_EVENT
      eventData = golfEvent
      break
    case 'tour':
      eventType = TOUR_EVENT
      eventData = tourEvent
      break
  }

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
      <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2 class="text-lg font-semibold leading-6 tracking-wider text-gray-300 uppercase">{ eventData.signup.heading }</h2>
          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{ eventData.signup.subheading }</p>
          <p class="text-xl text-gray-300"></p>
        </div>
      </div>
    </div>

    <div class="pb-12 mt-8 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
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
                  { eventData.signup.title }
                </div>
              </div>
              <div class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  {#each eventData.signup.summaryInfo as summaryBullet}
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">{ summaryBullet }</p>
                    </li>
                  {/each}
                </ul>
                <button id="addCalendarBtn" class="flex items-center m-auto atcb" on:click={ handleAddEventToCalendar }>
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white">Save this to my calendar!!!</span>
                </button>
                <a id="checkoutLink" class="flex items-center m-auto" href="checkout?event={ eventType }">
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white">Proceed to registration</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>