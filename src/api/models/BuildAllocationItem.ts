/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A serializer for allocating a single stock item against a build order.
 */
export type BuildAllocationItem = {
    build_line: number;
    stock_item: number;
    quantity: string;
    output?: number | null;
};

