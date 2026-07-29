/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for a simple tree view.
 */
export type LocationTree = {
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
     * Get the current icon used for this location.
     *
     * The icon field on this model takes precedences over the possibly assigned stock location type
     */
    readonly icon: string;
    /**
     * Stock items may not be directly located into a structural stock locations, but may be located to child locations.
     */
    structural?: boolean;
    readonly sublocations: number;
};

