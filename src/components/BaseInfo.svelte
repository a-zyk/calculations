<script>
	import { formValues } from '../stores/calculations';
	import {active} from '../stores/navToggle'
	$formValues.species = 'dog'
let toggleNav = () => {
$active = !$active
}
</script>

<div class="flex flex-col md:flex-row gap-5 mb-5 card items-center ">

		<div class="flex">
			<div class="flex flex-col w-8 bg-slate-400 items-center px-4 lg:hidden " on:click={toggleNav}>
				<div>–</div>
				<div>–</div>
				<div>–</div>
			</div>
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
					for="dog">Dog</label>
				
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
<b>Choose species and body weight</b>
		

</div>
