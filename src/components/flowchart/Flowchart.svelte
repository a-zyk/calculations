<script>
	import Svelvet from 'svelvet';
	import { formValues } from '../../stores/calculations';
	import MidazCalc from '../epilepsy/epilepsyDiagram.svelte';

	$: initialNodes = [
		{
			id: 1,
			position: { x: 200, y: 50 },
			data: { label: `lalala ${$formValues.species}` },
			width: 175,
			height: 40,
			bgColor: 'white'
		},
		{
			id: 2,
			position: { x: 100, y: 150 },
			data: { label: `helo ${$formValues.weight}` },
			width: 175,
			height: 40,
			bgColor: 'white'
		},
		{
			id: 3,
			position: { x: 400, y: 150 },
			data: { label: 'Output Node' },
			width: 175,
			height: 40,
			bgColor: 'white'
		},

		{
			id: 4,
			position: { x: 400, y: 250 },
			data: { label: 'Output Node' },
			width: 175,
			height: 40,
			bgColor: 'white'
		},

		{
			id: 5,
			position: { x: 200, y: 300 },
			data: { label: 'propofol loading' },
			width: 175,
			height: 40,
			bgColor: 'white'
		},

		{
			id: 6,
			position: { x: 200, y: 400 },
			data: { label: 'propofol cri' },
			width: 175,
			height: 40,
			bgColor: 'white'
		},

		{
			id: 7,
			position: { x: 200, y: 500 },
			data: { label: 'Phenobarbital' },
			width: 175,
			height: 40,
			bgColor: 'white'
		},

		{
			id: 8,
			position: { x: 100, y: 650 },
			data: { label: 'Phenobarbital loading' },
			width: 175,
			height: 40,
			bgColor: 'white'
		},

		{
			id: 9,
			position: { x: 400, y: 650 },
			data: { label: 'Already on pheno' },
			width: 175,
			height: 40,
			bgColor: 'white'
		}
	];

	const initialEdges = [
		{ id: 'e1-2', source: 1, target: 2, label: 'edge label' },
		{ id: 'e1-3', source: 1, target: 3 },
		{ id: 'e3-4', source: 3, target: 4 },
		{ id: 'e5-6', source: 5, target: 6, label: 'maintain on cri' },
		{ id: 'e7-8', source: 7, target: 8, label: 'naive to pheno' },
		{ id: 'e7-9', source: 7, target: 9, label: 'already on pheno' },
		{ id: 'e7-9', source: 8, target: 9, label: 'repeat doses', type: 'straight', arrow: true }
	];
</script>

<Svelvet movement={false} nodes={initialNodes} edges={initialEdges} background />
