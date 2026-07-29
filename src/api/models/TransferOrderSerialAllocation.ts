/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DRF serializer for allocation of serial numbers against a transfer order.
 */
export type TransferOrderSerialAllocation = {
    line_item: number;
    quantity: number;
    /**
     * Enter serial numbers to allocate
     */
    serial_numbers: string;
};

