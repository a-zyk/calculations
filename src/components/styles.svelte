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

<div class="flex flex-col  lg:flex-row gap-5 {visible ? 'mr-10' : 'mx-16' } ">
	{#if visible}
		<div class="w-full items-center lg:w-1/2 ml-2 flex flex-col gap-2">
			<slot name="flowchart" />
		</div>
	{/if}

	<div class="w-full {visible ? 'lg:w-1/2' : 'w-full' } flex flex-col gap-2">
		<slot name="description" />
	</div>
</div>
