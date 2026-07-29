/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for a single StockItem within a stock adjustment request.
 *
 * Required Fields:
 * - item: StockItem object
 * - quantity: Numerical quantity
 *
 * Optional Fields (may be used by external tools)
 * - status: Change StockItem status code
 * - packaging: Change StockItem packaging
 * - batch: Change StockItem batch code
 *
 * The optional fields can be used to adjust values for individual stock items
 */
export type StockAdjustmentItem = {
    /**
     * StockItem primary key value
     */
    pk: number;
    quantity: string;
    /**
     * Batch code for this stock item
     */
    batch?: string;
    /**
     * Stock item status code
     */
    status?: number;
    /**
     * Packaging this stock item is stored in
     */
    packaging?: string;
};

