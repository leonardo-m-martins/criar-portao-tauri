/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { DataOutput } from '../models/DataOutput';
import type { PaginatedDataOutputList } from '../models/PaginatedDataOutputList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DataOutputService {
    /**
     * Mixin class for DataOutput endpoints.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param user
     * @returns PaginatedDataOutputList
     * @throws ApiError
     */
    public static dataOutputList(
        limit: number,
        offset?: number,
        ordering?: 'pk' | '-pk' | 'user' | '-user' | 'plugin' | '-plugin' | 'output_type' | '-output_type' | 'created' | '-created',
        search?: string,
        user?: number,
    ): CancelablePromise<PaginatedDataOutputList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/data-output/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
                'user': user,
            },
        });
    }
    /**
     * Perform a bulk delete operation.
     *
     * Provide either a list of ids (via `items`) or a filter (via `filters`) to select the items to be deleted.
     *
     * This action is performed attomically, so either all items will be deleted, or none will be deleted.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static dataOutputBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/data-output/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Mixin class for DataOutput endpoints.
     * @param id A unique integer value identifying this data output.
     * @returns DataOutput
     * @throws ApiError
     */
    public static dataOutputRetrieve(
        id: number,
    ): CancelablePromise<DataOutput> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/data-output/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Mixin class for DataOutput endpoints.
     * @param id A unique integer value identifying this data output.
     * @returns void
     * @throws ApiError
     */
    public static dataOutputDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/data-output/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
