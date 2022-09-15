<script>
	import { formValues } from '../../stores/calculations';
 $: mgPerHour = $formValues.criMgKgHr * $formValues.weight

 $: totalDiluent = $formValues.criFluidsRate * $formValues.weight * $formValues.criTime

 $: totalDrugMg = $formValues.criMgKgHr * $formValues.weight * $formValues.criTime

 $: totalDrugMl = ($formValues.weight * $formValues.criMgKgHr * $formValues.criTime ) / $formValues.drugConc
</script>

<div>
 
<label for="drugConc">Concentration of the drug</label>
<input type="number" id="drugConc" placeholder="mg/ml" bind:value={$formValues.drugConc}/>

<label for="mgKgHr">Dosage of a drug</label>
<input type="number" id="mlKgHr" placeholder="mg/kg/hr" bind:value={$formValues.criMgKgHr}/>

<label for="criTime">Duration of cri</label>
<input type="number" id="criTime" placeholder="hours" bind:value={$formValues.criTime}/>

<label for="criFluids">Desired fluid rate</label>
<input type="number" id="fluidRequirement" placeholder="ml/kg/hr" bind:value={$formValues.criFluidsRate}/>

<div>MG given per 1 hour: {mgPerHour}  mg/hr </div>

<div>Mg given per {$formValues.criTime} hours: {$formValues.criTime * mgPerHour} mg </div>

<div>Total fluids (diluent): {totalDiluent}</div>

<div>Total drug ml: {totalDrugMl} </div>

<div>Take {totalDiluent}ml of diluent deduct {totalDrugMl}ml. Add {totalDrugMl} ml of drug to the fluid bag. </div>

</div>