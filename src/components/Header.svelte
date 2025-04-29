<script>
	import { active } from '../stores/navToggle';

	let toggleNav = () => {
		$active = !$active;
	};
</script>

<header class="bg-white border-b border-gray-200">
    <div class="flex items-center justify-between px-6 py-4">
        <button 
            class="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            on:click={toggleNav}
            aria-label="Toggle navigation"
        >
            <div class="w-6 h-5 flex flex-col justify-between">
                <div class="w-full h-0.5 bg-gray-600 rounded-full" />
                <div class="w-full h-0.5 bg-gray-600 rounded-full" />
                <div class="w-full h-0.5 bg-gray-600 rounded-full" />
            </div>
        </button>
        <div class="text-xl font-bold text-gray-800">Keep calm, You got this!</div>
        <div class="w-8 lg:hidden"></div>
    </div>
</header>
