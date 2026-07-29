/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for generating a batch code.
 *
 * Any of the provided write-only fields can be used for additional context.
 */
export type GenerateBatchCode = {
    /**
     * Generated batch code
     */
    readonly batch_code: string;
    /**
     * Select build order
     */
    build_order?: number | null;
    /**
     * Select stock item to generate batch code for
     */
    item?: number | null;
    /**
     * Select location to generate batch code for
     */
    location?: number | null;
    /**
     * Select part to generate batch code for
     */
    part?: number | null;
    /**
     * Select purchase order
     */
    purchase_order?: number | null;
    /**
     * Enter quantity for batch code
     */
    quantity?: number | null;
};

