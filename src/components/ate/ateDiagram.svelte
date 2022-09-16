<script>
	import getDrugDose from '$lib/drugDoses';
	import { formValues } from '../../stores/calculations';
	import Svelvet from 'svelvet';

	$: diazepamDose = getDrugDose(
		'Diazepam',
		0.5,
		1,
		5,
		$formValues.weight,
		'ml',
		'can be given up to 3 times iv/rectaly q10min'
	);

	$: nodes = [
		{
			id: 1,
			position: { x: 200, y: 0 },
			data: { label: '<5min of continous seizure activity' },
			width: 175,
			height: 50,
			bgColor: 'white'
		}
	];

	$: edges = [{ id: 'e1-2', source: 1, target: 2 }];
</script>

<Svelvet {nodes} {edges} height="750" background />
