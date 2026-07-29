/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for a selection entry.
 */
export type PatchedSelectionEntry = {
    readonly id?: number;
    /**
     * Value of the selection list entry
     */
    value?: string;
    /**
     * Label for the selection list entry
     */
    label?: string;
    /**
     * Description of the selection list entry
     */
    description?: string;
    /**
     * Is this selection list entry active?
     */
    active?: boolean;
    /**
     * Selection list to which this entry belongs
     */
    list?: number | null;
};

