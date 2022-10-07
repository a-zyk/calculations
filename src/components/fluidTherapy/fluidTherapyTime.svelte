<script>
    	import { formValues } from '../../stores/calculations';
</script>


<div class="card">
    <div>
        <label for="fluid-time">Fluid therapy time, hrs</label>
        <input id="fluid-time" type="number" placeholder="hours" bind:value={$formValues.hours} />
    </div>

    <div>
        <label for="shocky">Animal in shock</label>
        <input id="shocky" type="checkbox" bind:checked={$formValues.shocky} />
    </div>
</div>