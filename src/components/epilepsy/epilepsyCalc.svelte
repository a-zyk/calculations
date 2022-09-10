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

<div>or</div>

<DrugCalc
	moleculeName="Midazolam"
	drugName="??????"
	drugDose1="0.2"
	drugDose2="0.3"
	index="ml"
	drugConcentration="5"
	animalWeight={$formValues.weight}
	text="Can be given up to 3 times iv/rectaly q10min"
/>

<DrugCalc
	moleculeName="Midazolam"
	drugName="??????"
	drugDose1="0.2"
	drugDose2="0.5"
	index="ml/h"
	drugConcentration="5"
	animalWeight={$formValues.weight}
	text="After initial bolus given as CRI."
/>

<div class="flex gap-2">
	<div>
		<div>if naive to Phenobarbital, loading dose</div>
		<DrugCalc
			moleculeName="Phenobarbital"
			drugName="??????"
			drugDose1="12"
			drugConcentration="30"
			index="ml"
			animalWeight={$formValues.weight}
			text="slow iv."
		/>

		<div>repeat dose</div>
		<DrugCalc
			moleculeName="Phenobarbital"
			drugName="??????"
			drugDose1="4"
			drugDose2="6"
			index="ml"
			drugConcentration="30"
			animalWeight={$formValues.weight}
			text="slow i/v boluses every 30mins to
			effect 1-2times."
		/>
	</div>
	<div>
		<div>If already on Phenobarbital take bloods for checking levels, give boluse</div>
		<DrugCalc
			moleculeName="Phenobarbital"
			drugName="??????"
			drugDose1="4"
			drugDose2="6"
			index="ml"
			drugConcentration="30"
			animalWeight={$formValues.weight}
			text="slow i/v boluses every 30mins to
                    effect 1-2times."
		/>
	</div>
</div>

<div>
	<DrugCalc
		moleculeName="Propofol"
		drugName=""
		drugDose1="4"
		drugDose2="8"
		drugConcentration="10"
		index="ml"
		animalWeight={$formValues.weight}
		text="Give to effect to stop
			seizures and maint a state of heavy sedation."
	/>
</div>
<div>Then maintain on CRI:</div>

<div>
	<DrugCalc
		moleculeName="Propofol"
		drugName="??????"
		drugDose1="0.1"
		drugDose2="0.4"
		drugConcentration="10"
		index="ml/min"
		animalWeight={$formValues.weight}
	/>
</div>
