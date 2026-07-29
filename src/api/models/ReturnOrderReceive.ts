/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReturnOrderLineItemReceive } from './ReturnOrderLineItemReceive';
/**
 * Serializer for receiving items against a ReturnOrder.
 */
export type ReturnOrderReceive = {
    items: Array<ReturnOrderLineItemReceive>;
    /**
     * Select destination location for received items
     */
    location: number;
    /**
     * Additional note for incoming stock items
     */
    note?: string;
};

