<script>
	import { formValues, shock as shockCalculation } from '../../stores/calculations';
	import Modal from '../Modal.svelte';
$: shock = shockCalculation($formValues.weight, $formValues.species)
</script>

<div class="card">
<div>Shock dose {shock} ml</div>
<div>Give 25% ({shock/4}ml)of calculated volume up to 3 times</div>
<div>Amount of fluid given to correct shock, ml</div>
<input type="number" placeholder="ml" min="0" bind:value={$formValues.shockAmount} />
</div>