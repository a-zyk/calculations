const middleSection = (dose1, dose2, concentration, weight) => {
  if (dose1 && dose2) {
    return `${concentration}mg/ml), ${doseConcentration(dose1, weight, concentration)} - ${doseConcentration(dose2, weight, concentration)}`
  } else {
    return `${concentration}mg/ml), ${doseConcentration(dose1, weight, concentration)}`
  }
}

const doseConcentration = (dose, weight, concentration) => {
  return ((dose * weight) / concentration).toFixed(2)
}

const getDrugDose = (molecule, dose1, dose2, concentration, weight, index, text) => {
  return `
  ${molecule}(
  ${middleSection(dose1, dose2, concentration, weight)}
  ${index}.
  ${text}
  `
}

export default getDrugDose
