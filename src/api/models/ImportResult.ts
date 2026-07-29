/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImportParameter } from './ImportParameter';
import type { Part } from './Part';
/**
 * Serializer for the import result.
 */
export type ImportResult = {
    part_id: number;
    part_detail: Part;
    manufacturer_part_id: number;
    supplier_part_id: number;
    /**
     * Return the pricing data as a dictionary.
     */
    readonly pricing: Array<Array<number>>;
    parameters: Array<ImportParameter>;
};

