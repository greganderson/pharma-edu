export const deaSchedule = [
    "Legend", "Schedule II", "Schedule III", "Schedule IV", "Schedule V"
];


export interface RxItem {
    id: number,
    name: string,
    strength: string,
    ndc: string,
    expiration: string,
    lot_number: string,
    dea_schedule: string,
    dosage_form: string,
};

export type RxItemBasics = {
    id: number,
    name: string,
    strength: string,
    dosage_form: string
};