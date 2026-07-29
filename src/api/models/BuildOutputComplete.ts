/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildOutputQuantity } from './BuildOutputQuantity';
/**
 * DRF serializer for completing one or more build outputs.
 */
export type BuildOutputComplete = {
    outputs: Array<BuildOutputQuantity>;
    /**
     * Location for completed build outputs
     */
    location: number;
    /**
     * Stock item status code
     */
    status_custom_key?: number;
    /**
     * Complete outputs if stock has not been fully allocated
     */
    accept_incomplete_allocation?: boolean;
    notes?: string;
};

