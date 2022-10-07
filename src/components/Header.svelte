<script>
	import { active } from '../stores/navToggle';

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
    <div class="font-bold text-lg m-auto ">Keep calm, You got this!</div>
</div>
