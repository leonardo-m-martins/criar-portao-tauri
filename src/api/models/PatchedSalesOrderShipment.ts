/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressBrief } from './AddressBrief';
import type { CompanyBrief } from './CompanyBrief';
import type { Parameter } from './Parameter';
import type { SalesOrder } from './SalesOrder';
import type { User } from './User';
/**
 * Serializer for the SalesOrderShipment class.
 */
export type PatchedSalesOrderShipment = {
    readonly pk?: number;
    /**
     * Sales Order
     */
    order?: number;
    readonly allocated_items?: number | null;
    /**
     * Date of shipment
     */
    shipment_date?: string | null;
    /**
     * Shipping address for this shipment
     */
    shipment_address?: number | null;
    /**
     * Date of delivery of shipment
     */
    delivery_date?: string | null;
    /**
     * User who checked this shipment
     */
    checked_by?: number | null;
    /**
     * Shipment number
     */
    reference?: string;
    /**
     * Shipment tracking information
     */
    tracking_number?: string;
    /**
     * Reference number for associated invoice
     */
    invoice_number?: string;
    /**
     * Unique hash of barcode data
     */
    barcode_hash?: string;
    /**
     * Link to external page
     */
    link?: string;
    /**
     * Markdown notes (optional)
     */
    notes?: string | null;
    readonly checked_by_detail?: User | null;
    readonly shipment_address_detail?: AddressBrief | null;
    readonly order_detail?: SalesOrder | null;
    tags?: Array<string>;
    readonly customer_detail?: CompanyBrief | null;
    readonly parameters?: Array<Parameter> | null;
};

