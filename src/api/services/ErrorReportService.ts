/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { ErrorMessage } from '../models/ErrorMessage';
import type { PaginatedErrorMessageList } from '../models/PaginatedErrorMessageList';
import type { PatchedErrorMessage } from '../models/PatchedErrorMessage';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ErrorReportService {
    /**
     * List view for server error messages.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: data, info.
     * @returns PaginatedErrorMessageList
     * @throws ApiError
     */
    public static errorReportList(
        limit: number,
        offset?: number,
        ordering?: 'when' | '-when' | 'info' | '-info',
        search?: string,
    ): CancelablePromise<PaginatedErrorMessageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/error-report/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
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
    public static errorReportBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/error-report/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List view for server error messages.
     * @param id A unique integer value identifying this Error.
     * @returns ErrorMessage
     * @throws ApiError
     */
    public static errorReportRetrieve(
        id: number,
    ): CancelablePromise<ErrorMessage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/error-report/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List view for server error messages.
     * @param id A unique integer value identifying this Error.
     * @param requestBody
     * @returns ErrorMessage
     * @throws ApiError
     */
    public static errorReportUpdate(
        id: number,
        requestBody?: ErrorMessage,
    ): CancelablePromise<ErrorMessage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/error-report/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List view for server error messages.
     * @param id A unique integer value identifying this Error.
     * @param requestBody
     * @returns ErrorMessage
     * @throws ApiError
     */
    public static errorReportPartialUpdate(
        id: number,
        requestBody?: PatchedErrorMessage,
    ): CancelablePromise<ErrorMessage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/error-report/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List view for server error messages.
     * @param id A unique integer value identifying this Error.
     * @returns void
     * @throws ApiError
     */
    public static errorReportDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/error-report/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
