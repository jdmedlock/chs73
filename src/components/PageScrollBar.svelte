<script>

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
</script>

<svelte:window on:scroll={ myFunction } />

<div class="w-full h-1 bg-gray-900">
  <div class="w-full h-1 bg-orange-400" id="myBar"></div>
</div>