/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentType } from '../models/ContentType';
import type { PaginatedContentTypeList } from '../models/PaginatedContentTypeList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContenttypeService {
    /**
     * List view for ContentTypes.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: app_label, model.
     * @returns PaginatedContentTypeList
     * @throws ApiError
     */
    public static contenttypeList(
        limit: number,
        offset?: number,
        ordering?: string,
        search?: string,
    ): CancelablePromise<PaginatedContentTypeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contenttype/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * Detail view for a ContentType model.
     * @param id
     * @returns ContentType
     * @throws ApiError
     */
    public static contenttypeRetrieve(
        id: number,
    ): CancelablePromise<ContentType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contenttype/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail view for a ContentType model.
     * @param model
     * @returns ContentType
     * @throws ApiError
     */
    public static contenttypeRetrieveModel(
        model: string,
    ): CancelablePromise<ContentType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contenttype/model/{model}/',
            path: {
                'model': model,
            },
        });
    }
}
