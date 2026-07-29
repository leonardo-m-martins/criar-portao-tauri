/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A serializer for receiving a single purchase order line item against a purchase order.
 */
export type PurchaseOrderLineItemReceive = {
    line_item: number;
    /**
     * Select destination location for received items
     */
    location?: number | null;
    quantity: string;
    /**
     * Enter batch code for incoming stock items
     */
    batch_code?: string;
    /**
     * Enter expiry date for incoming stock items
     */
    expiry_date?: string | null;
    /**
     * Enter serial numbers for incoming stock items
     */
    serial_numbers?: string;
    /**
     * Stock item status code
     */
    status?: number;
    /**
     * Override packaging information for incoming stock items
     */
    packaging?: string;
    /**
     * Additional note for incoming stock items
     */
    note?: string;
    /**
     * Scanned barcode
     */
    barcode?: string | null;
};

