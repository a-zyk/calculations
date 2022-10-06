<script>
	import Toggle from '../Toggle.svelte';
</script>

<Toggle>
	<div slot="title">Emergency Therapy</div>
	<div slot="content">
		<div>
			Patients with acute onset of HE may require treatment of cerebral edema. <span
				class="font-bold"
			>
				Mannitol (0.5-1.5 g/kg IV over 15-30 minutes)
			</span>
			induces an osmotic shift and decreases cerebrospinal fluid (CSF) production. It also serves as
			a free radical scavenger.
			<span class="font-bold"> Hypertonic saline (3-4 mL/kg IV over 15-30 minutes) </span> is another
			option. Note that treatment of cerebral edema is not recommended until the patient is hemodynamically
			stable. Slight elevation of the patient’s head may help venous drainage and reduce intracranial
			pressure. IV fluid therapy may be needed in patients with hypovolemia. Benzodiazepine antagonists
			(e.g. flumazenil 0.02 mg/kg IV, sarmazenil 3 mg/kg IV) can be helpful for comatose patients.
		</div>
		<div>
			Anticonvulsants may be necessary.<span class="font-bold">
				Levetiracetam (20 mg/kg IV q 8 hrs)</span
			>
			is one option that is gaining favor. Use of injectable
			<span class="font-bold">diazepam or midazolam to treat seizures is controversial</span>.
			Phenobarbital has also been used by some clinicians despite its long half-life and hepatic
			metabolism. Chronic phenobarbital administration can cause hepatic injury in dogs; however,
			this is less of a concern with short-term usage. Potassium bromide can be used as an
			adjunctive anticonvulsant. Additionally, propofol at sub-anesthetic dosages and given as a
			constant rate infusion (CRI) has been used to control seizures occurring after the repair of
			congenital PSS. Use of propofol requires careful monitoring.
		</div>
		<div>
			Enemas can be administered to decrease the number of urease-producing bacteria in the colon
			and remove toxic byproducts of bacterial metabolism. Warm water enemas at 10 mL/kg q 4-6 hrs
			until signs improve can be effective. Lactulose can also be given rectally 20 mL/kg of a 30:70
			lactulose:water mixture up to q 6 hrs. Enemas are most commonly used during an HE crisis and
			are repeated until no fecal material is present in the evacuated fluid.
		</div>
	</div>
</Toggle>

<Toggle>
	<div slot="title">Medical therapy</div>
	<div slot="content">
		<div>
			Antibiotics: Oral antibiotics can be administered to alert patients to decrease the number of
			urease-producing bacteria in the GI tract. Antibiotics can also decrease bacterial deamination
			of amino acids and reduce bacterial production of aromatic amino acids, mercaptans, and false
			neurotransmitters. Metronidazole (7.5 mg/kg PO q 12 hrs) and amoxicillin (12.5-25 mg/kg PO q
			8-12 hrs) are frequently given. Metronidazole is metabolized by the liver and can potentially
			cause clinical signs that mimic HE, although this adverse effect is less common at lower
			doses. Neomycin was once used but is no longer recommended as it can be absorbed systemically
			and cause nephrotoxicity.
		</div>
		<div>
			Laxatives:<span class="font-bold"> Lactulose</span> is a nonabsorbable, oral disaccharide that
			is the treatment of choice for HE associated with chronic liver disease. It is broken down by
			colonic bacteria into short chain fatty acids, which lowers colonic pH. The lower pH traps
			soluble NH3 (ammonia) as NH4+ (ammonium ion). Because ammonium is a less diffusible molecule
			than ammonia, it remains in the colon and is excreted in the feces. Lactulose also decreases
			stool transit time and reduces production of ammonia by bacteria.<span class="font-bold">
				Dosage varies from 0.5-5 mL/kg PO q 8 hrs</span
			>. Adjust the dose to result in the passage of 2-3 soft stools daily. Lactulose can also be
			given rectally (20 mL/kg of a 30:70 lactulose:water mixture up to q 6 hrs).
		</div>
	</div></Toggle
