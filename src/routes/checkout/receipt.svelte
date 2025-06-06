<script>
  import { SATURDAY_EVENT } from '../../utils/constants.js'

  export let eventType
  export let orderId
  export let totalCharged
  export let txnStatus
  export let txnCreated
  export let payerEmail
  export let classmateFirstName
  export let classmateLastName
  export let companionFirstName
  export let companionLastName
</script>

<receipt>
  <div class="flex flex-col items-center mt-2 text-base bg-white">
    <h3 id="paymentReceipt" class="mt-4 font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full">
      Your registration was successfully processed (check your email)
    </h3>
    <div class="grid w-1/2 grid-cols-2 mt-4 mb-4 ml-8 bg-gray-200 gap-x-4">
      <div>Registration ID:</div><div id="receiptOrderId">{ orderId }</div>
      <div>Order total:</div><div id="receiptAmount">$ { parseFloat(totalCharged).toFixed(2) }</div>
      <div>Transaction status:</div><div id="receiptStatus">{ txnStatus }</div>
      <div>Transaction created:</div><div id="receiptCreated">{ txnCreated }</div>
      {#if payerEmail}
        <div>Email:</div><div id="receiptEmail">{ payerEmail }</div>
      {/if}

      <div>Your badge name:</div><div id="receiptClassmateBadge">{ classmateFirstName } { classmateLastName }</div>
      {#if companionFirstName}
        <div>Companion badge name:</div><div id="receiptCompanionBadge">{ companionFirstName } { companionLastName }</div>
      {/if}
    </div>
  </div>
</receipt>