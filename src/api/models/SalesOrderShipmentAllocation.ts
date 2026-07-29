/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SalesOrderShipmentAllocationItem } from './SalesOrderShipmentAllocationItem';
/**
 * DRF serializer for allocation of stock items against a sales order / shipment.
 */
export type SalesOrderShipmentAllocation = {
    items: Array<SalesOrderShipmentAllocationItem>;
    shipment?: number | null;
};

