/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataOutput } from './DataOutput';
/**
 * Serializer for generating PartStocktake entries.
 */
export type PartStocktakeGenerate = {
    /**
     * Select a part to generate stocktake information for that part (and any variant parts)
     */
    part?: number | null;
    /**
     * Select a category to include all parts within that category (and subcategories)
     */
    category?: number | null;
    /**
     * Select a location to include all parts with stock in that location (including sub-locations)
     */
    location?: number | null;
    /**
     * Save stocktake entries for the selected parts
     */
    generate_entry?: boolean;
    /**
     * Generate a stocktake report for the selected parts
     */
    generate_report?: boolean;
    readonly output: DataOutput;
};

