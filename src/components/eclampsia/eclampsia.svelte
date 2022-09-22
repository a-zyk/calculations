<script>
	import { formValues } from '../../stores/calculations';
	import DrugCalc from '../drugdose.svelte';
	import Toggle from '../Toggle.svelte';
</script>

		<Toggle>
			<div slot="title">Physical Examination Findings/History</div>
			<div slot="content">
				Eclampsia most commonly occurs during the <span class="font-bold">
					first 4 weeks postpartum
				</span>
				but can also occur in the last few weeks of gestation. History may reveal impending or recent
				parturition or lactation; behavioral changes followed by panting and restlessness; and tremors,
				seizures, and/or tetany. Supplementation of calcium during gestation or feeding a homemade diet
				may also have occurred. Clinical abnormalities depend on severity of hypocalcemia.
				<span class="font-bold">
					Mild cases may exhibit tachypnea, tachycardia, mild muscle tremors, and hyperthermia. More
					severe cases may have tetany, seizures, coma, and death.
				</span>
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Emergency therapy</div>
			<div slot="content">
				<span class="font-bold"> Immediately administer 1-20 mL calcium gluconate 10% IV </span>
				over 15-30 minutes (i.e.
				<span class="font-bold">usually 0.5-1.5 mL/kg</span>
				) to effect. Monitor electrocardiogram for bradycardia and arrhythmias (e.g. premature ventricular
				contractions, shortened QT intervals) during the infusion and discontinue if noted. Once neurologic
				signs improve, infuse an equal volume of calcium gluconate 10% diluted 50% with saline SC q 6-8
				hrs until patient is stable enough for oral therapy.
				<div>
					Additional therapy for seizures and tremors (e.g. diazepam, barbiturates) may be needed.
					Control cerebral edema (i.e. secondary to severe seizures) with mannitol. <span
						class="font-bold"
					>
						Address and control concurrent hypoglycemia, hypomagnesemia, and hyperthermia.
					</span> Avoid corticosteroids as they encourage calciuria.
				</div>
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Additional care</div>
			<div slot="content">
				Wean puppies if they are old enough to eat on their own or supplement them with milk
				replacer to reduce lactational demands on the bitch. If the bitch develops severe eclampsia
				or has recurrent episodes, the puppies can be removed from the mother and hand reared.
				Bitches may have recurrent episodes of clinical hypocalcemia during lactation. In one study,
				3/31 dogs with eclampsia had recurrent hypocalcemia 1-3 weeks after the initial episode.
				Caution owners to watch for early signs of hypocalcemia and seek treatment before the
				condition worsens. Weigh puppies daily to ensure adequate nutritional intake. Normal daily
				rate of gain is at least 5% of their birth weight. Monitor bitches that are abruptly weaned
				closely for development of mastitis.
			</div>
		</Toggle>
		
<div>Source: Eclampsia- VINcyclopedia (Associate) - Canine, November 2020. Kari Rothrock, Jacqueline Brister</div>