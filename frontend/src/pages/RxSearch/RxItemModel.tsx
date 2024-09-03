export const deaSchedule = [
    "Legend", "Schedule II", "Schedule III", "Schedule IV", "Schedule V"
];


export interface RxItem {
    name: string,
    strength: string,
    ndc: string
    expiration: string,
    lot_number: string,
    dosage_form: string,
    dea_schedule: string,
};

export type RxItemBasics = {
    id: number,
    name: string,
    strength: string,
    dosage_form: string
};