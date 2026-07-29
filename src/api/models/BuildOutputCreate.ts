/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for creating a new BuildOutput against a BuildOrder.
 *
 * URL pattern is "/api/build/<pk>/create-output/", where <pk> is the PK of a Build.
 *
 * The Build object is provided to the serializer context.
 */
export type BuildOutputCreate = {
    /**
     * Enter quantity for build output
     */
    quantity: string;
    /**
     * Batch code for this build output
     */
    batch_code?: string;
    /**
     * Enter serial numbers for build outputs
     */
    serial_numbers?: string;
    /**
     * Stock location for build output
     */
    location?: number | null;
    /**
     * Automatically allocate required items with matching serial numbers
     */
    auto_allocate?: boolean | null;
};

