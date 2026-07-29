/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for StockLocationType model.
 */
export type PatchedStockLocationType = {
    readonly pk?: number;
    /**
     * Name
     */
    name?: string;
    /**
     * Description (optional)
     */
    description?: string;
    /**
     * Default icon for all locations that have no icon set (optional)
     */
    icon?: string;
    readonly location_count?: number | null;
};

