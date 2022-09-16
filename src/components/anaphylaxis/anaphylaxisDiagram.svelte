<script>
    import getDrugDose from '$lib/drugDoses';
	import { formValues } from '../../stores/calculations';
	import Svelvet from 'svelvet';


$: adrenalineDose = getDrugDose('Adrenaline', 0.01, 0, 1, $formValues.weight, 'ml', 'given IV q5-10min');

	$: nodes = [
		{
			id: 1,
			position: { x: 200, y: 0 },
			data: { label: 'First line therapy' },
			width: 175,
			height: 50,
			bgColor: 'white'
		},
        {
			id: 2,
			position: { x: 200, y: 75 },
			data: { label: 'Fluids shock doses' },
			width: 175,
			height: 50,
			bgColor: 'white'
		},
        {
			id: 3,
			position: { x: 200, y: 150 },
			data: { label: adrenalineDose },
			width: 175,
			height: 50,
			bgColor: 'white'
		},

    ]

        $: edges = [
		{ id: 'e1-2', source: 1, target: 2 },
        { id: 'e2-3', source: 2, target: 3 },
        { id: 'e3-4', source: 3, target: 4 }
    ]
    </script>

<Svelvet {nodes} {edges} height="500" background />