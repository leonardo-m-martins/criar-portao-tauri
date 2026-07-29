/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { ParameterTemplate } from './ParameterTemplate';
/**
 * Serializer for the PartCategoryParameterTemplate model.
 */
export type CategoryParameterTemplate = {
    readonly pk: number;
    /**
     * Part Category
     */
    category: number;
    readonly category_detail?: Category | null;
    template: number;
    readonly template_detail: ParameterTemplate;
    /**
     * Default Parameter Value
     */
    default_value?: string;
};

