<script>
	import { page } from '$app/stores';
	import Toggle from './Toggle.svelte';
	import { active } from '../stores/navToggle';
	let navItems = [
		{ name: 'ATE', link: '/ate' },
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
	const ACTIVE_CLASSES = 'border-black border-b-2 font-bold';
</script>

<nav
	class="min-h-screen overflow-x-hidden bg-blue-300 top-0 left-0 sticky {$active
		? 'flex'
		: 'hidden'} lg:flex "
>
	<ul class="ml-4 pt-16 ">
		{#each navItems as navItem}
			<li
				class="py-3 text-black cursor-pointer text-lg font-bold px-3 pt-3 items-center
				{$page.url.pathname == navItem.link ? ACTIVE_CLASSES : ''}"
			>
				<a href={navItem.link}>{navItem.name}</a>
			</li>
		{/each}

		<Toggle>
			<div slot="title">Intoxications</div>
			<div slot="content">
				{#each intoxicationItems as intoxicationItem}
					<li
						class="py-3 text-black {$page.url.pathname == intoxicationItem.link
							? ACTIVE_CLASSES
							: ''}"
					>
						<a href={intoxicationItem.link}>{intoxicationItem.name}</a>
					</li>
				{/each}
			</div>
		</Toggle>
	</ul>
</nav>
