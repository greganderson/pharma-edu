export type PatientBasics = {
    id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
};

export interface Patient {
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
}

export const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID",
    "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS",
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
    "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
    "WI", "WY"
];

