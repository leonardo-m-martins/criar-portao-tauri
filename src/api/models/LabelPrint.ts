/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer class for printing a label.
 */
export type LabelPrint = {
    /**
     * Select label template
     */
    template: number;
    /**
     * Select plugin to use for label printing
     */
    plugin?: string;
    /**
     * List of item primary keys to include in the report
     */
    items: Array<number>;
};

