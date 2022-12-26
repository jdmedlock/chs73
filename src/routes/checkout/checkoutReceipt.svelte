<script>
  export let id
  export let totalCharged
  export let txnStatus
  export let txnCreated
  export let payerFirstName
  export let payerLastName
  export let payerAddressLine1
  export let payerAddressLine2
  export let payerCity
  export let payerState
  export let payerPostalCode
  export let payerEmail
  export let isSponsor
  export let classmateFirstName
  export let classmateLastName
  export let companionFirstName
  export let companionLastName
</script>

<receipt>
  <div class="flex flex-col items-center bg-white text-base">
    <h3 id="paymentReceipt" class="mt-2 rounded-full font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">Your payment was successfully processed (check your email for a reciept)</h3>
    <div class="grid grid-cols-2 gap-x-4 mt-4 ml-8 bg-gray-200 w-1/2 mb-20">
      <div>Order ID:</div><div id="receiptOrderId">{ id }</div>
      <div>Amount:</div><div id="receiptAmount">$ { totalCharged }</div>
      <div>Transaction status:</div><div id="receiptStatus">{ txnStatus }</div>
      <div>Transaction created:</div><div id="receiptCreated">{ txnCreated }</div>
      <div>Name:</div><div id="receiptName"> { payerFirstName } { payerLastName }</div>
      {#if payerAddressLine1}
        <div>Address:</div><div id="receiptAddress">{ payerAddressLine1 }</div>
        {#if payerAddressLine2}
          <div>&nbsp;</div><div id="receiptAddress2">{ payerAddressLine2 }</div>
        {/if}
        <div>City:</div><div id="receiptCity">{ payerCity }</div>
        <div>State:</div><div id="receiptState">{ payerState }</div>
        <div>Zipcode:</div><div id="receiptPostalCode">{ payerPostalCode }</div>
      {/if}
      <div>Email:</div><div id="receiptEmail">{ payerEmail }</div>
      <div>Agreed to sponsor another classmate?:</div><div id="receiptSponsor">{ isSponsor ? 'Yes' : 'No' }</div>
      <div>Your badge name:</div><div id="receiptClassmateBadge">{ classmateFirstName } { classmateLastName }</div>
      {#if companionFirstName}
        <div>Companion badge name:</div><div id="receiptCompanionBadge">{ companionFirstName } { companionLastName }</div>
      {/if}
    </div>
  </div>
</receipt>