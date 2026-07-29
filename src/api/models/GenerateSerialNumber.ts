/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for generating one or multiple serial numbers.
 *
 * Any of the provided write-only fields can be used for additional context.
 *
 * Note that in the case where multiple serial numbers are required,
 * the "serial_number" field will return a string with multiple serial numbers
 * separated by a comma.
 */
export type GenerateSerialNumber = {
    /**
     * Generated serial number
     */
    readonly serial_number?: string | null;
    /**
     * Select part to generate serial number for
     */
    part?: number | null;
    /**
     * Quantity of serial numbers to generate
     */
    quantity?: number;
};

