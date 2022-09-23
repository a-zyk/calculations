<script>
	import Anaphylaxis from '../components/anaphylaxis/Anaphylaxis.svelte';
	import AnaphylaxisDiagram from '../components/anaphylaxis/anaphylaxisDiagram.svelte';
	import Styles from '../components/styles.svelte';
</script>
<Styles>
	<div slot="flowchart"><AnaphylaxisDiagram /></div>
	<div slot="description"><Anaphylaxis /></div>
</Styles>
