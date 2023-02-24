<script>
  export let orderId
  export let isPayAtDoor
  export let isPayByMail 
  export let isPaymentSuccessful 
</script>

<style>
  #paypal-button-container {
    margin: 30px 0;
  }
</style>

<payment>
  {#if isPayByMail && isPaymentSuccessful}
    <div class="flex flex-col items-center mt-4 bg-white">
      <div class="w-3/4 mt-4 mb-5 ml-8 bg-gray-200">
        <div class="flex content-center justify-center">
          <span>Please make your check out to</span>
          <span class="pl-1 pr-1 ml-2 mr-2 text-lg italic font-bold bg-orange-400">Central High Class of 1973</span>
          <span>and mail to:</span>
        </div>
        <div class="grid grid-cols-3 mt-2 justify-left">
          <div /><div>Central High Class of 1973</div><div />
          <div /><div>C/o Dianna Todt</div><div />
          <div /><div>2086 Southern Expressway</div><div />
          <div /><div>Cape Girardeau, MO  63703</div><div />
        </div>
        <div class="flex justify-center mt-2">Please add your registration number
          ('{ orderId }') to your check and mail before August 5, 2023.</div>
      </div>
    </div>
  {/if}

  {#if isPayAtDoor && isPaymentSuccessful}
  <div class="flex flex-col items-center mt-4 bg-white">
    <div class="w-3/4 mt-4 mb-5 ml-8 bg-gray-200">
      <div class="flex content-center justify-center">
        <span>
          Remember to pay when you checkin at the event. Your registration number
          is { orderId }.
        </span>
      </div>
    </div>
  </div>
  {/if}
</payment>