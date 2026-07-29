/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VersionView } from '../models/VersionView';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VersionService {
    /**
     * Return information about the InvenTree server.
     * @returns VersionView
     * @throws ApiError
     */
    public static versionRetrieve(): CancelablePromise<VersionView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/version/',
        });
    }
}
