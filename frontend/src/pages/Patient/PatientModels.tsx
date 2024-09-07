export type PatientBasics = {
    id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
};

export interface Patient {
    id: number;
    last_name: string;
    first_name: string;
    date_of_birth: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
    phone_number: string;
    allergies: string;
    insurance_name: string;
    insurance_member_id: string;
    insurance_rx_bin: string;
    insurance_rx_pcn: string;
    insurance_group_number: string;
    insurance_person_code: string;
};

export interface PrescriptionHistory {
    rx_number: string;
    rx_item_name: string;
    rx_item_strength: string;
    quantity: number;
    refills: number;
    directions: string;
    prescribed_date: string;
    prescriber_id: number;
    prescriber_first_name: string;
    prescriber_last_name: string;
    prescriber_type: string;
    prescription_status: string;
}

export const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID",
    "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS",
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
    "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
    "WI", "WY"
];

