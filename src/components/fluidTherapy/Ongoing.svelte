<script>
	import { formValues } from '../../stores/calculations';
	import Modal from '../Modal.svelte';
</script>

<div class="card">
	<div class="flex items-center justify-between mb-4">
		<h2 class="text-lg font-semibold text-gray-800">Ongoing Losses</h2>
		<Modal
			text="Ongoing losses may be divided into sensible (urine) and insensible (everything else). Patients with kidney disease, diabetes, Cushing's syndrome, or on certain medications, will require additional fluids to counter their increased losses. Ideally the amount of urine produce in a specified time is recorded, and any volume in excess of the allotted maintenance fluids should be delivered to the animal. If urine collection is not feasible, the patient should be weighed frequently to ensure that their fluid balanced is maintained. Insensible losses such as vomitus, fecal, cutaneous and respiratory water are difficult to assess and typically rely on serial physical exams and measurement of body weight, PCV and TS."
		/>
	</div>

	<div class="space-y-4">
		<div class="flex flex-col gap-2">
			<label for="ongoing-losses" class="text-sm font-medium text-gray-700">Ongoing losses (ml/hr)</label>
			<input 
				id="ongoing-losses"
				type="number" 
				placeholder="Enter ongoing losses" 
				bind:value={$formValues.ongoing}
				class="w-full"
			/>
		</div>

		{#if $formValues.ongoing}
			<div class="bg-blue-50 p-4 rounded-lg">
				<div class="text-sm text-blue-800">
					<p class="font-medium">Current ongoing losses:</p>
					<p class="mt-1">{$formValues.ongoing} ml/hr</p>
				</div>
			</div>
		{/if}
	</div>
</div>
