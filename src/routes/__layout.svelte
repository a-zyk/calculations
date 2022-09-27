<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import BaseInfo from '../components/BaseInfo.svelte';
</script>

<div class="flex">
<Nav />

<div class='flex flex-col' >
<BaseInfo />
<slot />
</div>
</div>
