/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DRF serializer for allocation of serial numbers against a sales order / shipment.
 */
export type SalesOrderSerialAllocation = {
    line_item: number;
    quantity: number;
    /**
     * Enter serial numbers to allocate
     */
    serial_numbers: string;
    shipment?: number | null;
};

