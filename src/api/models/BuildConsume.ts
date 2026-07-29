/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildConsumeAllocation } from './BuildConsumeAllocation';
import type { BuildConsumeLineItem } from './BuildConsumeLineItem';
/**
 * Serializer for consuming allocations against a BuildOrder.
 *
 * - Consumes allocated stock items, increasing the 'consumed' field for each BuildLine.
 * - Stock can be consumed by passing either a list of BuildItem objects, or a list of BuildLine objects.
 */
export type BuildConsume = {
    items?: Array<BuildConsumeAllocation>;
    lines?: Array<BuildConsumeLineItem>;
    /**
     * Optional notes for the stock consumption
     */
    notes?: string;
};

