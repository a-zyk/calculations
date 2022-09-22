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

	$: dexamethasoneDose = getDrugDose(
		'Dexamethasone',
		0.3,
		0,
		2,
		$formValues.weight,
		'ml',
		'given IV.Followed by pred PO'
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
		},
		{
			id: 2,
			position: { x: 0, y: 75 },
			data: { label: 'Fluids shock doses' },
			width: 175,
			height: 50,
			bgColor: 'white'
		},
		{
			id: 3,
			position: { x: 0, y: 150 },
			data: { label: adrenalineDose },
			width: 175,
			height: 50,
			bgColor: 'white'
		},

		{
			id: 4,
			position: { x: 200, y: 150 },
			data: { label: 'Second line therapy' },
			width: 175,
			height: 50,
			bgColor: 'white',
			borderRadius: 30
		},
		{
			id: 5,
			position: { x: 200, y: 225 },
			data: { label: dexamethasoneDose },
			width: 175,
			height: 70,
			bgColor: 'white'
		},
		{
			id: 6,
			position: { x: 200, y: 320 },
			data: { label: 'diphenhydramine IM and famotidine IV' },
			width: 175,
			height: 50,
			bgColor: 'white'
		}
	];

	$: edges = [
		{ id: 'e1-2', source: 1, target: 2 },
		{ id: 'e2-3', source: 2, target: 3 },
		{ id: 'e4-5', source: 4, target: 5 },
		{ id: 'e5-6', source: 5, target: 6 }
	];
</script>

<Svelvet {nodes} {edges} height="380" width="400" background />
