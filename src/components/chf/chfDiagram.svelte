<script>
	import getDrugDose from '$lib/drugDoses';
	import { formValues } from '../../stores/calculations';
	import Svelvet from 'svelvet';
	$: furosemideDose = getDrugDose(
		'Furosemide',
		1,
		2,
		40,
		$formValues.weight,
		'ml',
		'IV/IM. Then boluses every 1-8 hours until resp rate <60'
	);

	$: furosemideCri = getDrugDose(
		'Furosemide Cri',
		0.66,
		0,
		40,
		$formValues.weight,
		'ml/hr',
		'After initial bolus of Furosemide.'
	);

	$: butorphanolDose = getDrugDose(
		'Butorphanol',
		0.2,
		0.3,
		10,
		$formValues.weight,
		'ml',
		'IV/IM'
	);

	$: butorphanolDoseCat = getDrugDose(
		'Butorphanol',
		0.1,
		0.2,
		10,
		$formValues.weight,
		'ml',
		'IV/IM'
	);

	$: nodes = [
		{
			id: 1,
			position: { x: 200, y: 0 },
			data: { label: 'Initial CHF stabilisation' },
			width: 175,
			height: 50,
			bgColor: 'white'
		},

		{
			id: 2,
			position: { x: 200, y: 75 },
			data: { label: 'Place in oxygen' },
			width: 175,
			height: 50,
			bgColor: 'white'
		},
		{
			id: 3,
			position: { x: 200, y: 150 },
			data: { label: furosemideDose },
			width: 175,
			height: 100,
			bgColor: 'white'
		},
		{
			id: 4,
			position: { x: 400, y: 75 },
			data: { label: butorphanolDose },
			width: 175,
			height: 50,
			bgColor: 'white'
		},
        {
			id: 5,
			position: { x: 200, y: 275 },
			data: { label: `Pimobendan ${$formValues.weight * 0.25} mg given PO BID when able to swallow `},
			width: 175,
			height: 75,
			bgColor: 'white'
		}
	];

	// $: nodesCat = [
	// 	{
	// 		id: 1,
	// 		position: { x: 200, y: 0 },
	// 		data: { label: 'Initial CHF stabilisation' },
	// 		width: 175,
	// 		height: 50,
	// 		bgColor: 'white'
	// 	},

	// 	{
	// 		id: 2,
	// 		position: { x: 200, y: 75 },
	// 		data: { label: 'Place in oxygen' },
	// 		width: 175,
	// 		height: 50,
	// 		bgColor: 'white'
	// 	},
	// 	{
	// 		id: 3,
	// 		position: { x: 200, y: 150 },
	// 		data: { label: furosemideDose },
	// 		width: 175,
	// 		height: 100,
	// 		bgColor: 'white'
	// 	},
	// 	{
	// 		id: 4,
	// 		position: { x: 400, y: 75 },
	// 		data: { label: butorphanolDoseCat },
	// 		width: 175,
	// 		height: 50,
	// 		bgColor: 'white'
	// 	},
    //     {
	// 		id: 5,
	// 		position: { x: 200, y: 275 },
	// 		data: { label: furosemideCri},
	// 		width: 175,
	// 		height: 75,
	// 		bgColor: 'white'
	// 	}
	// ];

	$: edges = [
		{ id: 'e1-2', source: 1, target: 2 },
		{ id: 'e2-3', source: 2, target: 3 },
		{ id: 'e2-4', source: 2, target: 4, type: 'step', animate:true, noHandle:true },
        { id: '3-5', source: 3, target: 5}

	];
</script>

<Svelvet {nodes} {edges} height="750" background />
