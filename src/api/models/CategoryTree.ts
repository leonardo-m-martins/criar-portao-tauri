/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for PartCategory tree.
 */
export type CategoryTree = {
    readonly pk: number;
    /**
     * Name
     */
    name: string;
    /**
     * Description (optional)
     */
    description?: string;
    /**
     * Path
     */
    pathstring?: string;
    parent?: number | null;
    readonly tree_id: number;
    readonly level: number;
    /**
     * Icon (optional)
     */
    icon?: string;
    /**
     * Parts may not be directly assigned to a structural category, but may be assigned to child categories.
     */
    structural?: boolean;
    readonly subcategories: number;
};

