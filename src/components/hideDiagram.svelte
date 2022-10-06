<script>
 let visible = false;

    function toggleVissible() {
        visible = !visible
    }
</script>

<button on:click={toggleVissible}>
    {#if visible === false}
    Show 
    {:else if visible === true}
    Hide 
    {/if} flowchart
</button>

{#if visible}
    <slot name="flowchart"/>
{/if}