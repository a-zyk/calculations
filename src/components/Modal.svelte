<script>
	export let src;
	export let text = '';
	let expanded = false;
	function close() {
		expanded = false;
	}
</script>

<div
	class=" flex text-white items-center justify-center cursor-pointer bg-slate-400 rounded-full w-5 h-5 min-w-[20px]"
	on:click={() => {
		expanded = true;
	}}
>
?</div>



{#if expanded}
<div class="bg-black opacity-50 fixed top-0 left-0 z-10 w-screen h-screen" />
<div
	class="w-screen h-screen max-h-screen top-0 left-0 fixed z-20 flex justify-center items-center"
>
	<div class="relative w-full md:w-5/12 max-h-screen bg-white p-5">
		<img {src} alt="" class="w-full max-h-[80vh]" /> 
		{@html text }
		<div
			class="absolute top-0 right-0 flex items-center justify-center cursor-pointer bg-white rounded-full w-8 h-8"
			on:click={close}
		>
			✖
		</div>
	</div>
</div>
{/if}