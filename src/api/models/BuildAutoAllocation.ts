/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemTypeEnum } from './ItemTypeEnum';
import type { StockSortByEnum } from './StockSortByEnum';
/**
 * DRF serializer for auto allocating stock items against a build order.
 */
export type BuildAutoAllocation = {
    /**
     * Stock location where parts are to be sourced (leave blank to take from any location)
     */
    location?: number | null;
    /**
     * Exclude stock items from this selected location
     */
    exclude_location?: number | null;
    /**
     * Stock items in multiple locations can be used interchangeably
     */
    interchangeable?: boolean;
    /**
     * Allow allocation of substitute parts
     */
    substitutes?: boolean;
    /**
     * Allocate optional BOM items to build order
     */
    optional_items?: boolean;
    /**
     * Select item type to auto-allocate
     *
     * * `all` - All Items
     * * `untracked` - Untracked Items
     * * `tracked` - Tracked Items
     */
    item_type?: ItemTypeEnum;
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
     * Limit allocation to these build lines (leave blank to allocate all lines)
     */
    build_lines?: Array<number>;
};

