/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedIconPackageList } from '../models/PaginatedIconPackageList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IconsService {
    /**
     * List view for available icon packages.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedIconPackageList
     * @throws ApiError
     */
    public static iconsList(
        limit: number,
        offset?: number,
    ): CancelablePromise<PaginatedIconPackageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/icons/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
