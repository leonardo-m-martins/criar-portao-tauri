/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBrief } from './CompanyBrief';
/**
 * Serializer for ManufacturerPart object.
 */
export type ManufacturerPart = {
    readonly pk: number;
    /**
     * Select part
     */
    part: number;
    manufacturer: number;
    readonly manufacturer_detail?: CompanyBrief | null;
    /**
     * Manufacturer part description
     */
    description?: string | null;
    /**
     * Manufacturer Part Number
     */
    MPN?: string | null;
    /**
     * URL for external manufacturer part link
     */
    link?: string | null;
    /**
     * Unique hash of barcode data
     */
    barcode_hash?: string;
    /**
     * Markdown notes (optional)
     */
    notes?: string | null;
};

