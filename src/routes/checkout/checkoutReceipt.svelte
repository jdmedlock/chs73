<script>
  import { SATURDAY_EVENT } from '../../utils/constants.js'

  export let eventType
  export let orderId
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
  export let isVeteran
  export let classmateFirstName
  export let classmateLastName
  export let companionFirstName
  export let companionLastName
</script>

<receipt>
  <div class="flex flex-col items-center text-base bg-white">
    <h3 id="paymentReceipt" class="mt-4 font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full">Your payment was successfully processed (check your email for a reciept)</h3>
    <div class="grid w-1/2 grid-cols-2 mt-4 mb-4 ml-8 bg-gray-200 gap-x-4">
      <div>Order ID:</div><div id="receiptOrderId">{ orderId }</div>
      <div>Amount:</div><div id="receiptAmount">$ { totalCharged }</div>
      <div>Transaction status:</div><div id="receiptStatus">{ txnStatus }</div>
      <div>Transaction created:</div><div id="receiptCreated">{ txnCreated }</div>
      {#if eventType === SATURDAY_EVENT}
        <div>Name:</div><div id="receiptName"> { payerFirstName } { payerLastName }</div>
      {/if}
      {#if payerAddressLine1}
        <div>Address:</div><div id="receiptAddress">{ payerAddressLine1 }</div>
        {#if payerAddressLine2}
          <div>&nbsp;</div><div id="receiptAddress2">{ payerAddressLine2 }</div>
        {/if}
        <div>City:</div><div id="receiptCity">{ payerCity }</div>
        <div>State:</div><div id="receiptState">{ payerState }</div>
        <div>Zipcode:</div><div id="receiptPostalCode">{ payerPostalCode }</div>
      {/if}
      {#if payerEmail}
        <div>Email:</div><div id="receiptEmail">{ payerEmail }</div>
      {/if}
      {#if eventType === SATURDAY_EVENT}
        <div>Agreed to sponsor another classmate?:</div><div id="receiptSponsor">{ isSponsor ? 'Yes' : 'No' }</div>
        <div>Military Veteran?:</div><div id="receiptVeteran">{ isVeteran ? 'Yes' : 'No' }</div>
      {/if}
      <div>Your badge name:</div><div id="receiptClassmateBadge">{ classmateFirstName } { classmateLastName }</div>
      {#if companionFirstName}
        <div>Companion badge name:</div><div id="receiptCompanionBadge">{ companionFirstName } { companionLastName }</div>
      {/if}
    </div>
  </div>
</receipt>