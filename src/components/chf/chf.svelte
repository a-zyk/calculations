<script>
	import Toggle from '../Toggle.svelte';

</script>

		<Toggle>
			<div slot="title">Imidiate therapy: DOG</div>
			<div slot="content">
				<div>Place in oxygen</div>

				<div>
					<span class="font-bold">Furosemide 1-2 mg/kg </span>IV/IM followed by
					<span class="font-bold">2 mg/kg IV/IM</span> hourly until the patient's respiratory signs are
					substantially improved (ie. respiratory rate and effort are decreased) or a total dosage of
					8 mg/kg has been reached over 4 hours.
				</div>
				<div>
					For life-threatening pulmonary edema (ie. expectoration of froth associated with severe
					dyspnea. radiographic white-out lung. poor initial response to furosemide bolus with
					failure of respiratory effort and rate to improve over 2 hours). furosemide also may be
					administered as a <span class="font-bold">furosemide CRI 0.66-1 mg/kg/hour </span> after the
					initial bolus.
				</div>
				<div>
					<span class="font-bold">Pimobendan 0.25mg/kg</span> BID/TID when able to swallow. Will work
					in 30 mins, if the dog is poorly Pimobendan IV 2 ml/10 kg body weight.
				</div>
				<div>
					<span class="font-bold">Dobutamine </span>(2.5-10 μg/kg/min as a CRI, starting at
					2.5 μg/kg/min and increasing the dosage incrementally) may be used in addition to the
					above treatments to improve the left ventricular function in patients that fail to respond
					adequately to diuretics, pimobendan, sedation, oxygen, and comfort care measures.
					Continuous ECG monitoring is recommended where available during dobutamine infusion, with
					dosage reduction indicated if tachycardia or ectopic beats occur.
				</div>
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Sedation/anxiolytics: DOG</div>
			<div slot="content">
				<div>
					If nervous <span class="font-bold">Butorphanol 0.2 to 0.3 mg/kg</span> administered IM or IV.
					If invasive procedures like thoracocentesis, pericardiocentesis: alfaxalan ¼ of normal dose
					IV + butorphanol IV.
				</div>
			</div></Toggle
		>
	
		<Toggle>
			<div slot="title">Immediate therapy: CAT</div>
			<div slot="content">
				<div>Place in oxygen</div>
				<div>
					<span class="font-bold">Furosemide 1-2mg/kg IV or IM</span>. max 12mg/kg/day.
					<span class="font-bold">Furosemide CRI 0.66 mg/kg/hr</span> after the initial bolus until improvement
					in respiratory rate- less than 60 per minute.
				</div>
			</div>
		</Toggle>
		<Toggle>
			<div slot="title">Sedation/anxiolytics: CAT</div>
			<div slot="content">
				Sedation if nervous <span class="font-bold">butorphanol 0.1-0.2mg/kg</span> IV or IM +
				<span class="font-bold">Midazolam 0.1 mg/kg</span>. If very fractious and needs invasive
				procedure ketamine 0.1ml/PER CAT IV or 0.2-0.3ml/PER CAT IM.
			</div>
		</Toggle>
	

	<div class="text-sm">
		Source:
		<a
			class="hover:text-blue-400"
			link="_blank"
			href="https://onlinelibrary.wiley.com/doi/full/10.1111/jvim.15488">ACVIM guidelines</a
		>, BSAVA drug manual, Update in the management of heart failure: focus on treatment Terri
		DeFrancesco, DVM, DACVIM (Cardiology)
	</div>

