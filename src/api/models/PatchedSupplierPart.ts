/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBrief } from './CompanyBrief';
import type { ManufacturerPart } from './ManufacturerPart';
import type { Parameter } from './Parameter';
import type { PartBrief } from './PartBrief';
import type { SupplierPriceBreakBrief } from './SupplierPriceBreakBrief';
/**
 * Serializer for SupplierPart object.
 */
export type PatchedSupplierPart = {
    available?: number;
    /**
     * Date of last update of availability data
     */
    readonly availability_updated?: string | null;
    /**
     * Supplier part description
     */
    description?: string | null;
    readonly in_stock?: number | null;
    readonly on_order?: number | null;
    /**
     * URL for external supplier part link
     */
    link?: string | null;
    /**
     * Is this supplier part active?
     */
    active?: boolean;
    /**
     * Is this the primary supplier part for the linked Part?
     */
    primary?: boolean;
    /**
     * Select manufacturer part
     */
    manufacturer_part?: number | null;
    readonly MPN?: string | null;
    /**
     * Notes
     */
    note?: string | null;
    readonly pk?: number;
    /**
     * Unique hash of barcode data
     */
    readonly barcode_hash?: string;
    /**
     * Part packaging
     */
    packaging?: string | null;
    /**
     * Total quantity supplied in a single pack. Leave empty for single items.
     */
    pack_quantity?: string;
    readonly pack_quantity_native?: number;
    /**
     * Select part
     */
    part?: number;
    /**
     * Supplier stock keeping unit
     */
    SKU?: string;
    supplier?: number;
    readonly updated?: string | null;
    /**
     * Markdown notes (optional)
     */
    notes?: string | null;
    tags?: Array<string>;
    readonly part_detail?: PartBrief | null;
    readonly pretty_name?: string | null;
    readonly manufacturer_part_detail?: ManufacturerPart | null;
    readonly price_breaks?: Array<SupplierPriceBreakBrief> | null;
    readonly supplier_detail?: CompanyBrief | null;
    readonly manufacturer_detail?: CompanyBrief | null;
    readonly parameters?: Array<Parameter> | null;
};

