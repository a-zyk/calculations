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

const maintenance = (weight) => (weight ** 0.75 * 132) / 24;

const totalFluids = (rateType, maintRatesCalculation, maintenanceCalculatiom, deficit, hours, ongoing) => {
	let baseCalculation

    if (rateType === 'personalRate') {
        baseCalculation = maintRatesCalculation
	} else {
        baseCalculation = maintenanceCalculatiom
	}

    let total = (baseCalculation + deficit / hours) * hours;
    if (ongoing) {
        total += ongoing
    }

    return Math.round(total)
};

    const totalFluidsPerHr = (rateType, maintRatesCalculation, maintenanceCalculatiom, deficit, hours, ongoing) => {
        console.log(maintRatesCalculation)
        let baseCalculation

    if (rateType === 'personalRate') {
        baseCalculation = maintRatesCalculation
	} else {
        baseCalculation = maintenanceCalculatiom
	}

    let total = ((baseCalculation * hours )+ deficit)
    if (ongoing) {
        total += ongoing 
    } else {
        total 
    }


    return Math.round(total/hours)
    } 

export { formValues, maintRates, deficit, maintenance, totalFluids, totalFluidsPerHr};
