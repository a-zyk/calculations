<script>
    import CHF from "../components/chf/chf.svelte"
    import ChfDiagram from "../components/chf/chfDiagram.svelte";
</script>



<div class="flex gap-5 p-5">
    <div class="w-1/2 flex flex-col gap-2">
    <ChfDiagram/>
    </div>

    <div class="w-1/2 flex flex-col gap-2">
        <CHF/>
    </div>
    
</div>

