/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Flag } from '../models/Flag';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FlagsService {
    /**
     * List view for feature flags.
     * @returns Flag
     * @throws ApiError
     */
    public static flagsList(): CancelablePromise<Array<Flag>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/flags/',
        });
    }
    /**
     * Detail view for an individual feature flag.
     * @param key
     * @returns Flag
     * @throws ApiError
     */
    public static flagsRetrieve(
        key: string,
    ): CancelablePromise<Flag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/flags/{key}/',
            path: {
                'key': key,
            },
        });
    }
}
