/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DRF serializer for unallocating stock from a BuildOrder.
 *
 * Allocated stock can be unallocated with a number of filters:
 *
 * - output: Filter against a particular build output (blank = untracked stock)
 * - bom_item: Filter against a particular BOM line item
 */
export type BuildUnallocation = {
    build_line?: number | null;
    output?: number | null;
};

