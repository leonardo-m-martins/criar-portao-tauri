/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the NotesImage model.
 */
export type NotesImage = {
    readonly pk: number;
    image: string;
    readonly user?: number | null;
    readonly date: string;
    /**
     * Target model type for this image
     */
    model_type?: string | null;
    /**
     * Target model ID for this image
     */
    model_id?: number | null;
};

