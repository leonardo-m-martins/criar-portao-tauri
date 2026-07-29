/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Build } from './Build';
import type { LocationBrief } from './LocationBrief';
import type { ProjectCode } from './ProjectCode';
/**
 * Serializer class for the PurchaseOrderLineItem model.
 */
export type PurchaseOrderLineItem = {
    readonly pk: number;
    /**
     * Line number for this item (optional)
     */
    line?: string;
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
    order: number;
    /**
     * Select project code for this order
     */
    project_code?: number | null;
    quantity: number;
    /**
     * Line item reference
     */
    reference?: string;
    target_date?: string | null;
    readonly project_code_label?: string | null;
    readonly project_code_detail?: ProjectCode | null;
    part: number | null;
    /**
     * External Build Order to be fulfilled by this line item
     */
    build_order?: number | null;
    readonly overdue?: boolean | null;
    readonly received: number;
    purchase_price?: string | null;
    /**
     * Purchase price currency
     */
    purchase_price_currency?: string;
    /**
     * Automatically calculate purchase price based on supplier part data
     */
    auto_pricing?: boolean;
    /**
     * Destination for received items
     */
    destination?: number | null;
    readonly total_price: number;
    /**
     * Merge items with the same part, destination and target date into one line item
     */
    merge_items?: boolean;
    readonly sku?: string | null;
    readonly mpn?: string | null;
    readonly ipn?: string | null;
    readonly internal_part: number;
    readonly internal_part_name: string;
    readonly build_order_detail?: Build | null;
    readonly destination_detail?: LocationBrief | null;
};

