/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for PartCategory.
 */
export type Category = {
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
     * Default location for parts in this category
     */
    default_location?: number | null;
    /**
     * Default keywords for parts in this category
     */
    default_keywords?: string | null;
    readonly level: number;
    /**
     * Parent part category
     */
    parent?: number | null;
    readonly part_count?: number | null;
    readonly subcategories?: number | null;
    /**
     * Path
     */
    readonly pathstring: string;
    /**
     * Return True if the category is directly "starred" by the current user.
     */
    readonly starred: boolean;
    /**
     * Parts may not be directly assigned to a structural category, but may be assigned to child categories.
     */
    structural?: boolean;
    /**
     * Icon (optional)
     */
    icon?: string | null;
    readonly parent_default_location?: number | null;
};

