/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PurchaseOrderLineItemReceive } from './PurchaseOrderLineItemReceive';
/**
 * Serializer for receiving items against a PurchaseOrder.
 */
export type PurchaseOrderReceive = {
    items: Array<PurchaseOrderLineItemReceive>;
    /**
     * Select destination location for received items
     */
    location?: number | null;
};

