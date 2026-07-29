/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartTestTemplate } from './PartTestTemplate';
import type { User } from './User';
/**
 * Serializer for the StockItemTestResult model.
 */
export type PatchedStockItemTestResult = {
    readonly pk?: number;
    stock_item?: number;
    /**
     * Test result
     */
    result?: boolean;
    /**
     * Test output value
     */
    value?: string;
    /**
     * Test result attachment
     */
    attachment?: string | null;
    /**
     * Test notes
     */
    notes?: string;
    /**
     * The identifier of the test station where the test was performed
     */
    test_station?: string;
    /**
     * The timestamp of the test start
     */
    started_datetime?: string | null;
    /**
     * The timestamp of the test finish
     */
    finished_datetime?: string | null;
    readonly user?: number | null;
    readonly date?: string;
    /**
     * Template
     */
    template?: number | null;
    readonly template_detail?: PartTestTemplate | null;
    readonly user_detail?: User | null;
};

