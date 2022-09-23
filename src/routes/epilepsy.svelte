<script>
	import Epilepsy from '../components/epilepsy/epilepsy.svelte';
	import EpilepsyDiagram from '../components/epilepsy/epilepsyDiagram.svelte';

	import Styles from '../components/styles.svelte';
</script>

<Styles>
	<div slot="flowchart"><EpilepsyDiagram /></div>
	<div slot="description"><Epilepsy /></div>
</Styles>
