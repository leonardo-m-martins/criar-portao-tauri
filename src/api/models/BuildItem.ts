/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializes a BuildItem object, which is an allocation of a stock item against a build order.
 */
export type BuildItem = {
    readonly pk: number;
    readonly build: number;
    build_line?: number | null;
    /**
     * Destination stock item
     */
    install_into?: number | null;
    /**
     * Source stock item
     */
    stock_item: number;
    quantity: number;
    readonly location: number;
    readonly bom_reference: string;
};

