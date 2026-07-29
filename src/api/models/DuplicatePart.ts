/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for specifying options when duplicating a Part.
 *
 * The fields in this serializer control how the Part is duplicated.
 */
export type DuplicatePart = {
    /**
     * Select original part to duplicate
     */
    part: number;
    /**
     * Copy image from original part
     */
    copy_image?: boolean;
    /**
     * Copy bill of materials from original part
     */
    copy_bom?: boolean;
    /**
     * Copy parameter data from original part
     */
    copy_parameters?: boolean;
    /**
     * Copy notes from original part
     */
    copy_notes?: boolean;
    /**
     * Copy test templates from original part
     */
    copy_tests?: boolean;
};

