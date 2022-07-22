<script>
	import { formValues } from '../stores/calculations';
</script>

<div class="flex gap-5 mb-5 card items-center">
	<div>
		<input
			class="peer hidden"
			type="radio"
			bind:group={$formValues.species}
			name="species"
			id="dog"
			value="dog"
		/>
		<label
			class="px-4 py-2 text-white font-semibold peer-checked:bg-blue-500 rounded-md bg-gray-500 cursor-pointer"
			for="dog">Dog</label
		>
	</div>

	<div>
		<input
			class="peer hidden"
			type="radio"
			bind:group={$formValues.species}
			name="species"
			id="cat"
			value="cat"
		/>
		<label
			class="px-4 py-2 text-white font-semibold peer-checked:bg-blue-500 cursor-pointer rounded-md bg-gray-500"
			for="cat">Cat</label
		>
	</div>

	<div>
		<label for="body-mass">Body mass, kg</label>
		<input id="body-mass" type="number" placeholder="BW" bind:value={$formValues.weight} />
	</div>

	<div>
		<label for="fluid-time">Fluid therapy time, hrs</label>
		<input id="fluid-time" type="number" placeholder="hours" bind:value={$formValues.hours} />
	</div>
</div>
