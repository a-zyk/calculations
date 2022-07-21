<script>
	import { formValues, deficit as deficitCalculation } from '../stores/calculations';

	$: deficit = deficitCalculation($formValues.weight, $formValues.dehydrationPercentage);
</script>

<div class="card">
<div>Dehydration percentage</div>
<div class=" flex gap-10 mb-5">
	<div class="flex flex-col ">
		{#if $formValues.dehydrationPercentage}{$formValues.dehydrationPercentage} %{/if}

		<input
			class="self-start"
			type="range"
			min="0"
			max="16"
			bind:value={$formValues.dehydrationPercentage}
		/>
	</div>
	<div>
		{#if deficit > 0}
			Fluid deficit due to dehydration is {Math.round(deficit)} ml. 
		{/if}

		{#if $formValues.hours && deficit > 0}
		To revert dehydration over {$formValues.hours} hrs {Math.round(deficit/$formValues.hours)} ml/hr are needed
		{/if}
	</div>
</div>
</div>
