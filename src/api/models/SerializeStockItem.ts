/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A DRF serializer for "serializing" a StockItem.
 *
 * (Sorry for the confusing naming...)
 *
 * Here, "serializing" means splitting out a single StockItem,
 * into multiple single-quantity items with an assigned serial number
 *
 * Note: The base StockItem object is provided to the serializer context
 */
export type SerializeStockItem = {
    /**
     * Enter number of stock items to serialize
     */
    quantity: number;
    /**
     * Enter serial numbers for new items
     */
    serial_numbers: string;
    /**
     * Destination stock location
     */
    destination: number;
    /**
     * Optional note field
     */
    notes?: string;
};

