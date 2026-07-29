/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer class for linking a barcode to an internal model.
 */
export type BarcodeAssign = {
    /**
     * Scanned barcode data
     */
    barcode: string;
    build?: number | null;
    manufacturerpart?: number | null;
    supplierpart?: number | null;
    purchaseorder?: number | null;
    returnorder?: number | null;
    salesorder?: number | null;
    salesordershipment?: number | null;
    transferorder?: number | null;
    part?: number | null;
    stockitem?: number | null;
    stocklocation?: number | null;
};

