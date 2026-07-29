/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for completing (shipping) a SalesOrderShipment.
 */
export type SalesOrderShipmentComplete = {
    /**
     * Date of shipment
     */
    shipment_date?: string | null;
    /**
     * Date of delivery of shipment
     */
    delivery_date?: string | null;
    /**
     * Shipment tracking information
     */
    tracking_number?: string;
    /**
     * Reference number for associated invoice
     */
    invoice_number?: string;
    /**
     * Link to external page
     */
    link?: string;
};

