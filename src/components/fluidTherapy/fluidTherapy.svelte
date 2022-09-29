<script>
	import Dehydration from './Dehydration.svelte';
	import Maintenance from './Maintenance.svelte';
	import Ongoing from './Ongoing.svelte';
	import Total from './Total.svelte';
	import Shock from './Shock.svelte';
	import { formValues } from '../../stores/calculations';
</script>

<div class="m-auto">
<div>
	<label for="fluid-time">Fluid therapy time, hrs</label>
	<input id="fluid-time" type="number" placeholder="hours" bind:value={$formValues.hours} />
</div>

<div>
	<label for="shocky">Animal in shock</label>
	<input id="shocky" type="checkbox" bind:checked={$formValues.shocky} />
</div>

<div class="flex">
	<div>
		<Dehydration />
		<Maintenance />
		<Ongoing />

		{#if $formValues.shocky}
			<Shock />
		{/if}
		<Total />
	</div>
</div>
</div>