/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectCode } from './ProjectCode';
import type { PurchaseOrder } from './PurchaseOrder';
/**
 * Serializer for a PurchaseOrderExtraLine object.
 */
export type PatchedPurchaseOrderExtraLine = {
    readonly pk?: number;
    /**
     * Line number for this item (optional)
     */
    line?: string;
    /**
     * Line item description (optional)
     */
    description?: string;
    /**
     * Link to external page
     */
    link?: string;
    /**
     * Line item notes
     */
    notes?: string;
    /**
     * Purchase Order
     */
    order?: number;
    price?: string | null;
    /**
     * Select currency from available options
     */
    price_currency?: string;
    /**
     * Select project code for this order
     */
    project_code?: number | null;
    quantity?: number;
    /**
     * Line item reference
     */
    reference?: string;
    /**
     * Target date for this line item (leave blank to use the target date from the order)
     */
    target_date?: string | null;
    readonly project_code_label?: string | null;
    readonly project_code_detail?: ProjectCode | null;
    readonly order_detail?: PurchaseOrder | null;
};

