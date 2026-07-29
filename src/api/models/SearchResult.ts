/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for a search result.
 */
export type SearchResult = {
    id: string;
    sku: string;
    name: string;
    exact: boolean;
    description: string;
    price: string;
    link: string;
    image_url: string;
    /**
     * Return the ID of the existing part if available.
     */
    readonly existing_part_id?: number | null;
};

