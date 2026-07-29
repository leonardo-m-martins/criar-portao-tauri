/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Build } from './Build';
import type { LocationBrief } from './LocationBrief';
import type { PartBrief } from './PartBrief';
import type { StockItem } from './StockItem';
import type { SupplierPart } from './SupplierPart';
/**
 * Serializes a BuildItem object, which is an allocation of a stock item against a build order.
 */
export type PatchedBuildItem = {
    readonly pk?: number;
    readonly build?: number;
    build_line?: number | null;
    /**
     * Destination stock item
     */
    install_into?: number | null;
    /**
     * Source stock item
     */
    stock_item?: number;
    quantity?: number;
    readonly location?: number;
    readonly bom_reference?: string;
    readonly build_detail?: Build | null;
    readonly location_detail?: LocationBrief | null;
    readonly part_detail?: PartBrief | null;
    readonly stock_item_detail?: StockItem | null;
    readonly install_into_detail?: StockItem | null;
    readonly supplier_part_detail?: SupplierPart | null;
};

