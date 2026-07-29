/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OutcomeEnum } from './OutcomeEnum';
import type { ProjectCode } from './ProjectCode';
import type { StockItem } from './StockItem';
/**
 * Serializer for a ReturnOrderLineItem object.
 */
export type ReturnOrderLineItem = {
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
     * Return Order
     */
    order: number;
    /**
     * Select project code for this order
     */
    project_code?: number | null;
    /**
     * Quantity to return
     */
    quantity: number;
    /**
     * Line item reference
     */
    reference?: string;
    target_date?: string | null;
    readonly project_code_label?: string | null;
    readonly project_code_detail?: ProjectCode | null;
    /**
     * Select item to return from customer
     */
    item: number;
    /**
     * The date this return item was received
     */
    received_date?: string | null;
    /**
     * Outcome for this line item
     *
     * * `10` - Pending
     * * `20` - Return
     * * `30` - Repair
     * * `40` - Replace
     * * `50` - Refund
     * * `60` - Reject
     */
    outcome?: OutcomeEnum;
    price?: string | null;
    /**
     * Line price currency
     */
    price_currency?: string;
    readonly item_detail?: StockItem | null;
};

