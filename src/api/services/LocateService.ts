/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocatePlugin } from '../models/LocatePlugin';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LocateService {
    /**
     * Identify or 'locate' a stock item or location with a plugin.
     * @param requestBody
     * @returns LocatePlugin
     * @throws ApiError
     */
    public static locateCreate(
        requestBody: LocatePlugin,
    ): CancelablePromise<LocatePlugin> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/locate/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
