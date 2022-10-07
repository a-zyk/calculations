<script>
	import { formValues } from '../../stores/calculations';
	import DrugCalc from '../drugdose.svelte';
	import Toggle from '../Toggle.svelte';
</script>

<Toggle>
	<div slot="title">Anaphylaxis pathophysiology</div>
	<div slot="content">
		<div>
			When triggered, anaphylaxis causes a massive histamine release in the skin, liver, lungs, and
			GI tract. In dogs, the GI tract and liver(alt >1000 common) are primarily affected; in cats,
			the respiratory system is primarily affected. Histamine, along with other inflammatory
			mediators, increases vascular permeability and smooth muscle contraction.
		</div>
		<div>
			In dogs and cats, the most common causes are insect and reptile venom, antimicrobial agents,
			NSAIDs, antibiotics, opiates, vaccines, blood-based products, radio-contrast agents, food, and
			physical factors such as cold and exercise.
		</div>
	</div>
</Toggle>

<Toggle>
	<div slot="title">Clinical sings and testing</div>
	<div slot="content">
		<div>
			<span class="font-bold">Dog</span>: <span class="font-bold">collapse</span>,
			cutaneus-erythema, urticaria, pruritus, wheals, and angioedema. These signs are often short in
			duration. Respiratory- dyspnea, bronchospasm, stridor, tachypnea, and coughing. The most
			common gastrointestinal- nausea, <span class="font-bold">vomiting, and bloody diarrhea</span>.
		</div>

		<div>
			<span class="font-bold">Cat</span>: <span class="font-bold">respiratory distress</span> is often
			the first sign exhibited. Cats’ clinical signs may also include hypersalivation, laryngeal swelling,
			edema, pruritus, and signs of hypovolemic shock.Cats are less likely than dogs to experience cutaneous
			effects.
		</div>

		<div>
			<span class="font-bold">Further testing</span>: gall bladder wall edema(halo sign, common for
			dogs but not for cats), very flat v.cava, non traumatic hemoabdomen with hemoconcentration
			evident on blood morphology. Elevated liver enzymes (can be >1000). Diferentiate from bleeding
			spleen mass( HCT usually low). Diferentiate from CHF (Fat v.cava and vascular tree sign- blood
			stasis in the liver).
		</div>
	</div>
</Toggle>

<Toggle>
	<div slot="title">Treatment</div>
	<div slot="content">
		<div>
			<span class="font-bold">First line</span>: Resuscitate IVF crystalloids shock doses.
			Resuscitate with <span class="font-bold"> EPI low dose IV (0.01mg/kg) </span>- repeat
			q5-10mins or short-term CRI 0.05mcg/kg/min
		</div>
		<div>
			<span class="font-bold">Second line but give upfront</span>: Dexamethasone 0.3mgkg IV followed
			by anti-inflammatory tapering dose Prednisolone PO q12hrs x 3 days then q24 hrs x 3 days.
			Repeat Dexamethasone 0.15mg/kg IV if severe case or unable to take PO prednisolone.
			<div>
				Diphenhydramine (H1 blocker) IM once (avoid IV) 1–4 mg/kg IM (dogs); 0.5 to 2 mg/kg IM
				(cats).
			</div>
			<div>
				Famotidine (h1 blocker) 0.5–1 mg/kg IV initially and then continued PO like prednisolone.
			</div>
		</div>
	</div>
</Toggle>



<div class="mt-4 text-sm">
	Source:
	<a
		class="hover:text-blue-400"
		target="_blank"
		href="https://todaysveterinarypractice.com/emergency-medicine-critical-care/anaphylactic-shock-effectively-diagnose-treat/"
		>Article,</a
	>

	<a
		class="hover:text-blue-400"
		target="_blank"
		href="https://fastvet.com/fastvet-monthly-webinar-july-2022-updated-information-on-medically-treated-canine-anaphylactic-hemoabdomen-presented-at-the-acvim-forum-2022/"
		>Webinar from ACVIM Forum 2022 presented by Dr. Greg Lisciandro, DVM, DABVP, DACVECC </a
	><div>  Steroids use are questionable as not enough proof that they help, however, using them make sense physiologically. Up to clinician to decide. </div>
</div>
