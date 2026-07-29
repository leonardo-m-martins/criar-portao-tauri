/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for Part (brief detail).
 */
export type PartBrief = {
    readonly pk: number;
    /**
     * Internal Part Number
     */
    IPN?: string | null;
    /**
     * Unique hash of barcode data
     */
    readonly barcode_hash: string;
    readonly category_default_location?: number | null;
    /**
     * Where is this item normally stored?
     */
    default_location?: number | null;
    /**
     * Expiry time (in days) for stock items of this part
     */
    default_expiry?: number;
    /**
     * Part name
     */
    name: string;
    revision?: string | null;
    /**
     * Format a 'full name' for this Part based on the format PART_NAME_FORMAT defined in InvenTree settings.
     */
    readonly full_name: string;
    /**
     * Part description (optional)
     */
    description?: string;
    readonly image?: string | null;
    readonly thumbnail: string;
    /**
     * Is this part active?
     */
    active?: boolean;
    /**
     * Locked parts cannot be edited
     */
    locked?: boolean;
    /**
     * Can this part be built from other parts?
     */
    assembly?: boolean;
    /**
     * Can this part be used to build other parts?
     */
    component?: boolean;
    /**
     * Minimum allowed stock level
     */
    minimum_stock?: string;
    /**
     * Is this part a template part?
     */
    is_template?: boolean;
    /**
     * Can this part be purchased from external suppliers?
     */
    purchaseable?: boolean;
    /**
     * Can this part be sold to customers?
     */
    salable?: boolean;
    /**
     * Can this part have test results recorded against it?
     */
    testable?: boolean;
    /**
     * Does this part have tracking for unique items?
     */
    trackable?: boolean;
    /**
     * Is this a virtual part, such as a software product or license?
     */
    virtual?: boolean;
    /**
     * Units of measure for this part
     */
    units?: string | null;
    readonly pricing_max?: string | null;
    readonly pricing_min?: string | null;
};

