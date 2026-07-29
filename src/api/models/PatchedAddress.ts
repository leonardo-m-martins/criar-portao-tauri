/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the Address Model.
 */
export type PatchedAddress = {
    readonly pk?: number;
    /**
     * Select company
     */
    company?: number;
    /**
     * Title describing the address entry
     */
    title?: string;
    /**
     * Set as primary address
     */
    primary?: boolean;
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
    /**
     * Link to address information (external)
     */
    link?: string;
};

