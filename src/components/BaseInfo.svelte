<script>
	import { formValues } from '../stores/calculations';
	import { active } from '../stores/navToggle';
	$formValues.species = 'dog';
	let toggleNav = () => {
		$active = !$active;
	};
</script>

<div class="flex items-center pt-5 px-5">
	<div class="flex flex-col w-8 cursor-pointer lg:hidden mr-5" on:click={toggleNav}>
		<div class="w-full h-[2px] bg-gray-800 rounded-full" />
		<div class="w-full h-[2px] bg-gray-800 rounded-full mt-1" />
		<div class="w-full h-[2px] bg-gray-800 rounded-full mt-1" />
	</div>
	<div class="text-center font-bold">
		Choose species and body weight
	</div>
</div>
<div class="flex flex-col md:flex-row gap-5 mb-5 card items-start">
	<div class="flex">
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
				class="px-4 py-2 mr-2 text-white font-semibold peer-checked:bg-blue-500 rounded-md bg-gray-500 cursor-pointer"
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
	</div>

	<div>
		<label for="body-mass">Body mass, kg</label>
		<input id="body-mass" type="number" min="0" placeholder="BW" bind:value={$formValues.weight} />
	</div>
</div>
