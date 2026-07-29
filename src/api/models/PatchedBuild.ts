/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildStatusEnum } from './BuildStatusEnum';
import type { Owner } from './Owner';
import type { Parameter } from './Parameter';
import type { PartBrief } from './PartBrief';
import type { ProjectCode } from './ProjectCode';
import type { User } from './User';
/**
 * Serializes a Build object.
 */
export type PatchedBuild = {
    readonly pk?: number;
    /**
     * Brief description of the build (optional)
     */
    title?: string;
    readonly barcode_hash?: string;
    /**
     * Batch code for this build output
     */
    batch?: string | null;
    readonly creation_date?: string;
    /**
     * Number of stock items which have been completed
     */
    readonly completed?: number;
    readonly completion_date?: string | null;
    /**
     * Select location where the completed items will be stored
     */
    destination?: number | null;
    /**
     * This build order is fulfilled externally
     */
    external?: boolean;
    /**
     * Build Order to which this build is allocated
     */
    parent?: number | null;
    /**
     * Select part to build
     */
    part?: number;
    readonly part_name?: string;
    readonly part_detail?: PartBrief;
    /**
     * Project code for this build order
     */
    project_code?: number | null;
    readonly project_code_label?: string | null;
    readonly project_code_detail?: ProjectCode | null;
    readonly overdue?: boolean;
    reference?: string;
    /**
     * Sales Order to which this build is allocated
     */
    sales_order?: number | null;
    quantity?: number;
    /**
     * Scheduled start date for this build order
     */
    start_date?: string | null;
    /**
     * Build status code
     *
     * * `10` - Pending
     * * `20` - Production
     * * `25` - On Hold
     * * `30` - Cancelled
     * * `40` - Complete
     */
    readonly status?: BuildStatusEnum;
    readonly status_text?: string | null;
    /**
     * Additional status information for this item
     */
    readonly status_custom_key?: number | null;
    /**
     * Target date for build completion. Build will be overdue after this date.
     */
    target_date?: string | null;
    /**
     * Select location to take stock from for this build (leave blank to take from any stock location)
     */
    take_from?: number | null;
    /**
     * Markdown notes (optional)
     */
    notes?: string | null;
    /**
     * Link to external URL
     */
    link?: string;
    /**
     * User who issued this build order
     */
    readonly issued_by?: number | null;
    readonly issued_by_detail?: User;
    /**
     * User or group responsible for this build order
     */
    responsible?: number | null;
    readonly responsible_detail?: Owner | null;
    /**
     * Priority of this build order
     */
    priority?: number;
    readonly level?: number;
    tags?: Array<string>;
    readonly parameters?: Array<Parameter> | null;
};

