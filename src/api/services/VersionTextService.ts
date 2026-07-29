/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VersionInformation } from '../models/VersionInformation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VersionTextService {
    /**
     * Simple JSON endpoint for InvenTree version text.
     * @param startVersion First version to report. Defaults to return the latest {versions} versions.
     * @param versions Number of versions to return.
     * @returns VersionInformation
     * @throws ApiError
     */
    public static versionTextList(
        startVersion?: number,
        versions: number = 10,
    ): CancelablePromise<Array<VersionInformation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/version-text',
            query: {
                'start_version': startVersion,
                'versions': versions,
            },
        });
    }
}
