/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomState } from '../models/CustomState';
import type { GenericStateClass } from '../models/GenericStateClass';
import type { PaginatedCustomStateList } from '../models/PaginatedCustomStateList';
import type { PatchedCustomState } from '../models/PatchedCustomState';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GenericService {
    /**
     * Perform a GET request to learn information about status codes.
     * @returns any Mapping from class name to GenericStateClass data
     * @throws ApiError
     */
    public static genericStatusRetrieveAll(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/generic/status/',
        });
    }
    /**
     * Retrieve information about a specific status code
     * @param statusmodel
     * @returns GenericStateClass
     * @throws ApiError
     */
    public static genericStatusRetrieve(
        statusmodel: string,
    ): CancelablePromise<GenericStateClass> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/generic/status/{statusmodel}/',
            path: {
                'statusmodel': statusmodel,
            },
            errors: {
                400: `Invalid request`,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param model
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param referenceStatus
     * @param search A search term. Searched fields: key, label, name, reference_status.
     * @returns PaginatedCustomStateList
     * @throws ApiError
     */
    public static genericStatusCustomList(
        limit: number,
        model?: number,
        offset?: number,
        ordering?: 'key' | '-key',
        referenceStatus?: string,
        search?: string,
    ): CancelablePromise<PaginatedCustomStateList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/generic/status/custom/',
            query: {
                'limit': limit,
                'model': model,
                'offset': offset,
                'ordering': ordering,
                'reference_status': referenceStatus,
                'search': search,
            },
        });
    }
    /**
     * List view for all custom states.
     * @param requestBody
     * @returns CustomState
     * @throws ApiError
     */
    public static genericStatusCustomCreate(
        requestBody: CustomState,
    ): CancelablePromise<CustomState> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/generic/status/custom/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a particular custom states.
     * @param id
     * @returns CustomState
     * @throws ApiError
     */
    public static genericStatusCustomRetrieve(
        id: number,
    ): CancelablePromise<CustomState> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/generic/status/custom/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail view for a particular custom states.
     * @param id
     * @param requestBody
     * @returns CustomState
     * @throws ApiError
     */
    public static genericStatusCustomUpdate(
        id: number,
        requestBody: CustomState,
    ): CancelablePromise<CustomState> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/generic/status/custom/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a particular custom states.
     * @param id
     * @param requestBody
     * @returns CustomState
     * @throws ApiError
     */
    public static genericStatusCustomPartialUpdate(
        id: number,
        requestBody?: PatchedCustomState,
    ): CancelablePromise<CustomState> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/generic/status/custom/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a particular custom states.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static genericStatusCustomDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/generic/status/custom/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
