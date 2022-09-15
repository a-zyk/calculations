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

	$: midazolamDose = getDrugDose(
		'Midazolam',
		0.2,
		0.3,
		10,
		$formValues.weight,
		'ml',
		'can be given up to 3 times iv/rectaly q10min'
	);
	$: midazolamCri = getDrugDose(
		'Midazolam CRI ',
		0.2,
		0.5,
		10,
		$formValues.weight,
		'ml/hr',
		'CRI after initial MDZ bolus'
	);

	$: levotiracetamDose = getDrugDose(
		'Levetericetam',
		60,
		0,
		100,
		$formValues.weight,
		'ml',
		'Given IV q8 hours'
	);

	$: propofolDose = getDrugDose('Propofol', 4, 8, 10, $formValues.weight, 'ml', 'Given IV');
	$: propofolCri = getDrugDose(
		'Propofol CRI',
		6,
		24,
		10,
		$formValues.weight,
		'ml/h',
		'CRI to effect'
	);

	$: phenoNaive = getDrugDose(
		'Phenobarbital',
		12,
		0,
		130,
		$formValues.weight,
		'ml',
		'Slow IV. Wait 20min to repeat doses'
	);

	$: phenoUser = getDrugDose(
		'Phenobarbital',
		4,
		8,
		130,
		$formValues.weight,
		'ml',
		'Take blood sample before giving IV'
	);

	$: phenoNaiveRepeat = getDrugDose(
		'Phenobarbital',
		4,
		8,
		130,
		$formValues.weight,
		'ml',
		'2 further doses 20min apart'
	);
	$: nodes = [
		{
			id: 1,
			position: { x: 200, y: 0 },
			data: { label: '<5min of continous seizure activity' },
			width: 175,
			height: 50,
			bgColor: 'white'
		},
		{
			id: 2,
			position: { x: 50, y: 75 },
			data: { label: diazepamDose },
			width: 175,
			height: 75,
			bgColor: 'white'
		},
		{
			id: 3,
			position: { x: 350, y: 75 },
			data: { label: midazolamDose },
			width: 175,
			height: 75,
			bgColor: 'white'
		},
		{
			id: 4,
			position: { x: 350, y: 175 },
			data: { label: midazolamCri },
			width: 175,
			height: 75,
			bgColor: 'white'
		},

		{
			id: 5,
			position: { x: 200, y: 260 },
			data: { label: '<30min of continous seizure activity' },
			width: 175,
			height: 50,
			bgColor: 'white'
		},
		{
			id: 6,
			position: { x: 15, y: 340 },
			data: { label: propofolDose },
			width: 175,
			height: 75,
			bgColor: 'white'
		},

		{
			id: 7,
			position: { x: 200, y: 340 },
			data: { label: levotiracetamDose },
			width: 175,
			height: 75,
			bgColor: 'white'
		},
		{
			id: 8,
			position: { x: 390, y: 340 },
			data: { label: 'Is animal already on phenobarbital?' },
			width: 175,
			height: 75,
			bgColor: 'white'
		},
		{
			id: 9,
			position: { x: 15, y: 450 },
			data: { label: propofolCri },
			width: 175,
			height: 75,
			bgColor: 'white'
		},

		{
			id: 10,
			position: { x: 500, y: 450 },
			data: { label: phenoNaive },
			width: 95,
			height: 125,
			bgColor: 'white'
		},

		{
			id: 11,
			position: { x: 350, y: 450 },
			data: { label: phenoUser },
			width: 95,
			height: 125,
			bgColor: 'white'
		},

		{
			id: 12,
			position: { x: 500, y: 600 },
			data: { label: phenoNaiveRepeat },
			width: 95,
			height: 125,
			bgColor: 'white'
		}
	];

	$: edges = [
		{ id: 'e1-2', source: 1, target: 2 },
		{ id: 'e1-3', source: 1, target: 3 },
		{ id: 'e3-4', source: 3, target: 4, type: 'bezier', arrow: true, animate: true },
		{ id: 'e5-6', source: 5, target: 6 },
		{ id: 'e5-7', source: 5, target: 7 },
		{ id: 'e5-8', source: 5, target: 8 },
		{ id: 'e6-9', source: 6, target: 9, type: 'bezier', arrow: true, animate: true },
		{ id: 'e8-10', source: 8, target: 10, label: 'no' },
		{ id: 'e8-11', source: 8, target: 11, label: 'yes' },
		{ id: 'e10-12', source: 10, target: 12, type: 'bezier', arrow: true, animate: true }
	];
</script>

<Svelvet {nodes} {edges} height="750" background />
