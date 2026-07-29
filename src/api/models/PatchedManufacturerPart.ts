/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBrief } from './CompanyBrief';
import type { Parameter } from './Parameter';
import type { PartBrief } from './PartBrief';
/**
 * Serializer for ManufacturerPart object.
 */
export type PatchedManufacturerPart = {
    readonly pk?: number;
    /**
     * Select part
     */
    part?: number;
    manufacturer?: number;
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
    readonly manufacturer_detail?: CompanyBrief | null;
    readonly part_detail?: PartBrief | null;
    tags?: Array<string>;
    readonly pretty_name?: string | null;
    readonly parameters?: Array<Parameter> | null;
};

