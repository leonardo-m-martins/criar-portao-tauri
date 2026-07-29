/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StockAdjustmentItem } from './StockAdjustmentItem';
/**
 * Serializer for adding stock to stock item(s).
 */
export type StockAdd = {
    items: Array<StockAdjustmentItem>;
    /**
     * Stock transaction notes
     */
    notes?: string;
};

