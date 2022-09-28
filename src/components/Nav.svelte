<script>
	import { page } from '$app/stores';
	import Toggle from "./Toggle.svelte"

	let navItems = [
		{ name: 'ATE', link: '/ate' },
		{ name: 'Anaphylaxis', link: '/anaphylaxis' },
		{ name: 'Blocked cat', link: '/blockedCat' },
		{ name: 'CHF', link: '/chf' },
		{ name: 'Colapsed neonate', link: '/colapsedNeonate' },
		{ name: 'Epilepsy', link: '/epilepsy' },
		{ name: 'Eclampsia', link: '/eclampsia' },
		{ name: 'Fluid therapy', link: '/fluids' },
	
	];

	let intoxicationItems = [
		{ name: 'Anticoagulant rodenticides', link: '/anticoagulant' },
		{ name: 'Antifreeze', link: '/antifreeze' },
		{ name: 'Chocolate', link: '/chocolate' },
		{ name: 'Grapes and raisins', link: '/grapes' },
		{ name: 'Ibuprofen', link: '/ibuprofen' },
		{ name: 'Lilies', link: '/lilies' },
		{ name: 'Macrocyclis lactones', link: '/lactones' },
		{ name: 'Mould', link: '/mould' },
		{ name: 'Paracetamol', link: '/paracetamol' },
		{ name: 'Pyrethrin and pyrethroid', link: '/pyrethrin' },
		{ name: 'Vitamin D', link: '/vitamind' },
		{ name: 'Xylitol', link: '/xylitol' },
	]



	const ACTIVE_CLASSES = 'border-black border-b-2 font-bold';
</script>

<!-- <nav class="mb-2">
	<ul class="flex-col items-center md:flex-row flex justify-evenly">
		{#each navItems as navItem}
			<li class="py-3 text-black {$page.url.pathname == navItem.link ? ACTIVE_CLASSES : ''}">
				<a href={navItem.link}>{navItem.name}</a>
			</li>
		{/each}
	</ul>
</nav> -->

<nav class="min-h-screen overflow-x-hidden  bg-blue-300 top-0 left-0">
	<ul class="ml-5 pt-16 " >
		{#each navItems as navItem}
			<li class="py-3 text-black cursor-pointer text-xl font-bold px-3 pt-3 items-center {$page.url.pathname == navItem.link ? ACTIVE_CLASSES : ''}">
				<a href={navItem.link}>{navItem.name}</a>
			</li>
		{/each}
		
		<Toggle>
			
			<div slot="title">Intoxication</div>
			<div slot="content">
				{#each intoxicationItems as intoxicationItem}
				<li class="py-3 text-black {$page.url.pathname == intoxicationItem.link ? ACTIVE_CLASSES : ''}">
				<a href={intoxicationItem.link}>{intoxicationItem.name}</a>
			</li>
			{/each}
			</div>
		
		</Toggle>
	
	</ul>
</nav>
