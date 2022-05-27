<script>
  export let pageName
  export let letterIndex
</script>

<div class="flex flex-col w-full place-items-center">
  <div class="flex flex-wrap bg-gray-300 mb-2">
    {#each letterIndex || [] as indexLetter}
      <a class="mr-0.5 md:ml-2 lg:ml-3 text-base md:text-xl" href="{ pageName }/{ indexLetter.name }">{ indexLetter.letter }</a>
    {/each}
  </div>
</div>
