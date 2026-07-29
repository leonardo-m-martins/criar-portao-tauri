/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllUnitListResponse } from '../models/AllUnitListResponse';
import type { CustomUnit } from '../models/CustomUnit';
import type { PaginatedCustomUnitList } from '../models/PaginatedCustomUnitList';
import type { PatchedCustomUnit } from '../models/PatchedCustomUnit';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UnitsService {
    /**
     * List view for custom units.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @returns PaginatedCustomUnitList
     * @throws ApiError
     */
    public static unitsList(
        limit: number,
        offset?: number,
        ordering?: string,
        search?: string,
    ): CancelablePromise<PaginatedCustomUnitList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/units/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * List view for custom units.
     * @param requestBody
     * @returns CustomUnit
     * @throws ApiError
     */
    public static unitsCreate(
        requestBody: CustomUnit,
    ): CancelablePromise<CustomUnit> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/units/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List view for custom units.
     * @param id A unique integer value identifying this Custom Unit.
     * @returns CustomUnit
     * @throws ApiError
     */
    public static unitsRetrieve(
        id: number,
    ): CancelablePromise<CustomUnit> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/units/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List view for custom units.
     * @param id A unique integer value identifying this Custom Unit.
     * @param requestBody
     * @returns CustomUnit
     * @throws ApiError
     */
    public static unitsUpdate(
        id: number,
        requestBody: CustomUnit,
    ): CancelablePromise<CustomUnit> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/units/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List view for custom units.
     * @param id A unique integer value identifying this Custom Unit.
     * @param requestBody
     * @returns CustomUnit
     * @throws ApiError
     */
    public static unitsPartialUpdate(
        id: number,
        requestBody?: PatchedCustomUnit,
    ): CancelablePromise<CustomUnit> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/units/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List view for custom units.
     * @param id A unique integer value identifying this Custom Unit.
     * @returns void
     * @throws ApiError
     */
    public static unitsDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/units/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Return a list of all available units.
     * @returns AllUnitListResponse
     * @throws ApiError
     */
    public static unitsAllRetrieve(): CancelablePromise<AllUnitListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/units/all/',
        });
    }
}
