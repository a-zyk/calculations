<script>
     import Dehydration from "./Dehydration.svelte"
    import Maintenance from "./Maintenance.svelte";
    import Ongoing from "./Ongoing.svelte";
    import Total from "./Total.svelte";
    import Shock from "./Shock.svelte";
    import { formValues } from '../../stores/calculations';

</script>
<div>
			<label for="fluid-time">Fluid therapy time, hrs</label>
			<input id="fluid-time" type="number" placeholder="hours" bind:value={$formValues.hours} />
		</div>
<div class="flex">
    <div> 
   
    <Dehydration/>
    <Maintenance/>
    <Ongoing/>
    <Total/>
    </div>
    <Shock/>
    </div>