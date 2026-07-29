/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTagList } from '../models/PaginatedTagList';
import type { PatchedTag } from '../models/PatchedTag';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagService {
    /**
     * List view for all tags.
     * @param limit Number of results to return per page.
     * @param modelType Model Type
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: name.
     * @returns PaginatedTagList
     * @throws ApiError
     */
    public static tagList(
        limit: number,
        modelType?: string,
        offset?: number,
        ordering?: 'name' | '-name',
        search?: string,
    ): CancelablePromise<PaginatedTagList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tag/',
            query: {
                'limit': limit,
                'model_type': modelType,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * List view for all tags.
     * @param requestBody
     * @returns Tag
     * @throws ApiError
     */
    public static tagCreate(
        requestBody: Tag,
    ): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/tag/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a particular tag.
     * @param id
     * @returns Tag
     * @throws ApiError
     */
    public static tagRetrieve(
        id: number,
    ): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tag/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail view for a particular tag.
     * @param id
     * @param requestBody
     * @returns Tag
     * @throws ApiError
     */
    public static tagUpdate(
        id: number,
        requestBody: Tag,
    ): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/tag/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a particular tag.
     * @param id
     * @param requestBody
     * @returns Tag
     * @throws ApiError
     */
    public static tagPartialUpdate(
        id: number,
        requestBody?: PatchedTag,
    ): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/tag/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a particular tag.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static tagDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/tag/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
