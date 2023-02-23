<script>
  import fridayEvent from '../../assets/fridayEvent.json'
  import saturdayEvent from '../../assets/saturdayEvent.json'
  import golfEvent from '../../assets/golfEvent.json'
  import tourEvent from '../../assets/tourEvent.json'
</script>

<style>
</style>

<section class="relative">
  
<div class="bg-gray-900">
  <div class="pt-12 sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
        <h2 class="text-lg font-semibold leading-6 tracking-wider text-gray-300 uppercase">Upcoming Events</h2>
        <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Reconnect with classmates at these events!</p>
        <p class="text-xl text-gray-300"></p>
      </div>
    </div>
  </div>
  
  <div class="pb-12 mt-8 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
    <div class="relative">
      <div class="absolute inset-0 bg-gray-900 h-1/2"></div>
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <!-- Top row of event cards -->
        <div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0 mb-6">
          
          <!-- Friday Night Event description -->
          <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full" id="tier-standard">
                  { fridayEvent.date }
                </h3>
              </div>
              <div class="flex items-baseline mt-4 text-6xl font-extrabold">
                { fridayEvent.events.title }
              </div>
              <div class="flex flex-wrap justify-center w-full p-0 m-0">
                <p class="mt-5 text-xl text-gray-500">An informal gathering to relax & reconnect!</p>
                <img class="w-96 h-96" src="dogwood_social_club.png" alt="Dogwood"/>
              </div>
            </div>
            <div class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
              <ul class="space-y-4">
                {#each fridayEvent.events.summaryInfo as summaryBullet}
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

                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: outline/check -->
                    <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base text-gray-700 underline"><a href="https://dogwood-social-house.business.site/" target="_blank" rel="noopener noreferrer">Click for Website</a></p>
                </li>
              </ul>

              <a id="FridaySignupLink" class="flex items-center m-auto" href="signup?event=friday">
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white">Sign me up!!!</span>
              </a>

            </div>
          </div>

          <!-- Saturday Night Event description -->
          <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full" id="tier-standard">
                  {saturdayEvent.date}
                </h3>
              </div>
              <div class="flex items-baseline mt-4 text-6xl font-extrabold">
                { saturdayEvent.events.title[0]}
              </div>
              <div class="flex items-baseline text-6xl font-extrabold">
                { saturdayEvent.events.title[1]} 
              </div>
              <div class="flex flex-wrap justify-center w-full p-0 m-0">
                <p class="mt-5 text-xl text-gray-500">Hors d’oeurves, cash bar, & a time to remember!</p>
                <img class="w-96 h-96" src="drury_plaza.jpeg" alt="Drury Plaza"/>
              </div>
            </div>
            <div class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
              <ul class="space-y-4">
                {#each saturdayEvent.events.summaryInfo as summaryBullet}
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      { summaryBullet }
                    </p>
                  </li>
                {/each}

                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: outline/check -->
                    <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base text-gray-700 underline"><a href="https://www.druryhotels.com/locations/cape-girardeau-mo/drury-plaza-hotel-cape-girardeau-conference-center" target="_blank" rel="noopener noreferrer">Click for Website</a></p>
                </li>
              </ul>
              <a id="SaturdaySignupLink" class="flex items-center m-auto" href="signup?event=saturday">
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white">Sign me up!!!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="absolute inset-0 bg-gray-900 h-1/2"></div>
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
  
        <!-- Bottom row of event cards -->
        <div class="pt-6 max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">

          <!-- Golfing Event description -->
          <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full" id="tier-standard">
                  { golfEvent.date }
                </h3>
              </div>
              <div class="flex items-baseline mt-4 text-6xl font-extrabold">
                { golfEvent.events.title }
              </div>
              <div class="flex flex-wrap justify-center w-full p-0 m-0">
                <p class="mt-5 text-xl text-gray-500">Hors d’oeurves, cash bar, & a time to remember!</p>
                <img class="w-96 h-96" src="drury_plaza.jpeg" alt="Drury Plaza"/>
              </div>
            </div>
            <div class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
              <ul class="space-y-4">
                {#each golfEvent.events.summaryInfo as summaryBullet}
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      { summaryBullet }
                    </p>
                  </li>
                {/each}

              </ul>
      
            </div>
          </div>

          <!-- CHS Tour description -->
          <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full" id="tier-standard">
                  {tourEvent.date}
                </h3>
              </div>
              <div class="flex items-baseline mt-4 text-6xl font-extrabold">
                { tourEvent.events.title }
              </div>
              <div class="flex flex-wrap justify-center w-full p-0 m-0">
                <p class="mt-5 text-xl text-gray-500">Hors d’oeurves, cash bar, & a time to remember!</p>
                <img class="w-96 h-96" src="drury_plaza.jpeg" alt="Drury Plaza"/>
              </div>
            </div>
            <div class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
              <ul class="space-y-4">
                {#each tourEvent.events.summaryInfo as summaryBullet}
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      { summaryBullet }
                    </p>
                  </li>
                {/each}

              </ul>
            </div>
        </div>
      </div>
    </div>

  </div>
</div>

</section>