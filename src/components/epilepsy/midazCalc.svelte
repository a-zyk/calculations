<script>
	import { formValues } from '../../stores/calculations';
	import DrugCalc from '../drugdose.svelte';
</script>

<DrugCalc
	moleculeName="Diazepam"
	drugName="Ziapam"
	drugDose1="0.5"
	drugDose2="1"
	drugConcentration="5"
	animalWeight={$formValues.weight}
	index="ml"
	text="can be given up to 3 times iv/rectaly q10min"
/>