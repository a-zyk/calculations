<script>
	import Dehydration from './Dehydration.svelte';
	import Maintenance from './Maintenance.svelte';
	import Ongoing from './Ongoing.svelte';
	import Total from './Total.svelte';
	import Shock from './Shock.svelte';
	import { formValues } from '../../stores/calculations';
	import BaseInfo from '../BaseInfo.svelte';
	import FluidTherapyTime from './fluidTherapyTime.svelte';
</script>

<div>
	
	<BaseInfo />

	<FluidTherapyTime/>
	

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
