<script>
  import { SATURDAY_EVENT } from '../../utils/constants'
  import saturdayEvent from '../../assets/saturdayEvent.json'
</script>

<style>
</style>

<section class="relative">
  
<div class="bg-gray-900">
  <div class="pt-20">
    <div class="mx-auto text-center max-w-7xl px-8">
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
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-md mx-auto mb-6 space-y-4 md:max-w-full md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0">

          <!-- Saturday Event description -->
          <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full" id="tier-standard">
                  {saturdayEvent.date}
                </h3>
              </div>
              <div class="flex items-baseline mt-4 text-4xl font-extrabold">
                { saturdayEvent.events.heading[0] }
              </div>
              <div class="flex items-baseline text-4xl font-extrabold">
                { saturdayEvent.events.heading[1] } 
              </div>
              <div class="flex flex-wrap justify-center w-full p-0 m-0">
                <p class="mt-5 text-xl text-gray-500">{saturdayEvent.events.subheading }</p>
                <img class="w-72 h-72" src="cape_county_park_shelter.jpg" alt="Park Shelter"/>
              </div>
            </div>
            <div class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-white sm:p-10 sm:pt-6">
              <a id="SaturdaySignupLink" class="flex items-center m-auto" href="checkout?event={ SATURDAY_EVENT }">
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-2xl font-medium bg-orange-500 text-white">Click for more info!!!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

</section>