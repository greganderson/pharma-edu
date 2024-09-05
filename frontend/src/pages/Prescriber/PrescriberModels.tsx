export const PrescriberType = [
    "MD", "DO", "DPM", "DDS", "DMD", "OD", "PharmD", "DC", "ND", "NMD", "DVM", "PhD"
]

export interface Prescriber {
    id: number;
    last_name: string,
    first_name: string,
    prescriber_type: string,
    facility: string,
    street: string,
    city: string,
    state: string,
    zipcode: string,
    contact_number: string,
    dea: string,
    npi: string
}

export type PrescriberBasics = {
    id: number,
    dea: string,
    first_name: string,
    last_name: string
    prescriber_type: string
};

export const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID",
    "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS",
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
    "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
    "WI", "WY"
];