/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LicenseView } from '../models/LicenseView';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LicenseService {
    /**
     * Return information about the InvenTree server.
     * @returns LicenseView
     * @throws ApiError
     */
    public static licenseRetrieve(): CancelablePromise<LicenseView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/license/',
        });
    }
}
