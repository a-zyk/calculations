<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="flex">
	<div class="lg:w-1/6 relative">
		<Nav />
	</div>

	<div class="flex flex-col w-full lg:w-5/6">
		<Header/>
		<slot />
	</div>
</div>
