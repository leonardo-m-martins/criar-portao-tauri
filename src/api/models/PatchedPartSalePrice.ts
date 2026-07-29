/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for sale prices for Part model.
 */
export type PatchedPartSalePrice = {
    readonly pk?: number;
    part?: number;
    quantity?: number;
    price?: string | null;
    /**
     * Purchase currency of this stock item
     */
    price_currency?: string;
};

