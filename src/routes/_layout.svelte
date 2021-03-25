<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
body {
	@apply flex flex-col h-screen;
}

</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>