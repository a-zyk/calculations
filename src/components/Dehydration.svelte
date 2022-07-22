<script>
	import { formValues, deficit as deficitCalculation } from '../stores/calculations';
	import Modal from './Modal.svelte';

	$: deficit = deficitCalculation($formValues.weight, $formValues.dehydrationPercentage);
</script>

<div class="card">
	<div class="flex gap-2 items-center">
		<div>Dehydration percentage</div>
		<Modal
			src="/images/tableFliuds.png"
			text="Source: Goggs R, Humm K and Hughes D (2008). Fluid therapy in small animals 1. Principles and patient assessment, In Practice 30(1): 16-19."
		/>
	</div>
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
				To revert dehydration over {$formValues.hours} hrs {Math.round(deficit / $formValues.hours)}
				ml/hr are needed
			{/if}
		</div>
	</div>
</div>
