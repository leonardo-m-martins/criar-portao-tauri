/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for adding initial supplier / manufacturer information.
 */
export type InitialSupplier = {
    /**
     * Select supplier (or leave blank to skip)
     */
    supplier?: number | null;
    /**
     * Supplier stock keeping unit
     */
    sku?: string;
    /**
     * Select manufacturer (or leave blank to skip)
     */
    manufacturer?: number | null;
    /**
     * Manufacturer part number
     */
    mpn?: string;
};

