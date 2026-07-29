/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the PartStocktake model.
 */
export type PartStocktake = {
    readonly pk: number;
    /**
     * Part for stocktake
     */
    part: number;
    readonly part_name: string;
    readonly part_ipn?: string | null;
    readonly part_description?: string | null;
    /**
     * Date stocktake was performed
     */
    readonly date: string;
    /**
     * Number of individual stock entries at time of stocktake
     */
    item_count?: number;
    quantity: number;
    cost_min?: string | null;
    /**
     * Select currency from available options
     */
    cost_min_currency?: string;
    cost_max?: string | null;
    /**
     * Select currency from available options
     */
    cost_max_currency?: string;
};

