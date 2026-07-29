/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StockMergeItem } from './StockMergeItem';
/**
 * Serializer for merging two (or more) stock items together.
 */
export type StockMerge = {
    items: Array<StockMergeItem>;
    /**
     * Destination stock location
     */
    location: number;
    /**
     * Stock merging notes
     */
    notes?: string;
    /**
     * Allow stock items with different supplier parts to be merged
     */
    allow_mismatched_suppliers?: boolean;
    /**
     * Allow stock items with different status codes to be merged
     */
    allow_mismatched_status?: boolean;
};

