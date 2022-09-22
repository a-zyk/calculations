<script>
	import CHF from '../components/chf/chf.svelte';
	import ChfDiagram from '../components/chf/chfDiagram.svelte';
	import ChfDiagramCat from '../components/chf/chfDiagramCat.svelte';
	import { formValues } from '../stores/calculations';
</script>

<div class="flex gap-5 p-5">
	{#if $formValues.species === 'dog'}
		<div class="w-1/2 flex flex-col gap-2">
			<ChfDiagram />
		</div>
	{:else if $formValues.species === 'cat'}
		<div class="w-1/2 flex flex-col gap-2">
			<ChfDiagramCat />
		</div>
	{/if}
	<div class="w-1/2 flex flex-col gap-2">
		<CHF />
	</div>
</div>
