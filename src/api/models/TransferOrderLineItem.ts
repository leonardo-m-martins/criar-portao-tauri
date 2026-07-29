/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectCode } from './ProjectCode';
/**
 * Serializer for a TransferOrderLineItem object.
 */
export type TransferOrderLineItem = {
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
     * Transfer Order
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
    readonly allocated: number;
    readonly overdue?: boolean | null;
    /**
     * Part
     */
    part?: number | null;
    readonly transferred: number;
    readonly available_stock: number;
    readonly available_variant_stock: number;
    readonly building: number;
    readonly on_order: number;
};

