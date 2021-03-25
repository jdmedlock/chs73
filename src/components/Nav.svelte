<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		scroll-behavior: smooth;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
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
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="bg-gray-900 text-white">
	<ul>
		<li>
			<a href=".">
				<img class="w-12 h-10" src="chs_tiger.png" alt="CHS Tiger"/>
			</a>
		</li>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the event data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'events' ? 'page' : undefined}" href="events">events</a></li>
			<li><a aria-current="{segment === 'memories' ? 'page' : undefined}" href="memories">memories</a></li>
		<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="#contact">contact</a></li>
	</ul>
</nav>
