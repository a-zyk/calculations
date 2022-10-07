<script>
	import Toggle from '../Toggle.svelte';
</script>


	
		<Toggle>
			<div slot="title">Quick clinical exam</div>
			<div slot="content">
				<div>Quick clinical exam – blood glucose, temperature, i/v access if possible</div>

				<div>If hypoglycaemic address with 50% glucose 1-5mls slow i/v over 10minutes</div>

				<div>
					If toxic exposure from history then the use of intra-lipid emulsion can be considered if
					the toxin is lipophilic eg permthrin, milbemaycin, local anaesthetic toxicities. (see
					permethrin toxicity sheet) and specific anectdotal treatment for that toxin also given.
					Obviously drug choice will also be adjusted if blood work reveals e.g. significant liver
					disease/dysfunction/shunt then phenobarb and diazepam should be avoided.Levatiracetam is
					excreted through the renal system, and patients with kidney disease may not be prime
					candidates for its use
				</div>
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Impending status epilepticus. &#60 5min of continous seizure activity</div>
			<div slot="content">
				<span class="font-bold">Impending status epilepticus (SE)</span>: &#60 5 min of continuous
				seizure activity.Seizures are most likely responsive solely to first-line antiseizure
				therapy.

				<div>
					<span class="font-bold">Diazepam 0.5-1mg/kg i/v or rectally</span>, can repeat q 10mins
					for max of 2-3 doses in total.Repeat diazepam bolus leads to accumulation and high
					concentrations of the drug in the central nervous system (CNS), (CSF), and serum; although
					this may result in prolonged antiseizure activity, it can also cause severe CNS depression
					and cardiorespiratory collapse. Therefore, only 2–3 diazepam boluses should be considered.
				</div>

				<div>
					<span class="font-bold">Midazolam 0.2-0.3mg/kg i/v or rectally</span>.An IV CRI at the
					dose of 0.2–0.5 mg/kg/h might be advised to sustain good seizure control after the
					delivery of the initial MDZ bolus dose. The CRI dose is administered via an infusion pump
					and usually diluted in 0.9% saline or 5% dextrose solution, with the volume used being
					equal to the dog’s hourly maintenance fluid requirements. The dosage rate should be
					reduced by 50% every 6 h for at least two times before discontinuation of the drug.
				</div>
			</div>
		</Toggle>
		<div>
			<Toggle>
				<div slot="title">Established SE. &#60 30min of continous seizure activity</div>
				<div slot="content">
					<div>
						<span class="font-bold">Established SE</span>: Less than 30 min of continuous seizure
						activity. Seizures are still, but likely less, responsive to first-line antiseizure
						therapy. Adjunctive non-anaesthetic (e.g. phenobarbital, levetiracetam) or general
						anaesthetic (e.g. propofol, ketamine, pentobarbital, etomidate, inhalation anaesthetics)
						antiseizure therapy might be needed.
						<span class="font-bold">Phenobarbital loading </span>– The loading dose is given as an
						initial 12 mg/kg slow i.v. and then after 20 minutes, two further doses of 4–6 mg/kg
						slow i.v. 20 minutes apart. Always wait 20 minutes before giving additional doses as CNS
						levels take 20 minutes to respond, and do not administer if the dog is excessively
						sedated or has evidence of respiratory depression. A maximum loading dose 18-24mg/kg,
						care with respiratory depression and excessive sedation.
						<span class="font-bold">If already on phenobarbital</span> Always take a serum sample for
						phenobarbital level determination first, before giving the top-up dose. 4–6 mg/kg i.v. or
						i.m. to increase the blood levels slightly in case these were subtherapeutic.
					</div>

					<div>
						<span class="font-bold">Propofol (NOT Propoflo plus)</span> 4-8mg/kg i/v then CRI 0.1-0.4mg/kg/minute.
						Give to effect to stop seizures and maint a state of heavy sedation to avoid the need for
						intubation/ventilation if possible.
					</div>

					<div>
						<span class="font-bold">Levetericetam</span> – 60mg/kg I/v q 8hrs or 8mg/kg/hr increased
						incrementally to effect if required. Can be given rectally also.
					</div>
				</div>
			</Toggle>

			<Toggle>
				<div slot="title">Refractory SE. &#60 30–60 min of continuous seizure
					activity  </div>
					<div slot="content">
						<span class="font-bold">Refractory SE</span>: less than 30–60 min of continuous seizure
						activity. Seizures are resistant to first-line and non-anaesthetic antiseizure therapy.
						Adjunctive general anaesthetic antiseizure therapy is needed.<b
							>Ketamine 3-5mg/kg IV bolus, followed by CRI 0.2-0.6mg/kg/h</b
						>. Glutamate receptor (NMDA) antagonists (e.g ketamine) may be beneficial particularly in
						refractory stages of SE and they may even help preventing resistance, if administered at
						early stages.
						<a
							class="hover:text-blue-400"
							target="_blank"
							href="https://todaysveterinarypractice.com/neurology/todays-technician-epileptic-emergencies-status-epilepticus-canine-patiens/"
							>Source</a
						>
					</div>
			</Toggle>
			<Toggle>
				<div slot="title">Super-refractory SE: more than 24 h of continuous seizure
					activity</div>
					<div slot="content">	<span class="font-bold">Super-refractory SE</span>: more than 24 h of continuous seizure
						activity or seizure recurrence after initiation of treatment with general anaesthetic
						antiseizure therapy. Seizures are likely resistant to any antiseizure therapy. Might be
						tried: bolus of ketamine (1 mg/kg, IV) over a period of 5 minutes, followed by a bolus of
						dexmedetomidine (3 μg/kg, IV) over the same time period and then followed by a continuous
						infusion for 12 hours of ketamine at a constant rate of 1 mg/kg/h and dexmedetomidine at a
						variable rate of 3-7 μg/kg/h. + controlled hypothermia 36.7 and 37.7°C
						<a
							class="hover:text-blue-400"
							target="_blank"
							href="https://pubmed.ncbi.nlm.nih.gov/32372564/">Source</a
						></div>
			</Toggle>
		
			<div class="text-sm">
				Source: BSAVA drug manual, <a
					class="hover:text-blue-400"
					target="_blank"
					href="https://bmcvetres.biomedcentral.com/articles/10.1186/s12917-021-02805-0"
					>First-line management of canine status epilepticus at home and in hospital-opportunities
					and limitations of the various administration routes of benzodiazepines</a
				>. Doses as per BSAVA manual however, in the paper they are slightly higher.
			</div>
		</div>
	

