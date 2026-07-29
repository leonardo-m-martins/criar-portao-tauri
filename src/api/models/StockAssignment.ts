/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StockAssignmentItem } from './StockAssignmentItem';
/**
 * Serializer for assigning one (or more) stock items to a customer.
 *
 * This is a manual assignment process, separate for (for example) a Sales Order
 */
export type StockAssignment = {
    items: Array<StockAssignmentItem>;
    /**
     * Customer to assign stock items
     */
    customer: number;
    /**
     * Stock assignment notes
     */
    notes?: string;
};

