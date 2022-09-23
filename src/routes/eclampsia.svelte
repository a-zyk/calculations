<script>
	import Eclampsia from '../components/eclampsia/eclampsia.svelte';
	import EclampsiaDiagram from '../components/eclampsia/eclapsiaDiagram.svelte';
	import Styles from '../components/styles.svelte';
</script>

<Styles>
	<div slot="flowchart"><EclampsiaDiagram /></div>
	<div slot="description"><Eclampsia /></div>
</Styles>
