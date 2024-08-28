export const deaSchedule = [
    "Schedule I", "Schedule II", "Schedule III", "Schedule IV", "Schedule V"
];


export interface RxItem {
    name: string,
    // manufacturer: string,
    strength: string,
    ndc: string
    expiration: string, // Can this be a date?
    lot_number: string,
    dea_schedule: string,
};