<script>
	import { formValues } from '../stores/calculations';
</script>

<div class="card">
<div>Ongoing losses</div>

<input type="number" placeholder="ongoing losses, ml" bind:value={$formValues.ongoing} />

{#if $formValues.ongoing}
	<div>{$formValues.ongoing}</div>
{/if}
</div>