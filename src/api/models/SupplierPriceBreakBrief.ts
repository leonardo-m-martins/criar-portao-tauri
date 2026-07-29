/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Brief serializer for SupplierPriceBreak object.
 *
 * Used to provide a list of price breaks against the SupplierPart object.
 */
export type SupplierPriceBreakBrief = {
    readonly pk: number;
    part: number;
    quantity: number;
    price: string | null;
    /**
     * Select currency from available options
     */
    price_currency?: string;
    readonly supplier: number;
    /**
     * Timestamp of last update
     */
    readonly updated?: string | null;
};

