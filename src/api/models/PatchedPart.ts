/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { DefaultLocation } from './DefaultLocation';
import type { DuplicatePart } from './DuplicatePart';
import type { InitialStock } from './InitialStock';
import type { InitialSupplier } from './InitialSupplier';
import type { Parameter } from './Parameter';
import type { PartSalePrice } from './PartSalePrice';
import type { TreePath } from './TreePath';
/**
 * Serializer for complete detail information of a part.
 *
 * Used when displaying all details of a single component.
 */
export type PatchedPart = {
    /**
     * Is this part active?
     */
    active?: boolean;
    /**
     * Can this part be built from other parts?
     */
    assembly?: boolean;
    /**
     * Unique hash of barcode data
     */
    readonly barcode_hash?: string;
    category?: number | null;
    readonly category_name?: string;
    /**
     * Can this part be used to build other parts?
     */
    component?: boolean;
    readonly creation_date?: string | null;
    creation_user?: number | null;
    /**
     * Expiry time (in days) for stock items of this part
     */
    default_expiry?: number;
    /**
     * Where is this item normally stored?
     */
    default_location?: number | null;
    /**
     * Part description (optional)
     */
    description?: string;
    /**
     * Format a 'full name' for this Part based on the format PART_NAME_FORMAT defined in InvenTree settings.
     */
    readonly full_name?: string;
    image?: string | null;
    /**
     * Filename of an existing part image
     */
    existing_image?: string;
    IPN?: string;
    /**
     * Is this part a template part?
     */
    is_template?: boolean;
    /**
     * Part keywords to improve visibility in search results
     */
    keywords?: string | null;
    /**
     * Link to external URL
     */
    link?: string | null;
    /**
     * Locked parts cannot be edited
     */
    locked?: boolean;
    minimum_stock?: number;
    maximum_stock?: number;
    /**
     * Part name
     */
    name?: string;
    /**
     * Markdown notes (optional)
     */
    notes?: string | null;
    readonly pk?: number;
    /**
     * Can this part be purchased from external suppliers?
     */
    purchaseable?: boolean;
    revision?: string | null;
    /**
     * Is this part a revision of another part?
     */
    revision_of?: number | null;
    readonly revision_count?: number | null;
    /**
     * Can this part be sold to customers?
     */
    salable?: boolean;
    /**
     * Return "true" if the part is starred by the current user.
     */
    readonly starred?: boolean;
    readonly thumbnail?: string;
    /**
     * Can this part have test results recorded against it?
     */
    testable?: boolean;
    /**
     * Does this part have tracking for unique items?
     */
    trackable?: boolean;
    /**
     * Units of measure for this part
     */
    units?: string | null;
    /**
     * Is this part a variant of another part?
     */
    variant_of?: number | null;
    /**
     * Is this a virtual part, such as a software product or license?
     */
    virtual?: boolean;
    readonly pricing_min?: string | null;
    readonly pricing_max?: string | null;
    readonly pricing_updated?: string | null;
    responsible?: number | null;
    readonly allocated_to_build_orders?: number | null;
    readonly allocated_to_sales_orders?: number | null;
    /**
     * Quantity of this part currently being in production
     */
    readonly building?: number | null;
    /**
     * Outstanding quantity of this part scheduled to be built
     */
    readonly scheduled_to_build?: number | null;
    readonly category_default_location?: number | null;
    readonly in_stock?: number | null;
    readonly ordering?: number | null;
    readonly required_for_build_orders?: number | null;
    readonly required_for_sales_orders?: number | null;
    readonly stock_item_count?: number | null;
    readonly total_in_stock?: number | null;
    readonly external_stock?: number | null;
    readonly unallocated_stock?: number | null;
    readonly variant_stock?: number | null;
    /**
     * Copy initial data from another Part
     */
    duplicate?: DuplicatePart;
    /**
     * Create Part with initial stock quantity
     */
    initial_stock?: InitialStock;
    /**
     * Add initial supplier information for this part
     */
    initial_supplier?: InitialSupplier;
    /**
     * Copy parameter templates from selected part category
     */
    copy_category_parameters?: boolean;
    tags?: Array<string>;
    readonly category_path?: Array<TreePath> | null;
    readonly category_detail?: Category | null;
    readonly default_location_detail?: DefaultLocation | null;
    readonly price_breaks?: Array<PartSalePrice> | null;
    readonly parameters?: Array<Parameter> | null;
};

