/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Cancel an active BuildOrder.
 */
export type BuildCancel = {
    /**
     * Consume any stock which has already been allocated to this build
     */
    remove_allocated_stock?: boolean;
    /**
     * Delete any build outputs which have not been completed
     */
    remove_incomplete_outputs?: boolean;
};

