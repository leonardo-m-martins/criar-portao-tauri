/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the TransferOrderAllocation model.
 *
 * This includes some fields from the related model objects.
 */
export type TransferOrderAllocation = {
    readonly pk: number;
    /**
     * Select stock item to allocate
     */
    item: number;
    quantity: number;
    readonly line: number;
    readonly part: number;
    readonly order: number;
    readonly serial?: string | null;
    readonly location: number;
};

