<script>
  import { SATURDAY_EVENT } from "../../utils/constants"
  export let eventType
  export let noAttendees
  export let subtotal
  export let estTxnFee
  export let orderTotal 
</script>

<ordersummary>
  <div class="flex flex-col gap-y-0">
    <div class="ml-3 text-base text-gray-700 mb-2 font-bold">Order Summary:</div>
    <div class="grid grid-cols-2 gap-x-4 ml-8 pl-2 pr-2 bg-gray-200">
      <div>No. Attendees </div><div class="justify-self-end mr-2 mb-2">{ noAttendees }</div>
      {#if (eventType === SATURDAY_EVENT) }
        <div>Subtotal </div><div class="justify-self-end">${ subtotal.toFixed(2) }</div>
        <div>Est. transaction fee </div><div class="justify-self-end">{ estTxnFee.toFixed(2) }</div>
        <div>Taxes </div><div class="underline justify-self-end">0.00</div>
        <div class="font-bold">Order Total </div><div class="font-bold justify-self-end">${ orderTotal.toFixed(2) }</div>
      {/if}
    </div>
  </div>
</ordersummary>