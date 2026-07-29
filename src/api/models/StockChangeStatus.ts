/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for changing status of multiple StockItem objects.
 */
export type StockChangeStatus = {
    /**
     * Select stock items to change status
     */
    items: Array<number>;
    /**
     * Stock item status code
     */
    status?: number;
    /**
     * Add transaction note (optional)
     */
    note?: string;
};

