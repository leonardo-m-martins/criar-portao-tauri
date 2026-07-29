/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedProjectCodeList } from '../models/PaginatedProjectCodeList';
import type { PatchedProjectCode } from '../models/PatchedProjectCode';
import type { ProjectCode } from '../models/ProjectCode';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectCodeService {
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: code, description.
     * @returns PaginatedProjectCodeList
     * @throws ApiError
     */
    public static projectCodeList(
        limit: number,
        offset?: number,
        ordering?: 'code' | '-code',
        search?: string,
    ): CancelablePromise<PaginatedProjectCodeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/project-code/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * List view for all project codes.
     * @param requestBody
     * @returns ProjectCode
     * @throws ApiError
     */
    public static projectCodeCreate(
        requestBody: ProjectCode,
    ): CancelablePromise<ProjectCode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/project-code/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a particular project code.
     * @param id
     * @returns ProjectCode
     * @throws ApiError
     */
    public static projectCodeRetrieve(
        id: number,
    ): CancelablePromise<ProjectCode> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/project-code/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail view for a particular project code.
     * @param id
     * @param requestBody
     * @returns ProjectCode
     * @throws ApiError
     */
    public static projectCodeUpdate(
        id: number,
        requestBody: ProjectCode,
    ): CancelablePromise<ProjectCode> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/project-code/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a particular project code.
     * @param id
     * @param requestBody
     * @returns ProjectCode
     * @throws ApiError
     */
    public static projectCodePartialUpdate(
        id: number,
        requestBody?: PatchedProjectCode,
    ): CancelablePromise<ProjectCode> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/project-code/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a particular project code.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static projectCodeDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/project-code/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
