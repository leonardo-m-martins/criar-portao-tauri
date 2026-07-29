/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HealthCheckStatus } from '../models/HealthCheckStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SystemService {
    /**
     * Simple health check endpoint for monitoring purposes.
     *
     * Use the root API endpoint for more detailed information (using an authenticated request).
     * @returns HealthCheckStatus InvenTree server health status
     * @throws ApiError
     */
    public static systemHealthRetrieve(): CancelablePromise<HealthCheckStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/system/health/',
        });
    }
}
