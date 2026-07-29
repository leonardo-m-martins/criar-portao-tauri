/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for ContentType models.
 */
export type ContentType = {
    readonly pk: number;
    readonly app_label: string;
    readonly model: string;
    readonly app_labeled_name: string;
    /**
     * Return True if the model is a plugin model.
     */
    readonly is_plugin: boolean;
};

