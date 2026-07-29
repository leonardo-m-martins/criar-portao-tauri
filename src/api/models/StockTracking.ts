/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for StockItemTracking model.
 */
export type StockTracking = {
    readonly pk: number;
    item?: number | null;
    readonly part?: number | null;
    readonly date: string;
    readonly deltas: any;
    readonly label: string;
    /**
     * Entry notes
     */
    notes?: string | null;
    readonly tracking_type: number;
    readonly user?: number | null;
};

