/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressBrief } from './AddressBrief';
import type { User } from './User';
/**
 * Serializer for the SalesOrderShipment class.
 */
export type SalesOrderShipment = {
    readonly pk: number;
    /**
     * Sales Order
     */
    order: number;
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
};

