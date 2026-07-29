/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializr for allocating stock items to a sales order.
 *
 * The scanned barcode must map to a StockItem object
 */
export type BarcodeSOAllocate = {
    /**
     * Scanned barcode data
     */
    barcode: string;
    /**
     * Sales Order to allocate items against
     */
    sales_order: number;
    /**
     * Sales order line item to allocate items against
     */
    line?: number | null;
    /**
     * Sales order shipment to allocate items against
     */
    shipment?: number | null;
    /**
     * Quantity to allocate
     */
    quantity?: number;
};

