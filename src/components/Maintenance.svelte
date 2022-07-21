<script>
	import {
		formValues,
		maintenance as maintenanceCalculation,
		maintRates as mainRatesCalculation
	} from '../stores/calculations';
	$formValues.radio = "formula";
	$: maintenance = maintenanceCalculation($formValues.weight);
	$: maintRates = mainRatesCalculation($formValues.maintRate, $formValues.weight);
</script>
<div class="card">
<div>Maintenance rate</div>
<div class="flex gap-5 mb-5 {$formValues.radio === 'formula' ? 'text-gray-800' : 'text-gray-400'}">

	<input type="radio" name="choose"  bind:group={$formValues.radio} value="formula" />
	<div>
		<div>Calculated with formula</div>
		{#if maintenance  && $formValues.hours}
			<div>Fluid maintenance requirement {Math.round((maintenance)*$formValues.hours)} ml per {$formValues.hours} hrs or {Math.round(maintenance)} ml/hr</div>
		{/if}
	</div>

	<div class="{$formValues.radio === 'personalRate' ? 'text-gray-800' : 'text-gray-400'}">
		<input type="radio" name="choose" bind:group={$formValues.radio} value="personalRate" />
		<label for="choose-rate">Choose maintenance rate yourself:</label>
		<input
			id="choose-rate"
			type="number"
			placeholder="2-6ml/kg/hr"
			bind:value={$formValues.maintRate}
		/>
		{#if $formValues.maintRate && $formValues.hours}
		<div>Fluid maintenance requirement {maintRates * $formValues.hours} ml per {$formValues.hours} hrs or {maintRates} ml/hr</div>
		{/if}
	</div>
</div>
</div>
