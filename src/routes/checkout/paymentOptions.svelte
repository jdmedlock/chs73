<script>
  import { SATURDAY_EVENT } from '../../utils/constants.js'

  export let eventType
  export let isPayByMail
  export let isPaymentVisible
  export let handlePayAtDoor
  export let handlePayByMail
</script>

<style>
  #paypal-button-container {
    margin: 30px 0;
  }
</style>

<section>
  {#if isPaymentVisible && eventType === SATURDAY_EVENT}
    <div class="flex flex-col items-center mb-0 bg-white">
      <div id="paypal-button-container"/>
    </div>
    <div class="flex flex-col items-center mb-10 -mt-10 bg-white">
      <button class="flex items-center justify-center m-auto w-[200px] text-base italic font-bold text-white bg-blue-600 h-9 rounded-[4px]" on:click={ handlePayByMail }>
        Pay by mail 
      </button>
      {#if isPayByMail}
        <div class="w-3/4 mt-4 ml-8 bg-gray-200">
          <div class="flex justify-center content-center">
            <span>Please make your check out to</span>
            <span class="text-lg font-bold italic ml-2 mr-2 pl-1 pr-1 bg-orange-400">Central High Class of 1973</span>
            <span>and mail to:</span>
          </div>
          <div class="grid grid-cols-3 mt-2 justify-left">
            <div /><div>Central High Class of 1973</div><div />
            <div /><div>C/o Dianna Todt</div><div />
            <div /><div>2086 Southern Expressway</div><div />
            <div /><div>Cape Girardeau, MO  63703</div><div />
          </div>
          <div class="flex mt-2 justify-center">Please add your order number, '1234', to your checks memo.</div>
        </div>
      {/if}
      <button class="flex items-center justify-center m-auto w-[200px] mt-3 text-base italic font-bold text-white bg-blue-700 h-9 rounded-[4px]" on:click={ handlePayAtDoor }>
        Pay at door 
      </button>
    </div>
  {/if}
</section>