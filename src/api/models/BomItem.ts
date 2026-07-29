/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for BomItem object.
 */
export type BomItem = {
    /**
     * Select the parent assembly
     */
    part: number;
    /**
     * Select the component part
     */
    sub_part: number;
    /**
     * BOM item reference
     */
    reference?: string;
    /**
     * Amount required for this item (can include units)
     */
    raw_amount?: string;
    quantity?: number;
    /**
     * Stock items for variant parts can be used for this BOM item
     */
    allow_variants?: boolean;
    /**
     * This BOM item is inherited by BOMs for variant parts
     */
    inherited?: boolean;
    /**
     * This BOM item is optional
     */
    optional?: boolean;
    /**
     * This BOM item is consumable (it is not tracked in build orders)
     */
    consumable?: boolean;
    setup_quantity?: number;
    attrition?: number;
    rounding_multiple?: number | null;
    /**
     * BOM item notes
     */
    note?: string;
    readonly pk: number;
    /**
     * This BOM item has been validated
     */
    validated?: boolean;
    readonly available_stock?: number | null;
    readonly available_substitute_stock?: number | null;
    readonly available_variant_stock?: number | null;
    readonly external_stock?: number | null;
    readonly on_order?: number | null;
    readonly building?: number | null;
    readonly can_build?: number | null;
};

