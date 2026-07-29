/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for Address Model (limited).
 */
export type AddressBrief = {
    readonly pk: number;
    /**
     * Address line 1
     */
    line1?: string;
    /**
     * Address line 2
     */
    line2?: string;
    /**
     * Postal code
     */
    postal_code?: string;
    /**
     * Postal code city/region
     */
    postal_city?: string;
    /**
     * State or province
     */
    province?: string;
    /**
     * Address country
     */
    country?: string;
    /**
     * Notes for shipping courier
     */
    shipping_notes?: string;
    /**
     * Shipping notes for internal use
     */
    internal_shipping_notes?: string;
};

