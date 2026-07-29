/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SerializedStockEnum } from './SerializedStockEnum';
import type { StockSortByEnum } from './StockSortByEnum';
/**
 * DRF serializer for auto-allocating stock items against a SalesOrder.
 */
export type SalesOrderAutoAllocation = {
    /**
     * Stock location where items are sourced (leave blank to use any location)
     */
    location?: number | null;
    /**
     * Exclude stock items from this location
     */
    exclude_location?: number | null;
    /**
     * Assign allocations to this shipment
     */
    shipment?: number | null;
    /**
     * Allow stock to be taken from multiple locations to fulfil a single line item
     */
    interchangeable?: boolean;
    /**
     * Preferred order in which matching stock items are consumed
     *
     * * `updated` - Oldest stock first (FIFO)
     * * `-updated` - Newest stock first (LIFO)
     * * `quantity` - Smallest quantity first
     * * `-quantity` - Largest quantity first
     * * `expiry_date` - Soonest expiry date first
     */
    stock_sort_by?: StockSortByEnum;
    /**
     * Control whether serialized stock items are included in auto-allocation
     *
     * * `any` - Allow any stock (serialized or unserialized)
     * * `serialized` - Serialized stock only
     * * `unserialized` - Unserialized stock only
     */
    serialized_stock?: SerializedStockEnum;
    /**
     * Limit allocation to these line items (leave blank to allocate all lines)
     */
    line_items?: Array<number>;
};

