<script>
  export let event
</script>

<eventsummary>
  {#each event.checkout.summaryInfo as summaryBullet}
    <li class="flex items-start pt-4">
      <div class="flex-shrink-0">
        <!-- Heroicon name: outline/check -->
        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div class="ml-3 text-base text-gray-700">{ summaryBullet }</div>
    </li>
  {/each}
</eventsummary>