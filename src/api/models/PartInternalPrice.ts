/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for internal prices for Part model.
 */
export type PartInternalPrice = {
    readonly pk: number;
    part: number;
    quantity: number;
    price?: string | null;
    /**
     * Purchase currency of this stock item
     */
    price_currency?: string;
};

