<script>
	import { page } from '$app/stores'
	import PageScrollBar from './PageScrollBar.svelte'

	const toggleNavbar = () => {
    let nav = document.getElementById('menu')
		let hint = document.getElementById('menuHint')
    nav.classList.toggle('flex')
		hint.classList.toggle('flex')
    nav.classList.toggle('hidden')
		hint.classList.toggle('hidden')
	}
</script>

<style>
	nav {
		@apply font-light pr-1;
		scroll-behavior: smooth;
	}

	[aria-current] {
		@apply relative inline-block;
	}

	[aria-current]::after {
		@apply absolute w-full h-0.5 bg-orange-500 block -bottom-1;
		content: '';
	}

	a {
		@apply mr-6;
	}

</style>

<nav class="fixed top-0 z-10 flex flex-col w-full text-xl text-white bg-gray-900">
	<span class="flex flex-row w-full">
		<button id="menuBtn" class="block focus:outline-none" type="button" 
			on:click={ toggleNavbar } aria-label="Menu">
			<img class="w-12 h-10 m-2 md:hidden" src="hamburger-icon.png" alt="Mobile Menu"/>
		</button>
		<span id="menuHint" class="h-10 py-3 md:hidden">Click for menu</span>
	</span>
	<div id="menu" class="flex-col items-center self-end hidden w-full h-full py-1 pb-4 m-3 sm:w-auto sm:self-center sm:flex sm:flex-row sm:py-0 sm:pb-0">
		<a aria-current="{$page.url.pathname.slice(1) === undefined ? 'page' : undefined}" href="." on:click={ toggleNavbar }>home</a>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the event data when we hover over the link or tap it on a touchscreen -->
		<a class="animate-bounce" rel=prefetch aria-current="{$page.url.pathname.slice(1) === 'events' ? 'page' : undefined}" href="events" on:click={ toggleNavbar }>events</a>
		<a aria-current="{$page.url.pathname.slice(1) === 'classmates' ? 'page' : undefined}" href="classmates" on:click={ toggleNavbar }>classmates</a>
		<a aria-current="{$page.url.pathname.slice(1) === 'tigerhunt' ? 'page' : undefined}" href="tigerhunt" on:click={ toggleNavbar }>tiger hunt</a>
		<a aria-current="{$page.url.pathname.slice(1) === 'memoriam' ? 'page' : undefined}" href="memoriam" on:click={ toggleNavbar }>memoriam</a>
		<a aria-current="{$page.url.pathname.slice(1) === 'faculty' ? 'page' : undefined}" href="faculty" on:click={ toggleNavbar }>faculty</a>
		<a href="/#contact" on:click={ toggleNavbar }>contact</a>
	</div>

	<div class="w-full h-2 m-0">
		<PageScrollBar/>
	</div>
		
</nav>