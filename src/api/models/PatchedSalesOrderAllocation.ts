/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBrief } from './CompanyBrief';
import type { LocationBrief } from './LocationBrief';
import type { PartBrief } from './PartBrief';
import type { SalesOrder } from './SalesOrder';
import type { SalesOrderShipment } from './SalesOrderShipment';
import type { StockItem } from './StockItem';
/**
 * Serializer for the SalesOrderAllocation model.
 *
 * This includes some fields from the related model objects.
 */
export type PatchedSalesOrderAllocation = {
    readonly pk?: number;
    /**
     * Select stock item to allocate
     */
    item?: number;
    quantity?: number;
    /**
     * Sales order shipment reference
     */
    shipment?: number | null;
    readonly line?: number;
    readonly part?: number;
    readonly order?: number;
    readonly serial?: string | null;
    readonly location?: number;
    readonly shipment_detail?: SalesOrderShipment | null;
    readonly part_detail?: PartBrief | null;
    readonly item_detail?: StockItem | null;
    readonly order_detail?: SalesOrder | null;
    readonly customer_detail?: CompanyBrief | null;
    readonly location_detail?: LocationBrief | null;
};

