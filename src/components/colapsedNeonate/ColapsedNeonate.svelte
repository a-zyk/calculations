<script>
	import { formValues } from '../../stores/calculations';
	import Anaphylaxis from '../anaphylaxis/Anaphylaxis.svelte';
	import DrugCalc from '../drugdose.svelte';
	import Toggle from '../Toggle.svelte';
</script>


		<Toggle autoclosable="true">
			<div slot="title">Failure to nurse during first 24 hrs</div>
			<div slot="content">
				<span class="font-bold">Failure of passive transfer of maternal antibodies</span> can be presumed if a puppy has <span class="font-bold">not nursed</span>
				within the <span class="font-bold">first 12-16 hours of life</span>. Absorption of maternally-derived antibodies declines
				at 6 hours after birth and is <span class="font-bold">no longer possible after 24 hours</span>. Administration of canine
				serum to puppies less than 24 hours old can help correct IgG deficiency. Ensure serum donors
				are healthy and vaccinated. Harvest serum from whole blood and either administer immediately
				or store in the refrigerator (i.e. up to 3 days) or freezer (i.e. up to 1 year). Commonly
				reported dosage is 22 mL/kg of pooled adult serum, given subcutaneously over several small
				doses.
			</div>
		</Toggle>

		<Toggle autoclosable="true">
			<div slot="title">Maintaining warmth</div>
			<div slot="content">
				Warm puppies to 36-37ºC over 1-4 hours. Avoid warming too quickly as puppies can lose
				excessive amounts of water from evaporation via peripheral vasodilatation.1 Warming can be
				done via water bottles, incubators, heating lamps, or air warming systems. Avoid electric
				heating pads and blankets because they can burn neonatal skin. Provide neonates with a place
				to move away from the heating source if they get too warm. Turn puppies every 10-20 minutes
				if they cannot move on their own.1 Recommended ambient temperature for orphan puppies is
				29-35ºC, with humidity between 55-65%. If the bitch is present and caring for the puppies,
				the ambient temperature can be decreased to 21-24ºC as the bitch herself provides the heat
				source and high ambient temperatures may discourage her from staying with the puppies.
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Fluid therapy</div>
			<div slot="content">
				Correct dehydration via subcutaneous, intravenous, or intraosseous fluid therapy. Warm water
				can be administered via stomach tube for less compromised neonates. Warmed lactated Ringer’s
				solution is a reasonable first selection. Dextrose may be added if needed, to make a 2.5-5%
				dextrose solution. Avoid administering dextrose-containing fluids subcutaneously. Administer
				fluids in 30 mL/kg boluses over 10 minutes for patients in hypovolemic shock. After
				restoring perfusion, fluid amounts to be administered include maintenance fluid requirements
				plus ongoing losses. Remember that neonates have higher daily fluid requirements (120-220
				mL/kg) than adults. Most textbooks recommend a maintenance fluid rate of 120-180 mL/kg daily
				for neonates. In the neonatal puppy, IV catheters (i.e. 22-24 gauge) may be placed in
				peripheral or central veins. Intraosseous catheters are typically placed at the tibial
				tuberosity, proximomedial tibia, trochanteric fossa of the femur, or greater tubercle of the
				humerus. Things to consider for IV fluid therapy in neonate and pediatric patients - rapid
				administration may increase the risk of intracranial hemorrhage. Lactate found in LRS may be
				used for energy during hypoglycemia. An initial fluid bolus may be calculated at 30–40 mg/kg
				while maintenance may be calculated at 80–100 ml/kg/day. Assessment of fluid therapy is
				challenging as the urine specific gravity is unreliable as is skin turgor and mucous
				membrane moistness. The most accurate method is to weigh the neonate every 6–8 hours using a
				gram scale. Pediatric patients are more closely modeled to adult fluid therapy with a
				maintenance rate being calculated at 60–65 ml/kg/day. These patients should ideally be
				weighed every 8–12 hours. Skin turgor, mucous membranes and urine specific gravity are more
				reliable indicators of hydration in this age group.
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Correcting hypoglycemia</div>
			<div slot="content">
				Puppies require 2-3 times the glucose/kg needed by adult dogs.Glucose concentrations can be evaluated using a glucose reagent
				stick, or by using a glucometer with values of less than 1.6–2.2 mmol/L indicating
				hypoglycaemia and slow intravenous dextrose or glucose administration being required.<span class="font-bold"> IV
				dextrose boluses- 
                    0.5–1.5 mL/kg IV of 50% dextrose diluted 1:1–1:2, or 2–4 mL/kg of a 10%
                    dextrose solution
                </span>are preferred over oral dextrose administration. Isotonic fluids
				supplemented with 2.5%–5% dextrose as a constant rate infusion (CRI) can also be used;
				however, caution should be used to prevent over-supplementation, as prolonged hyperglycaemia
				can result in worsening dehydration via osmotic diuresis.
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Nutritional support</div>
			<div slot="content">
				Providing adequate nutrition is essential for the survival of sick puppies. Daily energy
				requirements for neonatal puppies from birth to weaning is approximately 200-250 kcal/kg of
				body weight. Do not feed a cold neonate because of the risk for ileus. Food may curdle in
				the stomach and cause bloating. If nursing cannot be established, feed neonates warmed puppy
				milk replacer through a bottle or via tube feeding. Puppy milk replacement formulas
				typically contain 1 kcal/mL (i.e. as fed). General recommendations for caloric intake for
				the first 3 days is 15 kcal ME per 100 g of body weight. For days 4-6, provide 20 kcal ME
				per 100 g of body weight, and from day 7 feed 20-25 kcal ME per 100 g of body weight.
				Neonatal stomach capacity is approximately 50 mL/kg. Overfeeding can lead to regurgitation
				and vomiting. Feed neonates q 2-3 hrs. Puppies that are 3 weeks of age can start to lap
				liquids on their own, and puppies >4 weeks can be fed soft foods (i.e. consistency of
				oatmeal). Feed bitches a high-quality food formulated to support the specific needs of
				pregnancy and lactation. Hypogalactia can be managed with domperidone (i.e. a prolactin
				agonist) 2.2 mg/kg PO BID x 5-7 days.
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Respiratory support</div>
			<div slot="content">
				Oxygen therapy may be needed because of the neonate’s immature respiratory system and
				impaired hemoglobin function. Oxygen can be administered via intranasal tube, oxygen cage,
				or incubator.
			</div>
		</Toggle>

		<Toggle>
			<div slot="title">Antimicrobial Therapy</div>
			<div slot="content">
				If bacterial infection is suspected, broad-spectrum, bactericidal
				antibiotics are indicated. Amoxicillin, cephalosporins, and amoxicillin-clavulanic acid are
				good first choices. Avoid aminoglycosides, tetracyclines, and fluoroquinolones because of
				their higher incidence of side effects in neonates. Pharmacokinetics of antibiotics in
				puppies are poorly understood, so it is recommended the adult dose be reduced by 50% in
				puppies with septicemia. Deworm puppies q 2 weeks after birth, up to 8-12 weeks of age.
			</div>
		</Toggle>

		<div>Source: Fading puppy syndrome- VINcyclopedia (Associate) - Canine, March 2021. Kari Rothrock</div>
