<script>
	import { formValues } from '../../stores/calculations';
	import DrugCalc from '../drugdose.svelte';
	import Toggle from '../Toggle.svelte';
</script>


		<Toggle>
			<div slot="title">Analgesia</div>
			<div slot="content">
				Analgesia is a priority for management of acute ATE in the first 24 hours, and treatment
				with a mu opioid agonist such as fentanyl, hydromorphone, or methadone is recommended
				<span class="font-bold"
					>Methadone 0,2mg/kg iv or Buprenorphine 0.02 mg/kg i.v., i.m., sc q6h.</span
				> Also well tolerated and effective when given oral transmucosally.
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Anticoagulant therapy</div>
			<div slot="content">
				As soon as possible, therapy with
				<span class="font-bold">low–molecular weight heparin </span>(e.g., dalteparin 75 to 150 U/kg
				SC q6h) or
				<span class="font-bold">unfractionated heparin</span>
				(250 to 300 U/kg q6h). As soon as possible to give PO: loading dose of
				<span class="font-bold">Clopidogrel</span> 75mg PO/per cat then 18.75mg PO/per cat q24. Very
				bitter- use gel capsules. Thrombolytic treatment is not recommended.
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Manage CHF</div>
			<div slot="content">
				Asses CHF with ultrasound, xray. Initiate furosemide 1-2mg/kg if needed. Put the cat in
				oxygen <a
				class="hover:text-blue-400"
				target="_blank"
				href="/chf"
				>More info in CHF folder</a
			>
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Physiotherapy</div>
			<div slot="content">
				When pain and CHF is stable begin physiotherapy, manipulate and massage affected limbs.
			</div>
		</Toggle>

		<div class="mt-4 text-sm">
			Source:
			<a
				class="hover:text-blue-400"
				target="_blank"
				href="https://todaysveterinarypractice.com/cardiology/feline-arterial-thromboembolism/"
				>Article</a
			>
		</div>
