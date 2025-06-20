<script>
  export let eventType
  export let orderId
  export let totalCharged
  export let txnStatus
  export let txnCreated
  export let payerEmail
  export let classmateFirstName
  export let classmateLastName
</script>

<receipt>
  <div class="flex flex-col items-center mt-2 text-base bg-white">
    <h3 id="paymentReceipt" class="mt-4 font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full">
      Your registration for { eventType } was successfully processed (check your email)
    </h3>
    <div class="grid w-1/2 grid-cols-2 mt-4 mb-4 ml-8 bg-gray-200 gap-x-4">
      <div>Registration ID:</div><div id="receiptOrderId">{ orderId }</div>
      <div>Order total:</div><div id="receiptAmount">$ { parseFloat(totalCharged).toFixed(2) }</div>
      <div>Transaction status:</div><div id="receiptStatus">{ txnStatus }</div>
      <div>Transaction created:</div><div id="receiptCreated">{ txnCreated }</div>
      {#if payerEmail}
        <div>Email:</div><div id="receiptEmail">{ payerEmail }</div>
      {/if}

      <div>Name:</div><div id="receiptClassmateBadge">{ classmateFirstName } { classmateLastName }</div>
    </div>
    <div class="text-sm text-center text-gray-500">
      If you don't see the acknowledgment email in your inbox, please check your spam folder.
    </div>
  </div>
</receipt>