/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { ModelTypeD42Enum } from './ModelTypeD42Enum';
import type { NullEnum } from './NullEnum';
/**
 * Serializer for the ParameterTemplate model.
 */
export type ParameterTemplate = {
    readonly pk: number;
    /**
     * Parameter Name
     */
    name: string;
    /**
     * Physical units for this parameter
     */
    units?: string;
    /**
     * Parameter description
     */
    description?: string;
    model_type?: (ModelTypeD42Enum | BlankEnum | NullEnum) | null;
    /**
     * Is this parameter a checkbox?
     */
    checkbox?: boolean;
    /**
     * Valid choices for this parameter (comma-separated)
     */
    choices?: string;
    /**
     * Selection list for this parameter
     */
    selectionlist?: number | null;
    /**
     * Is this parameter template enabled?
     */
    enabled?: boolean;
};

