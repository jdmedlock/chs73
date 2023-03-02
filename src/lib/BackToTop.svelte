<script>
  // Based on: https://svelte.dev/repl/cb199730e83f41beb484ff522c64bec1?version=3.38.2

  export let showOnPx = 150;
  export let back

  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={ handleOnScroll } />
<a href="{ back }/#top"
  class="hidden fixed visible z-50 bottom-8 place-self-center
  bg-orange-500 text-white active:bg-gray-700 text-sm
  font-bold uppercase px-3 py-2 rounded shadow hover:shadow-lg
  outline-none focus:outline-none mr-1 mb-1
  transition duration-300 ease-in-out 
  hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110">
  Back to top
</a>