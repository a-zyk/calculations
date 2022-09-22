<script>
	import getDrugDose from '$lib/drugDoses';
	import { formValues } from '../../stores/calculations';
	import Svelvet from 'svelvet';
	import { get_current_component } from 'svelte/internal';

	

	$: nodes = [
		{
			id: 1,
			position: { x: 0, y: 0 },
			data: { label: 'Immediate therapy' },
			borderRadius: 30,
			bgColor: 'white',
			width: 175,
			height: 50
		},

        {
			id: 2,
			position: { x: 0, y: 75 },
			data: { label: `Calcium gluconate 10% ${$formValues.weight * 0.5} - ${$formValues.weight * 1.5} ml IV to effect. ` },
		
			bgColor: 'white',
			width: 175,
			height: 50
		},

        {
			id: 3,
			position: { x: 0, y: 150 },
			data: { label: `Calcium gluconate 10%  ${$formValues.weight * 0.5} - ${$formValues.weight * 1.5} ml diluted with equal amount of saline SC q6-8 hr until stable for PO therapy. ` },
			bgColor: 'white',
			width: 175,
			height: 120
		},
	];

	$: edges = [{ id: 'e1-2', source: 1, target: 2 },
    { id: 'e2-3', source: 2, target: 3 }

]
;
</script>

<Svelvet {nodes} {edges} height="380" width="400" background />
