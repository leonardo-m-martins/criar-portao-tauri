/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for allocating items against a purchase order.
 *
 * The scanned barcode could be a Part, ManufacturerPart or SupplierPart object
 */
export type BarcodePOAllocate = {
    /**
     * Scanned barcode data
     */
    barcode: string;
    /**
     * Purchase Order to allocate items against
     */
    purchase_order: number;
};

