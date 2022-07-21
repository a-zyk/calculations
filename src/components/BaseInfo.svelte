<script>
	import { formValues } from '../stores/calculations';
</script>

<div class="flex gap-5 mb-5 card">
	<div>
		<label for="body-mass">Body mass, kg</label>
		<input id="body-mass" type="number" placeholder="BW" bind:value={$formValues.weight} />
	</div>

	<div>
		<label for="fluid-time">Fluid therapy time, hrs</label>
		<input id="fluid-time" type="number" placeholder="hours" bind:value={$formValues.hours} />
	</div>
</div>
