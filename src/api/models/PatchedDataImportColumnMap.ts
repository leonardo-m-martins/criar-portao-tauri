/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the DataImportColumnMap model.
 */
export type PatchedDataImportColumnMap = {
    readonly pk?: number;
    readonly session?: number;
    column?: string;
    readonly field?: string;
    readonly label?: string;
    readonly description?: string;
    /**
     * Database field to use for foreign-key lookup. Leave blank for automatic lookup.
     */
    lookup_field?: string | null;
};

