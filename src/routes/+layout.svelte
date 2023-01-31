<script>
	import "../assets/app.css"
	import Nav from '$lib/Nav.svelte'

	const toggleNavbar = () => {
    var nav = document.getElementById('menu')

    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
	}
</script>

<style>
.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
</style>

<Nav/>

<div class="flex-wrapper">
	<main>
		<slot></slot>
	</main>

	<footer class="relative bg-gray-300 pt-8 pb-6">
		<div
			class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none
			overflow-hidden -mt-20"
			style="height: 80px;">
			<svg
				class="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0">
				<polygon
					class="text-gray-300 fill-current"
					points="2560 0 2560 100 0 100" />
			</svg>
		</div>
		<div class="container mx-auto px-4">
			<div class="flex flex-wrap items-center md:justify-between justify-center">
				<div class="w-full md:w-5/12 px-4 mx-auto text-center">
					<div class="text-sm text-gray-600 font-semibold py-1">
						Copyright © 2022 CHS '73 Organizing Committee
					</div>
				</div>
			</div>
		</div>
	</footer>

</div>