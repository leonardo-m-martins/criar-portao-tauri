/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhookService {
    /**
     * Process incoming webhook.
     * @param endpoint
     * @returns any Any data can be posted to the endpoint - everything will be passed to the WebhookEndpoint model.
     * @throws ApiError
     */
    public static webhookCreate(
        endpoint: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/webhook/{endpoint}/',
            path: {
                'endpoint': endpoint,
            },
        });
    }
}
