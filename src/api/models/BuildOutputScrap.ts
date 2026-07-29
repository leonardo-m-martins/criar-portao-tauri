/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildOutputQuantity } from './BuildOutputQuantity';
/**
 * Scrapping one or more build outputs.
 */
export type BuildOutputScrap = {
    outputs: Array<BuildOutputQuantity>;
    /**
     * Stock location for scrapped outputs
     */
    location: number;
    /**
     * Discard any stock allocations for scrapped outputs
     */
    discard_allocations?: boolean;
    /**
     * Reason for scrapping build output(s)
     */
    notes: string;
};

