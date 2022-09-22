<script>
	import getDrugDose from '$lib/drugDoses';
	import { formValues } from '../../stores/calculations';
	import Svelvet from 'svelvet';
	import { get_current_component } from 'svelte/internal';

	$: adrenalineDose = getDrugDose(
		'Adrenaline',
		0.01,
		0,
		1,
		$formValues.weight,
		'ml',
		'given IV q5-10min'
	);

	$: nodes = [
		{
			id: 1,
			position: { x: 0, y: 0 },
			data: { label: 'First line therapy' },
			borderRadius: 30,
			bgColor: 'white',
			width: 175,
			height: 50
		}
	];

	$: edges = [{ id: 'e1-2', source: 1, target: 2 }];
</script>

<Svelvet {nodes} {edges} height="380" width="400" background />
