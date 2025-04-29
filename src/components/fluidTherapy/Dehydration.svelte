<script>
	import { formValues, deficit as deficitCalculation } from '../../stores/calculations';
	import Modal from '../Modal.svelte';

	$: deficit = deficitCalculation($formValues.weight, $formValues.dehydrationPercentage);
</script>

<div class="card">
	<div class="flex items-center justify-between mb-4">
		<h2 class="text-lg font-semibold text-gray-800">Dehydration Assessment</h2>
		<Modal
			src="/images/tableFliuds.png"
			text="Source: Goggs R, Humm K and Hughes D (2008). Fluid therapy in small animals 1. Principles and patient assessment, In Practice 30(1): 16-19."
		/>
	</div>

	<div class="space-y-4">
		<div class="flex items-center gap-4">
			<div class="flex-1">
				<label class="block text-sm font-medium text-gray-700 mb-2">Dehydration Percentage</label>
				<div class="flex items-center gap-4">
					<div class="text-lg font-semibold text-gray-800">
						{#if $formValues.dehydrationPercentage}
							{$formValues.dehydrationPercentage}%
						{/if}
					</div>
					<input
						class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
						type="range"
						min="0"
						max="16"
						bind:value={$formValues.dehydrationPercentage}
					/>
				</div>
			</div>
		</div>

		{#if deficit > 0}
			<div class="bg-blue-50 p-4 rounded-lg">
				<div class="text-sm text-blue-800">
					<p class="font-medium">Fluid deficit due to dehydration: {Math.round(deficit)} ml</p>
					{#if $formValues.hours}
						<p class="mt-1">To revert dehydration over {$formValues.hours} hrs: {Math.round(deficit / $formValues.hours)} ml/hr</p>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>
