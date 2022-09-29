import { writable } from 'svelte/store';

const formValues = writable({});

const maintRates = (maintRate, weight) => {
	return maintRate * weight;
};

const deficit = (weight, dehydrationPercentage) => {
	if (weight && dehydrationPercentage) {
		return weight * 1000 * (dehydrationPercentage / 100);
	}
};

const maintenance = (weight, species) => {
	let factor;
	if (species === 'dog') {
		factor = 132;
	} else {
		factor = 80;
	}
	return (weight ** 0.75 * factor) / 24;
};

const totalFluids = (
	rateType,
	maintRatesCalculation,
	maintenanceCalculatiom,
	deficit,
	hours,
	ongoing,
	shock
) => {
	let baseCalculation;

	if (rateType === 'personalRate') {
		baseCalculation = maintRatesCalculation;
	} else {
		baseCalculation = maintenanceCalculatiom;
	}

	let total = (baseCalculation + deficit / hours) * hours;
	if (ongoing && shock) {
		total += ongoing;
		total -= shock;
	} else if (shock) {
		total -= shock;
	} else if (ongoing) {
		total += ongoing;
	}

	return Math.round(total);
};

const totalFluidsPerHr = (
	rateType,
	maintRatesCalculation,
	maintenanceCalculatiom,
	deficit,
	hours,
	ongoing,
	shock
) => {
	console.log(maintRatesCalculation);
	let baseCalculation;

	if (rateType === 'personalRate') {
		baseCalculation = maintRatesCalculation;
	} else {
		baseCalculation = maintenanceCalculatiom;
	}

	let total = baseCalculation * hours + deficit;
	if (ongoing && shock) {
		total += ongoing;
		total -= shock;
	} else if (shock) {
		total -= shock;
	} else if (ongoing) {
		total += ongoing;
	}

	return Math.round(total / hours);
};

const shock = (weight, species) => {
	let dose;
	if (species === 'dog') {
		dose = 90;
	} else {
		dose = 30;
	}
	return weight * dose;
};
export { formValues, maintRates, deficit, maintenance, totalFluids, totalFluidsPerHr, shock };
