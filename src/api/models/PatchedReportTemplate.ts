/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageSizeEnum } from './PageSizeEnum';
import type { TemplateModelTypeEnum } from './TemplateModelTypeEnum';
import type { User } from './User';
/**
 * Serializer class for report template model.
 */
export type PatchedReportTemplate = {
    readonly pk?: number;
    /**
     * Template name
     */
    name?: string;
    /**
     * Template description
     */
    description?: string;
    model_type?: TemplateModelTypeEnum;
    template?: string;
    /**
     * Template query filters (comma-separated list of key=value pairs)
     */
    filters?: string;
    /**
     * Pattern for generating filenames
     */
    filename_pattern?: string;
    /**
     * Template is enabled
     */
    enabled?: boolean;
    readonly revision?: number;
    /**
     * Save report output as an attachment against linked model instance when printing
     */
    attach_to_model?: boolean;
    /**
     * Timestamp of last update
     */
    updated?: string | null;
    /**
     * User who last updated this object
     */
    updated_by?: number | null;
    readonly updated_by_detail?: User | null;
    page_size?: PageSizeEnum;
    /**
     * Render report in landscape orientation
     */
    landscape?: boolean;
    /**
     * Render a single report against selected items
     */
    merge?: boolean;
};

