<script>
	export let segment;

	const navToggle = () => {
		console.log('Entered navToggle')
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

		console.log(btn)

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		scroll-behavior: smooth;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		@apply mr-6;
	}

</style>

<nav class="fixed flex w-full z-10 top-0 bg-gray-900 text-white">
	<button id="menuBtn" class="hamburger block focus:outline-none" type="button" on:click={ navToggle }>
		<img class="m-2 w-12 h-10" src="chs_tiger.png" alt="CHS Tiger"/>
	</button>
	<div id="menu" class="w-full sm:w-auto self-end sm:self-center sm:flex 
		flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
		<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the event data when we hover over the link or tap it on a touchscreen -->
		<a rel=prefetch aria-current="{segment === 'events' ? 'page' : undefined}" href="events">events</a>
		<a aria-current="{segment === 'memories' ? 'page' : undefined}" href="memories">memories</a>
		<a aria-current="{segment === 'contact' ? 'page' : undefined}" href="#contact">contact</a>
	</div>
</nav>
