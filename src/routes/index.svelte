<script>
	import ATE from '../components/ate/Ate.svelte';
	import AteDiagram from '../components/ate/ateDiagram.svelte';
	import Styles from '../components/styles.svelte';
</script>

<Styles>
	<div slot="flowchart"><AteDiagram /></div>
	<div slot="description"><ATE /></div>
</Styles>
