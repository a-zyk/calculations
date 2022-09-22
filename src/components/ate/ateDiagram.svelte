<script>
	import getDrugDose from '$lib/drugDoses';
	import { formValues } from '../../stores/calculations';
	import Svelvet from 'svelvet';

	$: methadoneDose = getDrugDose('Methadone', 0.2, 0, 10, $formValues.weight, 'ml', 'IV/IM q6');

	$: nodes = [
		{
			id: 1,
			position: { x: 100, y: 0 },
			data: { label: 'Initial stabilisation' },
			width: 175,
			height: 50,
			bgColor: 'white',
			borderRadius: 30
		},
		{
			id: 2,
			position: { x: 100, y: 75 },
			data: { label: methadoneDose },
			width: 175,
			height: 50,
			bgColor: 'white'
		},
		{
			id: 3,
			position: { x: 0, y: 175 },
			data: {
				label: `Low molecular weight heparin ${$formValues.weight * 75} - ${
					$formValues.weight * 150
				} U SC q6  .When able to swallow Clopidogrel PO`
			},
			width: 175,
			height: 100,
			bgColor: 'white'
		},

		{
			id: 5,
			position: { x: 200, y: 175 },
			data: {
				label: `Unfractioned heparin ${$formValues.weight * 250} - ${
					$formValues.weight * 300
				} U SC q6  .When able to swallow Clopidogrel PO`
			},
			width: 175,
			height: 100,
			bgColor: 'white'
		},
		{
			id: 4,
			position: { x: 300, y: 75 },
			data: { label: 'Asses and treat CHF' },
			width: 175,
			height: 50,
			borderRadius: 30,
			bgColor: 'white'
		}
	];

	$: edges = [
		{ id: 'e1-2', source: 1, target: 2 },
		{ id: 'e2-3', source: 2, target: 3 },
		{ id: 'e2-3', source: 2, target: 5 },
		{ id: 'e2-3', source: 2, target: 4, animate: true, type: 'step', noHandle: true }
	];
</script>

<Svelvet {nodes} {edges} height="300" width="490" background />
