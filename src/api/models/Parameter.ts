/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelTypeD42Enum } from './ModelTypeD42Enum';
import type { ParameterTemplate } from './ParameterTemplate';
import type { User } from './User';
/**
 * Serializer for the Parameter model.
 */
export type Parameter = {
    readonly pk: number;
    /**
     * Parameter template
     */
    template: number;
    model_type?: ModelTypeD42Enum;
    /**
     * ID of the target model for this parameter
     */
    model_id: number;
    /**
     * Parameter Value
     */
    data: string;
    data_numeric?: number | null;
    /**
     * Optional note field
     */
    note?: string;
    /**
     * Timestamp of last update
     */
    readonly updated?: string | null;
    /**
     * User who last updated this object
     */
    readonly updated_by?: number | null;
    readonly template_detail: ParameterTemplate;
    readonly updated_by_detail?: User | null;
};

