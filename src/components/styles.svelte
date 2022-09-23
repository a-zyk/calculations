
<div class="flex flex-col  md:flex-row gap-5 p-5">
	<div class="w-full items-center md:w-1/2 flex flex-col gap-2 mr-3">
    <slot name='flowchart'/>
    </div>

	<div class="w-full md:w-1/2 flex flex-col gap-2">
    <slot name="description"/>
    </div>
</div>
