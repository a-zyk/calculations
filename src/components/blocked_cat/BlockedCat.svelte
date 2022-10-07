<script>
	import Toggle from '../Toggle.svelte';
</script>

<Toggle>
	<div slot="title">Pain relief and initial stabilisation</div>
	<div slot="content">
		<span class="font-bold">Pain relief ASAP</span> - Methadone 0.2-0.3mg/kg IM

		<div>Place an IV.</div>

		<div>
			<span class="font-bold">Pain relief later</span>: Ideally - fentanyl constant rate infusion at
			2mcg/kg/hr Or methadone q4-6 or buprenorphine q6-8
		</div>

		<div>
			1x 5ml/kg bolus LRS (lactated ringers solution/hartmanns) over 10 minutes to correct perfusion
			initially
		</div>
		<div>
			If there is <span class="font-bold">bradycardia present</span> (less than 160bpm ) – immediately
			determine what the potassium is via a blood gas or biochemistry and correct prior to unblocking.
			If there is hyperkalaemia – place an ECG to assess for arrhythmias including peaked T waves and
			atrial standstill. A severe hyperkalaemia causes atrial standstill and cardiac arrest.
		</div>
	</div>
</Toggle>

<Toggle>
	<div slot="title">Hyperkalaemia management</div>
	<div slot="content">
		<div>
			<span class="font-bold">Mild: 5.5-6.5</span>: 10ml/kg bolus LRS over 20 minutes
		</div>
		<div>
			<span class="font-bold">Moderate: 6.5 OR cardiotoxic effects</span>: IV crystalloid bolus
			10ml/kg LRS over 20 minutes along side the administration of calcium gluconate 0.5-1.5ml/kg
			diluted 50:50 slow IV over 10 minutes and titrate to effect (start low dose and monitor for
			tachycardia + ECG). Calcium gluconate buys you 20 minutes of time to reduce the potassium - it
			alters the threshold potential (aka - makes the heart keep beating) Administer a glucose bolus
			1ml/kg diluted 50:50 in LRS. This glucose bolus will stimulate endogenous insulin secretion
			driving potassium intracellularly. After one hour - reassess potassium.
		</div>
		<div>
			<span class="font-bold">Severe or refractory to treatment: If potassium >7</span>, then
			administer IV insulin (regular/short acting eg. actrapid) 0.25- 0.5U/kg IV —> always followed
			by 4ml of 50% dextrose per unit of insulin AND 2.5% glucose CRI at maintenance rates until
			insulin wears off in 6-8 hours. Insulin drives K+ back into cells but must be followed with
			dextrose CRI to prevent hypoglycaemia. Onset is 20 minutes and monitor blood glucose every 2
			hours for 6-8 hours – swap back to LRS after this. Alternative therapies also include
			bicarbonate or albuterol puffs/terbutaline, however in my experience insulin and glucose is
			usually sufficient!
		</div>
	</div>
</Toggle>

<Toggle>
	<div slot="title">Fluid therapy</div>
	<div slot="content">
		Intravenous fluid therapy: there is NO difference between administering Lactated Ringers
		Solution or saline. LRS is prefered because it is an alkalising, balanced solution. Although it
		contains potassium, it still creates a dilution effect while buffering the patient’s often
		acidic pH. This increase in pH causes and extracellular shift of H+ in exchange for an
		intracellular shift of K+ (lowers the serum potassium) Consider maintenance + dehydration +
		ongoing losses
	</div>
	<div>
		FLUTD cats will experience post obstructive diuresis (these losses will need to be matched) I
		generally aim for 1.5-2x maintenance in the first 12 hours if PCV/TP is normal and there is no
		clinical evidence of dehydration over the next 48 hours – this fluid therapy needs to be
		tailored to match the urine ins and outs of the patient
	</div>
</Toggle>

<Toggle>
	<div slot="title">Unblocking</div>
	<div slot="content">
		<div>
			Once hyperkalaemia and perfusion deficits are resolved under general anaesthesia (induction
			with alfaxalone, maintained with iso) place a tomcat catheter (usually 11mm or 14mm) with
			lubrication.Use warmed fluids and sterile lubricant mix, 50:50 for flushing. Consider using an
			intravenous catheter without stylet initially for flushing. Ensure the penis is retracted
			fully caudally to remove the flexure of the urethra as this will aid your catheter placement.
		</div>

		<div>
			Perform a bladder lavage by injecting 20ml of sterile saline and then drawing back 20ml.
			Discard the urine and repeat with a fresh syringe. Repeat 4-8 times depending on the degree of
			haematuria until the urine is clearer in colour. Suture the catheter, attach a closed
			collection system. Keep in place for 48 hours following.
		</div>

		<div>
			Perform a urine analysis (sediment, wet prep, dipstick and USG) to determine the cause of the
			FLUTD episode. Urinary focused ultrasound – it is normal to see a small amount of free fluid
			around the bladder after an obstruction. Assess the bladder for sediment, and distal acoustic
			shadowing/drop out which could indicate stones, assess the kidneys for stones/renal
			abnormalities
		</div>

		<div>
			Additional medication to start post GA Prazosin 1mg/cat PO q 12 for urethral sphincter
			relaxation (not recommended anymore?) Gabapentin 100mg/cat PO q 8 for hospital associated
			anxiety and pain relief
		</div>
	</div>
</Toggle>
<div class="mt-4 text-sm">
	Source: Dr. Brooke Schampers, Inside the emergency room. 2020. New papers indicate that prazosin
	might not be helpful: <a
		class="hover:text-blue-400"
		target="_blank"
		href="https://pubmed.ncbi.nlm.nih.gov/35290210/">Article about it.</a
	> Up to clinician to decide if use warranted
</div>
