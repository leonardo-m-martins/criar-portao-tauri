/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for copying a BOM from another part.
 */
export type PartCopyBOM = {
    /**
     * Select part to copy BOM from
     */
    part: number;
    /**
     * Remove existing BOM items before copying
     */
    remove_existing?: boolean;
    /**
     * Include BOM items which are inherited from templated parts
     */
    include_inherited?: boolean;
    /**
     * Enable this option to skip invalid rows
     */
    skip_invalid?: boolean;
    /**
     * Copy substitute parts when duplicate BOM items
     */
    copy_substitutes?: boolean;
};