>
<Toggle>
	<div slot="title">Physical Examination Findings/History</div>
	<div slot="content">
		Findings related to HE can be vague or specific. Eating may precipitate clinical signs. The most
		common findings include obtundation, abnormal behavior, ataxia, seizures, and ptyalism.
		Vocalization, decreased proprioception, circling, deafness, cortical blindness, muscle tremors,
		head pressing, and weakness may also be noted. Typically, encephalopathic signs wax and wane or
		recur periodically, then progress over time (especially in cases of chronic liver disease).
		Patients with HE may also demonstrate clinical findings reflective of the underlying liver
		disease, such as weight loss, depression, anorexia, dehydration, polyuria, polydipsia, vomiting,
		diarrhea, icterus, abdominal distension from ascites, and ptyalism.
	</div>
</Toggle>

<Toggle>
	<div slot="title">Investigation</div>
	<div slot="content">
		<div>
			Complete Blood Count (CBC): CBC abnormalities may include microcytosis, anemia, and changes in
			red blood cell morphology (e.g. target cells, acanthocytes, poikilocytes).
		</div>
		<div>
			Biochemistry Profile: Changes reflect underlying liver insufficiency or disease. ALT, AST,
			GGT, and ALP may be increased but enzyme levels can also be normal. Other possible
			abnormalities include hyperbilirubinemia, azotemia, hypoalbuminemia, hypoglycemia,
			hypocholesterolemia, hypoglobulinemia, hypokalemia, hyponatremia, and low BUN.
		</div>
		<div>
			Urinalysis: Ammonium urate crystals may be seen on sediment evaluation. Other abnormalities
			may include low specific gravity, hematuria, proteinuria, pyuria, and bilirubinuria.
		</div>
		<div>
			Bile Acid Assays: Fasting and post-prandial bile acid levels are usually elevated in cases of
			hepatic insufficiency and toxicosis.
		</div>
		<div>
			Coagulation Tests: Prolonged prothrombin (PT) and partial thromboplastin (PTT) times can occur
			with severe hepatic dysfunction.
		</div>
		<div>
			Ammonia Measurement: Serum/plasma ammonia may be elevated; however, marked signs of HE can be
			present even with normal blood ammonia levels. In one study of 118 dogs with HE, severity did
			not significantly correlate with plasma ammonia concentrations.12 Note that appropriate sample
			handing is critical when measuring plasma ammonia, as it is a labile substance. In-house, dry
			chemistry analyzers or point-of-care ammonia analyzers can be used. In one study, the latter
			was found to be suitable for dogs and cats, while the former reliably agreed with reference
			lab analyzers only at higher ammonia levels.
		</div>
		<div>Manganese Measurement: Concentration of manganese in whole blood may be increased.</div>
		<div>
			Radiography: Patients with PSS may have microhepatica. Other notable abnormalities include
			hepatomegaly, splenomegaly, mass effects, and biliary tract mineralization.
		</div>
		<div>
			Ultrasonography: Depending upon the expertise of the ultrasonographer, large PSS or
			arteriovenous fistulae may be detected occasionally. Other findings may include hepatomegaly,
			hepatic or biliary mass(es), ascites, mesenteric lymphadenopathy, splenomegaly, and
			mineralization of the biliary tract. The liver may contain hypo- or hyperechoic lesions, or it
			may have a mixed echogenicity pattern, depending upon the underlying pathology.
			Transcranial Doppler ultrasonography may be useful for monitoring the status of intracranial
			hypertension.
		</div>
	</div>
</Toggle>
<div>
	Source: Hepatic encephalopathy- VINcyclopedia Linda Shell DVM, DACVIM (Neurology) and Mark Rishniw
	BVSc, DACVIM (SAIM & Cardiology)
</div>
