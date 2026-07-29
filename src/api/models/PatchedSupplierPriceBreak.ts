/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBrief } from './CompanyBrief';
import type { SupplierPart } from './SupplierPart';
/**
 * Serializer for SupplierPriceBreak object.
 *
 * Note that this inherits from the SupplierPriceBreakBriefSerializer,
 * and does so to prevent circular serializer import issues.
 */
export type PatchedSupplierPriceBreak = {
    readonly pk?: number;
    part?: number;
    quantity?: number;
    price?: string | null;
    /**
     * Select currency from available options
     */
    price_currency?: string;
    readonly supplier?: number;
    /**
     * Timestamp of last update
     */
    readonly updated?: string | null;
    readonly supplier_detail?: CompanyBrief | null;
    readonly part_detail?: SupplierPart | null;
};

