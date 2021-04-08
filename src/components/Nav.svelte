<script>
	export let segment;

	const toggleNavbar = () => {
    var nav = document.getElementById('menu');

    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
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

<nav class="fixed flex w-full z-10 top-0 bg-gray-900 text-white">
	<button id="menuBtn" class="block focus:outline-none" type="button" on:click={ toggleNavbar }>
		<img class="m-2 w-12 h-10" src="chs_tiger.png" alt="CHS Tiger"/>
	</button>
	<div id="menu" class="w-full sm:w-auto self-end sm:self-center sm:flex 
		flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
		<a aria-current="{segment === undefined ? 'page' : undefined}" href="." on:click={ toggleNavbar }>home</a>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the event data when we hover over the link or tap it on a touchscreen -->
		<a rel=prefetch aria-current="{segment === 'events' ? 'page' : undefined}" href="events" on:click={ toggleNavbar }>events</a>
		<a aria-current="{segment === 'memoriam' ? 'page' : undefined}" href="memoriam" on:click={ toggleNavbar }>memoriam</a>
		<a aria-current="{segment === 'contact' ? 'page' : undefined}" href="#contact" on:click={ toggleNavbar }>contact</a>
	</div>
</nav>
