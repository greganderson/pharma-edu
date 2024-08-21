


interface Inputs{
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

const inputs: Inputs[] = [
  {label:"Patient", 
    id:"formPatientProfile", 
    type: "patient", 
    placeholder: "Patient Profile"},
  {
    label: "Doctor", 
    id: "formDoctorProfile",
    type: "doctor",
    placeholder: "Doctor Profile"
  },
  {
    label: "Date of Prescription",
    id: "formDateOfPrescription",
    type: "date",
    placeholder: "Date Prescribed"
  },
  {
    label: "Medication",
    id: "formMedicationProfile",
    type: "medication",
    placeholder: "Medication Profile"
  },

]


export default inputs