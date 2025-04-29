<script>
	import { page } from '$app/stores';
	import Toggle from './Toggle.svelte';
	import { active } from '../stores/navToggle';
	let navItems = [
		{ name: 'ATE', link: '/' },
		{ name: 'Anaphylaxis', link: '/anaphylaxis' },
		{ name: 'Blocked cat', link: '/blockedCat' },
		{ name: 'CHF', link: '/chf' },
		{ name: 'Colapsed neonate', link: '/colapsedNeonate' },
		{ name: 'Epilepsy', link: '/epilepsy' },
		{ name: 'Eclampsia', link: '/eclampsia' },
		{ name: 'Fluid therapy', link: '/fluids' },
		{ name: 'Hepatic encephalopathy', link: '/hepaticEnceph' }
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
		{ name: 'Xylitol', link: '/xylitol' }
	];

	$: {
		$page.url.pathname;
		$active = false;
	}
</script>

<nav
	class="min-h-screen bg-white border-r border-gray-200 top-0 left-0 sticky {$active
		? 'flex'
		: 'hidden'} lg:flex flex-col"
>
	<div class="p-6">
		<h2 class="text-xl font-bold text-gray-800 mb-6">Emergency Calculator</h2>
		<ul class="space-y-2">
			{#each navItems as navItem}
				<li>
					<a
						class="nav-link block py-2 px-4 rounded-md {$page.url.pathname == navItem.link ? 'nav-link-active' : ''}"
						href={navItem.link}>{navItem.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>

	<div class="px-6">
		<Toggle>
			<div slot="title" class="text-lg font-semibold text-gray-800">Intoxications</div>
			<div slot="content" class="mt-2 space-y-1">
				{#each intoxicationItems as intoxicationItem}
					<a
						class="nav-link block py-2 px-4 rounded-md text-sm {$page.url.pathname == intoxicationItem.link
							? 'nav-link-active'
							: ''}"
						href={intoxicationItem.link}>{intoxicationItem.name}</a
					>
				{/each}
			</div>
		</Toggle>
	</div>
</nav>
