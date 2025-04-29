<script>
	import {
		formValues,
		maintenance as maintenanceCalculation,
		maintRates as mainRatesCalculation,
		deficit as deficitCalculation,
		totalFluids as totalFluidsCalculation,
		totalFluidsPerHr as totalFluidsPerHrCalculation,
	} from '../../stores/calculations';
	$: maintenance = maintenanceCalculation($formValues.weight, $formValues.species);
	$: mainRates = mainRatesCalculation($formValues.maintRate, $formValues.weight);
	$: deficit = deficitCalculation($formValues.weight, $formValues.dehydrationPercentage);
	$: totalFluids = totalFluidsCalculation($formValues.radio, mainRates, maintenance, deficit, $formValues.hours, $formValues.ongoing, $formValues.shockAmount)
	$: totalFluidsPerHr = totalFluidsPerHrCalculation($formValues.radio, mainRates, maintenance, deficit, $formValues.hours, $formValues.ongoing, $formValues.shockAmount)
</script>

{#if totalFluids}
	<div class="card bg-blue-50 border-blue-100">
		<h2 class="text-xl font-bold text-blue-800 mb-4">Total Fluid Requirements</h2>
		
		<div class="space-y-4">
			<div class="bg-white p-4 rounded-lg shadow-sm">
				<h3 class="text-lg font-semibold text-gray-800 mb-2">Total Volume</h3>
				<p class="text-2xl font-bold text-blue-600">{totalFluids} ml</p>
				<p class="text-sm text-gray-600 mt-1">Over {$formValues.hours} hours</p>
			</div>

			<div class="bg-white p-4 rounded-lg shadow-sm">
				<h3 class="text-lg font-semibold text-gray-800 mb-2">Infusion Rate</h3>
				<p class="text-2xl font-bold text-blue-600">{totalFluidsPerHr} ml/hr</p>
				<p class="text-sm text-gray-600 mt-1">Continuous rate</p>
			</div>
		</div>
	</div>
{/if}


