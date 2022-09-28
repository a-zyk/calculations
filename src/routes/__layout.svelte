<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import BaseInfo from '../components/BaseInfo.svelte';
</script>

<div class="flex">
	<div class="w-1/6 relative">
		<Nav />
	</div>

	<div class="flex flex-col w-5/6">
		<BaseInfo />
		<slot />
	</div>
</div>
