/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for receiving items against a purchase order.
 *
 * The following additional fields may be specified:
 *
 * - purchase_order: PurchaseOrder object to receive items against
 * - location: Location to receive items into
 */
export type BarcodePOReceive = {
    /**
     * Scanned barcode data
     */
    barcode: string;
    /**
     * Supplier to receive items from
     */
    supplier?: number | null;
    /**
     * PurchaseOrder to receive items against
     */
    purchase_order?: number | null;
    /**
     * Location to receive items into
     */
    location?: number | null;
    /**
     * Purchase order line item to receive items against
     */
    line_item?: number | null;
    /**
     * Automatically allocate stock items to the purchase order
     */
    auto_allocate?: boolean;
};

