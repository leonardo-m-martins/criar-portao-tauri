/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for installing a stock item into a given part.
 */
export type InstallStockItem = {
    /**
     * Select stock item to install
     */
    stock_item: number;
    /**
     * Enter the quantity of items to install
     */
    quantity?: number;
    /**
     * Add transaction note (optional)
     */
    note?: string;
};

