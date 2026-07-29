/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StockAdjustmentItem } from './StockAdjustmentItem';
/**
 * Serializer for removing stock from stock item(s).
 */
export type StockRemove = {
    items: Array<StockAdjustmentItem>;
    /**
     * Stock transaction notes
     */
    notes?: string;
};

