/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SalesOrderShipment } from './SalesOrderShipment';
/**
 * Serializer for the SalesOrderAllocation model.
 *
 * This includes some fields from the related model objects.
 */
export type SalesOrderAllocation = {
    readonly pk: number;
    /**
     * Select stock item to allocate
     */
    item: number;
    quantity: number;
    /**
     * Sales order shipment reference
     */
    shipment?: number | null;
    readonly line: number;
    readonly part: number;
    readonly order: number;
    readonly serial?: string | null;
    readonly location: number;
    readonly shipment_detail?: SalesOrderShipment | null;
};

