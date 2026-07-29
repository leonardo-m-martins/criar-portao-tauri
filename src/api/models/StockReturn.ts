/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StockAdjustmentItem } from './StockAdjustmentItem';
/**
 * Serializer class for returning stock item(s) into stock.
 */
export type StockReturn = {
    items: Array<StockAdjustmentItem>;
    /**
     * Stock transaction notes
     */
    notes?: string;
    /**
     * Destination stock location
     */
    location: number;
    /**
     * Merge returned items into existing stock items if possible
     */
    merge?: boolean;
};

