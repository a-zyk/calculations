<script>
	import {
		formValues,
		maintenance as maintenanceCalculation,
		maintRates as mainRatesCalculation
	} from '../../stores/calculations';
	import Modal from '../Modal.svelte';
	$formValues.radio = 'formula';
	$: maintenance = maintenanceCalculation($formValues.weight, $formValues.species);
	$: maintRates = mainRatesCalculation($formValues.maintRate, $formValues.weight);
	const getPlaceholder = (species) => {
		let text;
		if (species) {
			text = species === 'dog' ? '2-6' : '2-3';
			return `${text}ml/kg/hr`;
		}
	};
	$: placeholder = getPlaceholder($formValues.species);
</script>

<div class="card">
	<div class="flex items-center justify-between mb-4">
		<h2 class="text-lg font-semibold text-gray-800">Maintenance Rate</h2>
		<Modal
			src="/images/formula.png"
			text="Maintenance fluid in dogs and cats are typically 40-60ml/kg/day. This is an estimate based on expected sensible losses (urine) of 27-40 ml/kg/day in a patient with normal renal function and expected insensible losses (feces, cutaneous, respiration) of 13-20 ml/kg/day.<br/>Source: <a target='_blank' href='https://www.aaha.org/aaha-guidelines/fluid-therapy/fluids-for-maintenance-and-replacement/' >AAHA guidelines</a>"
		/>
	</div>

	<div class="space-y-6">
		<div class="flex flex-col gap-4">
			<div class="flex items-center gap-2">
				<input
					id="formula"
					type="radio"
					name="choose"
					bind:group={$formValues.radio}
					value="formula"
					class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
				/>
				<label for="formula" class="text-sm font-medium text-gray-700">Calculate with formula</label>
			</div>

			{#if maintenance && $formValues.hours}
				<div class="bg-green-50 p-4 rounded-lg">
					<div class="text-sm text-green-800">
						<p class="font-medium">Fluid maintenance requirement:</p>
						<p class="mt-1">{Math.round(maintenance * $formValues.hours)} ml per {$formValues.hours} hrs</p>
						<p class="mt-1">{Math.round(maintenance)} ml/hr</p>
					</div>
				</div>
			{/if}
		</div>

		<div class="flex flex-col gap-4">
			<div class="flex items-center gap-2">
				<input 
					type="radio" 
					name="choose" 
					bind:group={$formValues.radio} 
					value="personalRate"
					class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
				/>
				<label for="choose-rate" class="text-sm font-medium text-gray-700">Choose maintenance rate yourself:</label>
			</div>

			<div class="flex items-center gap-4">
				<input 
					id="choose-rate" 
					type="number" 
					{placeholder} 
					bind:value={$formValues.maintRate}
					class="w-32"
				/>
			</div>

			{#if $formValues.maintRate && $formValues.hours}
				<div class="bg-green-50 p-4 rounded-lg">
					<div class="text-sm text-green-800">
						<p class="font-medium">Fluid maintenance requirement:</p>
						<p class="mt-1">{maintRates * $formValues.hours} ml per {$formValues.hours} hrs</p>
						<p class="mt-1">{maintRates} ml/hr</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
