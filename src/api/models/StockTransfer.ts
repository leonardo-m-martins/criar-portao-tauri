/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StockAdjustmentItem } from './StockAdjustmentItem';
/**
 * Serializer for transferring (moving) stock item(s).
 */
export type StockTransfer = {
    items: Array<StockAdjustmentItem>;
    /**
     * Stock transaction notes
     */
    notes?: string;
    /**
     * Destination stock location
     */
    location: number;
};

