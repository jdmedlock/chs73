<script>
  const fillProgressBar = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    if (scrolled < 1) {
      document.getElementById("myBar").style.width = "0%"
    } else {
      document.getElementById("myBar").style.width = scrolled + "%"
    }
  }
</script>

<svelte:window on:scroll={ fillProgressBar } />

<div class="w-full h-1 bg-gray-900">
  <div class="w-full h-1 bg-orange-400" id="myBar"></div>
</div>