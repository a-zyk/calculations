<script>
	import { formValues } from '../../stores/calculations';
	import DrugCalc from '../drugdose.svelte';
</script>

<DrugCalc
	moleculeName="Furosemide"
	drugName="?"
	drugDose1="1"
	drugDose2="2"
	drugConcentration="10"
	index="ml"
	animalWeight={$formValues.weight}
	text="Can be repeated as boluses: q 1- 12 hrs as needed, not to
exceed 12 mg/kg/day."
/>
<div>Furosemide CRI:</div>
<DrugCalc
	moleculeName="Furosemide"
	drugName="?"
	drugDose1={$formValues.species === 'dog' ? 0.66 : 0.66}
	drugDose2={$formValues.species === 'dog' ? 1 : ''}
	drugConcentration="50"
	index="ml/hr"
	animalWeight={$formValues.weight}
	text="Over 2-8 hrs after initial bolus. The combination of a furosemide
bolus followed by a CRI has a better diuretic effect."
/>

<DrugCalc
	moleculeName="Butorphanol"
	drugName="Torbugesic"
	drugDose1={$formValues.species === 'dog' ? 0.1 : 0.1}
	drugDose2={$formValues.species === 'dog' ? 0.3 : 0.2}
	drugConcentration="2"
	index="ml"
	animalWeight={$formValues.weight}
	text="Can be repeated as needed."
/>
<div>If fractious or needs more invasive procedures add +-</div>

{#if $formValues.species === 'cat'}
	<div class="flex">
		<DrugCalc
			moleculeName="Midazolam"
			drugName="?"
			drugDose1="0.1"
			drugConcentration="2"
			index="ml"
			animalWeight={$formValues.weight}
			text="Given IV"
		/>

		<div>Ketamine 0.1ml/PER CAT IV or 0.2-0.3ml/PER CAT IM</div>
	</div>
{:else if $formValues.species === 'dog'}
	<DrugCalc
		moleculeName="Alfaxalan"
		drugName="Alfaxan multidose"
		drugDose1="0.5"
		drugConcentration="10"
		index="ml"
		animalWeight={$formValues.weight}
		text="Given IV to effect"
	/>
{/if}
