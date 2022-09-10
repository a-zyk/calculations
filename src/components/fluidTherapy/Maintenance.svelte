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

<div class="card  max-w-full">
	<div class="flex gap-2 items-center">
		<div>Maintenance rate</div>
		<Modal
			src="/images/formula.png"
			text="Maintenance fluid in dogs and cats are typically 40-60ml/kg/day. This is an estimate based on expected sensible losses (urine) of 27-40 ml/kg/day in a patient with normal renal function and expected insensible losses (feces, cutaneous, respiration) of 13-20 ml/kg/day.<br/>Source: <a target='_blank' href='https://www.aaha.org/aaha-guidelines/fluid-therapy/fluids-for-maintenance-and-replacement/' >AAHA guidelines</a>"
		/>
	</div>
	<div
		class=" items-center flex gap-10 mb-5 {$formValues.radio === 'formula'
			? 'text-gray-800'
			: 'text-gray-400'}"
	>
		<div>
			<div class=" gap-2 flex items-center">
				<input
					id="formula"
					type="radio"
					name="choose"
					bind:group={$formValues.radio}
					value="formula"
				/>
				<label for="formula">Calculate with formula</label>
			</div>

			{#if maintenance && $formValues.hours}
				<div>
					Fluid maintenance requirement {Math.round(maintenance * $formValues.hours)} ml per {$formValues.hours}
					hrs or {Math.round(maintenance)} ml/hr
				</div>
			{/if}
		</div>

		<div class={$formValues.radio === 'personalRate' ? 'text-gray-800' : 'text-gray-400'} >
			
				<input type="radio" name="choose" bind:group={$formValues.radio} value="personalRate" />
				<label for="choose-rate">Choose maintenance rate yourself:</label>
			
				<input id="choose-rate" type="number" {placeholder} bind:value={$formValues.maintRate} />
			
			{#if $formValues.maintRate && $formValues.hours}
				<div>
					Fluid maintenance requirement {maintRates * $formValues.hours} ml per {$formValues.hours} hrs
					or {maintRates} ml/hr
				</div>
			{/if}
		</div>
	</div>
</div>
