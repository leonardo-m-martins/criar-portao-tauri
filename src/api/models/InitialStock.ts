/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for creating initial stock quantity.
 */
export type InitialStock = {
    /**
     * Specify initial stock quantity for this Part. If quantity is zero, no stock is added.
     */
    quantity: string;
    /**
     * Specify initial stock location for this Part
     */
    location?: number | null;
};

