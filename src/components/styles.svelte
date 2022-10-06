<script>
	let visible = false;

	function toggleVissible() {
		visible = !visible;
	}
</script>

<button on:click={toggleVissible}>
	{#if visible}
		Hide
	{:else}
		Show
	{/if} flowchart
</button>

<div class="flex flex-col  md:flex-row gap-5 p-5">
	{#if visible}
		<div class="w-full items-center md:w-1/2 flex flex-col gap-2 mr-3">
			<slot name="flowchart" />
		</div>
	{/if}

	<div class="w-full {visible ? 'md:w-1/2' : 'w-full' } flex flex-col gap-2">
		<slot name="description" />
	</div>
</div>
