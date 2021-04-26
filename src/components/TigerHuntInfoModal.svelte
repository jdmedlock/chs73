<script>
  export let action // Button action routine
</script>

<div class="fixed z-10 inset-0 overflow-y-auto" 
  aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 
    pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
      aria-hidden="true">
    </div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" 
      aria-hidden="true">
      &#8203;
    </span>
    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 
      text-left overflow-hidden shadow-xl transform transition-all 
      sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <div>
        <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full">
          <!-- Heroicon name: outline/check -->
          <img src="chs_tiger.png" alt="CHS Tiger"/>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-2xl leading-6 font-medium text-gray-900" id="modal-title">
            What is TigerHunt?
          </h3>
          <div class="my-3">
            <p class="text-xl text-gray-500">
              We need your help in locating Classmates to make sure
              everyone gets information & updates for our 50th reunion.
            </p>
            <p class="mt-3 text-xl text-gray-500">
              TigerHunt lets you help with that by providing up to date contact 
              information for Classmates you are in contact with.
            </p>
            <p class="mt-3 text-xl text-gray-500">
              Click the TigerHunt button to help out.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6">
        <button type="button" on:click={ action }
          class="inline-flex justify-center w-full 
          rounded-md border border-transparent shadow-sm px-4 py-2
          bg-orange-500 text-base font-medium text-white hover:bg-orange-700 
          focus:outline-none focus:ring-2 focus:ring-offset-2 
          focus:ring-black-500 text-sm md:text-xl">
          Got it!
        </button>
      </div>
    </div>
  </div>
</div>