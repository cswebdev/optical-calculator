export type StoreLocation = {
    name: string;
    taxRate: number; // Tax rate as a decimal (e.g., 0.07 for 7%)
};

export const storeLocations: StoreLocation[] = [
    { name: "Anderson", taxRate: 0.07 },
    { name: "Clemson", taxRate: 0.07 },
    { name: "Clinton", taxRate: 0.08 }, 
    { name: "Easley", taxRate: 0.07 },
    { name: "Greenville", taxRate: 0.06 },
    { name: "Seneca", taxRate: 0.06},
    { name: "Simpsonville", taxRate: 0.06 },
    // Add more locations as needed
];