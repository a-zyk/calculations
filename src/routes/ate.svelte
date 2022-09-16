<script>
	import ATE from '../components/ate/Ate.svelte';
	import AteDiagram from '../components/ate/ateDiagram.svelte';
</script>

<div class="flex gap-5 p-5">
	<div class="w-1/2 flex flex-col gap-2">
		<AteDiagram />
	</div>

	<div class="w-1/2 flex flex-col gap-2">
		<ATE />
	</div>
</div>
