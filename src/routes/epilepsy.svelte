<script>
	import Epilepsy from '../components/epilepsy/epilepsy.svelte';
	import EpilepsyDiagram from '../components/epilepsy/epilepsyDiagram.svelte';

</script>

<div class="flex gap-5 p-5">
    <div class="w-1/2 flex flex-col gap-2">
        <EpilepsyDiagram/>
    </div>

	<div class="w-1/2 flex flex-col gap-2">
		<Epilepsy />
	</div>
</div>
