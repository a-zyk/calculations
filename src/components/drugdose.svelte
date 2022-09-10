<script>
	export let moleculeName="";
	export let drugName="";
	export let drugDose1="";
	export let drugConcentration="";
	export let drugDose2="";
	export let animalWeight="";
	export let text="";
    export let index="";
</script>

<div>
	{moleculeName} ({drugName},
	{#if drugDose1 && drugDose2}
		{drugConcentration}mg/ml), {((drugDose1 * animalWeight) /
			drugConcentration).toFixed(2)}-{((drugDose2 * animalWeight) / drugConcentration).toFixed(2)} {index}.
	{:else}
		({drugConcentration} mg/ml),
		{((drugDose1 * animalWeight) / drugConcentration).toFixed(2)} {index}.
	{/if}
	{text}
</div>
