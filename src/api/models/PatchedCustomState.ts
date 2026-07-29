/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColorEnum } from './ColorEnum';
import type { ReferenceStatusEnum } from './ReferenceStatusEnum';
/**
 * Serializer for the custom state model.
 */
export type PatchedCustomState = {
    readonly pk?: number;
    /**
     * Numerical value that will be saved in the models database
     */
    key?: number;
    /**
     * Name of the state
     */
    name?: string;
    /**
     * Label that will be displayed in the frontend
     */
    label?: string;
    /**
     * Color that will be displayed in the frontend
     *
     * * `primary` - primary
     * * `secondary` - secondary
     * * `success` - success
     * * `danger` - danger
     * * `warning` - warning
     * * `info` - info
     * * `dark` - dark
     */
    color?: ColorEnum;
    /**
     * State logical key that is equal to this custom state in business logic
     */
    logical_key?: number;
    /**
     * Model this state is associated with
     */
    model?: number | null;
    readonly model_name?: string;
    reference_status?: ReferenceStatusEnum;
};

