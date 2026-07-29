/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for specifying options when duplicating an order.
 */
export type DuplicateOrder = {
    /**
     * ID of the order to duplicate
     */
    order_id: number;
    /**
     * Copy line items from the original order
     */
    copy_lines?: boolean;
    /**
     * Copy extra line items from the original order
     */
    copy_extra_lines?: boolean;
    /**
     * Copy order parameters from the original order
     */
    copy_parameters?: boolean;
};

