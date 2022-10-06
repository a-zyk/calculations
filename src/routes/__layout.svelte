<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import BaseInfo from '../components/BaseInfo.svelte';
</script>

<div class="flex">
	<div class="lg:w-1/6 relative">
		<Nav />
	</div>

	<div class="flex flex-col w-full lg:w-5/6">
		<BaseInfo />
		<slot />
	</div>
</div>
