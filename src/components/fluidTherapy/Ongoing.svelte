<script>
	import { formValues } from '../../stores/calculations';
	import Modal from '../Modal.svelte';
</script>

<div class="card">
	<div class="flex items-center gap-2 mb-2">
		<div>Ongoing losses</div>
		<Modal
			text="Ongoing losses may be divided into sensible (urine) and insensible (everything else). Patients with kidney disease, diabetes, Cushing's syndrome, or on certain medications, will require additional fluids to counter their increased losses. Ideally the amount of urine produce in a specified time is recorded, and any volume in excess of the allotted maintenance fluids should be delivered to the animal. If urine collection is not feasible, the patient should be weighed frequently to ensure that their fluid balanced is maintained. Insensible losses such as vomitus, fecal, cutaneous and respiratory water are difficult to assess and typically rely on serial physical exams and measurement of body weight, PCV and TS."
		/>
	</div>
	<input type="number" placeholder="ongoing losses, ml/hr" bind:value={$formValues.ongoing} />

	{#if $formValues.ongoing}
		<div>{$formValues.ongoing} ml/hr</div>
	{/if}
</div>
