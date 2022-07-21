<script>
	import {
		formValues,
		maintenance as maintenanceCalculation,
		maintRates as mainRatesCalculation,
		deficit as deficitCalculation,
		totalFluids as totalFluidsCalculation,
		totalFluidsPerHr as totalFluidsPerHrCalculation,
	} from '../stores/calculations';
	$: maintenance = maintenanceCalculation($formValues.weight);
	$: mainRates = mainRatesCalculation($formValues.maintRate, $formValues.weight);
	$: deficit = deficitCalculation($formValues.weight, $formValues.dehydrationPercentage);
	$: totalFluids = totalFluidsCalculation($formValues.radio, mainRates, maintenance, deficit, $formValues.hours, $formValues.ongoing)
	$: totalFluidsPerHr = totalFluidsPerHrCalculation($formValues.radio, mainRates, maintenance, deficit, $formValues.hours, $formValues.ongoing)
</script>


	{#if totalFluids}
<div class="card">
	Total fluids needed to maintain and replenish dehydration deficit per {$formValues.hours}hrs: 
	{totalFluids} ml
</div>

<div class="card">
	Fluid rate {totalFluidsPerHr} ml/hr
</div>
 {/if}


