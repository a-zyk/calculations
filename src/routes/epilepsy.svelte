<script>
	import Epilepsy from '../components/epilepsy/epilepsy.svelte';
	import EpilepsyCalc from '../components/epilepsy/epilepsyCalc.svelte';
    import getDrugDose from '$lib/drugDoses';
	import { formValues } from '../stores/calculations';
    import Svelvet from 'svelvet';

    $: diazepamDose = getDrugDose("Diazepam", "Ziapam", 0.5, 1, 5, $formValues.weight, 'ml', 'can be given up to 3 times iv/rectaly q10min')

    $: nodes = [
        {
            id: 1,
			position: { x: 200, y: 50 },
			data: { label: diazepamDose },
			width: 175,
			height: 100,
			bgColor: 'white'
        },
    ]

    $: edges = [
        { id: 'e1-2', source: 1, target: 2, label: 'edge label' },
    ]
</script>

<div class="flex gap-5 p-5">
    <div class="w-full">
        <Svelvet {nodes} {edges} background />
    </div>
	<div class="w-1/2 flex flex-col gap-2">
		<EpilepsyCalc />
	</div>

	<div class="w-1/2 flex flex-col gap-2">
		<Epilepsy />
	</div>
</div>
