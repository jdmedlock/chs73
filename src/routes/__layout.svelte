<script context="module">
  export async function load({ params, fetch, session, stuff }) {
		const url = `${ import.meta.env.VITE_BE_URL }/classmates`
    const response = await fetch(url)

    return {
			status: response.status,
      props: {
      	classmates: response.ok && (await response.json())
      }
    }
  }
</script>

<script>
	import "../assets/app.css";
	import Nav from '../components/Nav.svelte'

	export let segment
	export let status
	export let classmates

	console.log('_layout - segment: ', segment)
	console.log('_layout - status: ', status)
	// console.log('_layout - classmates: ', classmates)

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

<Nav { segment }/>

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
				<div class="w-full md:w-4/12 px-4 mx-auto text-center">
					<div class="text-sm text-gray-600 font-semibold py-1">
						Copyright © 2021, 2022 CHS '73 Organizing Committee
					</div>
				</div>
			</div>
		</div>
	</footer>

</div>