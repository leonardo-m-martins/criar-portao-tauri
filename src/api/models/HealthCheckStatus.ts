/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HealthCheckStatusStatusEnum } from './HealthCheckStatusStatusEnum';
/**
 * Status of the overall system health.
 */
export type HealthCheckStatus = {
    /**
     * Health status of the InvenTree server
     *
     * * `ok` - ok
     * * `loading` - loading
     */
    readonly status: HealthCheckStatusStatusEnum;
};

