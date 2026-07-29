/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObservabilityEnd } from '../models/ObservabilityEnd';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SystemInternalService {
    /**
     * Endpoint for observability tools.
     * @param requestBody
     * @returns ObservabilityEnd
     * @throws ApiError
     */
    public static systemInternalObservabilityEndCreate(
        requestBody: ObservabilityEnd,
    ): CancelablePromise<ObservabilityEnd> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/system-internal/observability/end',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
