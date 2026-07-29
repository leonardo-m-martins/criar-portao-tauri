/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APISearchView } from '../models/APISearchView';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
    /**
     * Perform search query against available models.
     * @param requestBody
     * @returns APISearchView
     * @throws ApiError
     */
    public static searchCreate(
        requestBody: APISearchView,
    ): CancelablePromise<APISearchView> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/search/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
