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

<div class="space-y-6">
	<div class="bg-white rounded-lg shadow-sm p-6">
		<h1 class="text-2xl font-bold text-gray-800 mb-6">Fluid Therapy Calculator</h1>
		<BaseInfo />
		<FluidTherapyTime/>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		<Dehydration />
		<Maintenance />
		<Ongoing />
		{#if $formValues.shocky}
			<Shock />
		{/if}
		<div class="md:col-span-2">
			<Total />
		</div>
	</div>
</div>
