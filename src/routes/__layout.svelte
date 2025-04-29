<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="min-h-screen bg-gray-50">
	<div class="flex">
		<div class="lg:w-64 relative">
			<Nav />
		</div>

		<div class="flex flex-col flex-1">
			<Header/>
			<main class="p-6 max-w-7xl mx-auto w-full">
				<slot />
			</main>
		</div>
	</div>
</div>
