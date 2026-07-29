/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StockLocationType } from './StockLocationType';
/**
 * Detailed information about a stock location.
 */
export type Location = {
    readonly pk: number;
    /**
     * Unique hash of barcode data
     */
    readonly barcode_hash: string;
    /**
     * Name
     */
    name: string;
    readonly level: number;
    /**
     * Description (optional)
     */
    description?: string;
    /**
     * Parent stock location
     */
    parent?: number | null;
    /**
     * Path
     */
    readonly pathstring: string;
    readonly items: number;
    readonly sublocations: number;
    /**
     * Select Owner
     */
    owner?: number | null;
    readonly icon: string;
    /**
     * Icon (optional)
     */
    custom_icon?: string | null;
    /**
     * Stock items may not be directly located into a structural stock locations, but may be located to child locations.
     */
    structural?: boolean;
    /**
     * This is an external stock location
     */
    external?: boolean;
    /**
     * Stock location type of this location
     */
    location_type?: number | null;
    readonly location_type_detail?: StockLocationType | null;
};

