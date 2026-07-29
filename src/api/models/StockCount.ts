/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StockAdjustmentItem } from './StockAdjustmentItem';
/**
 * Serializer for counting stock items.
 */
export type StockCount = {
    items: Array<StockAdjustmentItem>;
    /**
     * Stock transaction notes
     */
    notes?: string;
    /**
     * Set stock location for counted items (optional)
     */
    location?: number | null;
};

