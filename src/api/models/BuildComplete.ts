/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcceptOverallocatedEnum } from './AcceptOverallocatedEnum';
/**
 * DRF serializer for marking a BuildOrder as complete.
 */
export type BuildComplete = {
    /**
     * How do you want to handle extra stock items assigned to the build order
     *
     * * `reject` - Not permitted
     * * `accept` - Accept as consumed by this build order
     * * `trim` - Deallocate before completing this build order
     */
    accept_overallocated?: AcceptOverallocatedEnum;
    /**
     * Accept that stock items have not been fully allocated to this build order
     */
    accept_unallocated?: boolean;
    /**
     * Accept that the required number of build outputs have not been completed
     */
    accept_incomplete?: boolean;
};

