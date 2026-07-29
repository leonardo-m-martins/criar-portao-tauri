/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationBrief } from './LocationBrief';
import type { PartBrief } from './PartBrief';
import type { StockItem } from './StockItem';
import type { TransferOrder } from './TransferOrder';
/**
 * Serializer for the TransferOrderAllocation model.
 *
 * This includes some fields from the related model objects.
 */
export type PatchedTransferOrderAllocation = {
    readonly pk?: number;
    /**
     * Select stock item to allocate
     */
    item?: number;
    quantity?: number;
    readonly line?: number;
    readonly part?: number;
    readonly order?: number;
    readonly serial?: string | null;
    readonly location?: number;
    readonly order_detail?: TransferOrder | null;
    readonly location_detail?: LocationBrief | null;
    readonly part_detail?: PartBrief | null;
    readonly item_detail?: StockItem | null;
};

