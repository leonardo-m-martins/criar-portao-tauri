/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for Part requirements.
 */
export type PartRequirements = {
    readonly total_stock: number;
    readonly unallocated_stock: number;
    readonly can_build: number;
    readonly ordering: number;
    readonly building: number;
    readonly scheduled_to_build: number;
    readonly required_for_build_orders: number;
    readonly allocated_to_build_orders: number;
    readonly required_for_sales_orders: number;
    /**
     * Return the allocated sales order quantity.
     */
    readonly allocated_to_sales_orders: number;
};

