<script>
  import { SATURDAY_EVENT } from "../../utils/constants"
  export let eventType
  export let noAttendees
  export let orderTotal 
</script>

<ordersummary>
  <li class="flex items-start mt-4 text-gray-700">
    <div class="flex-shrink-0">
      <!-- Heroicon name: outline/check -->
      <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <div class="flex flex-col">
      <div class="mb-2 ml-3 text-base text-gray-700">Registration Summary:</div>
      <div class="grid grid-cols-2 pl-2 pr-2 ml-8 bg-gray-200 gap-x-4">
        <div>No. Attendees </div><div class="mb-2 mr-2 justify-self-end">{ noAttendees }</div>
        {#if (eventType === SATURDAY_EVENT) }
          <div class="font-bold">Order Total </div><div class="font-bold justify-self-end">${ orderTotal.toFixed(2) }</div>
        {/if}
      </div>
    </div>
  </li>
</ordersummary>