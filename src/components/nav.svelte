<script>
	import { page } from '$app/stores';

	let navItems = [
		{ name: 'Fluid therapy', link: '/fluids' },
		{ name: 'Epilepsy', link: '/epilepsy' },
		{ name: 'CHF', link: '/chf' },
		{ name: 'ATE', link: '/ate' },
		{ name: 'Anaphylaxis', link: '/anaphylaxis' },
		{ name: 'flowchart', link: '/' },
		{ name: 'Blocked cat', link: '/blockedCat' },
		{ name: 'Eclampsia', link: '/eclampsia' },
		{ name: 'Colapsed neonate', link: '/colapsedNeonate' }
	];

	const ACTIVE_CLASSES = 'border-black border-b-2 font-bold';
</script>

<nav class="mb-2">
	<ul class="flex-col items-center md:flex-row flex justify-evenly">
		{#each navItems as navItem}
			<li class="py-3 text-black {$page.url.pathname == navItem.link ? ACTIVE_CLASSES : ''}">
				<a href={navItem.link}>{navItem.name}</a>
			</li>
		{/each}
	</ul>
</nav>