/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { NewsFeedEntry } from '../models/NewsFeedEntry';
import type { PaginatedNewsFeedEntryList } from '../models/PaginatedNewsFeedEntryList';
import type { PatchedNewsFeedEntry } from '../models/PatchedNewsFeedEntry';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NewsService {
    /**
     * Newsfeed from the official inventree.org website.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param read
     * @returns PaginatedNewsFeedEntryList
     * @throws ApiError
     */
    public static newsList(
        limit: number,
        offset?: number,
        ordering?: 'published' | '-published' | 'author' | '-author' | 'read' | '-read',
        read?: boolean,
    ): CancelablePromise<PaginatedNewsFeedEntryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/news/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'read': read,
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
    public static newsBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/news/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Newsfeed from the official inventree.org website.
     * @param id A unique integer value identifying this news feed entry.
     * @returns NewsFeedEntry
     * @throws ApiError
     */
    public static newsRetrieve(
        id: number,
    ): CancelablePromise<NewsFeedEntry> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/news/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Newsfeed from the official inventree.org website.
     * @param id A unique integer value identifying this news feed entry.
     * @param requestBody
     * @returns NewsFeedEntry
     * @throws ApiError
     */
    public static newsUpdate(
        id: number,
        requestBody: NewsFeedEntry,
    ): CancelablePromise<NewsFeedEntry> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/news/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Newsfeed from the official inventree.org website.
     * @param id A unique integer value identifying this news feed entry.
     * @param requestBody
     * @returns NewsFeedEntry
     * @throws ApiError
     */
    public static newsPartialUpdate(
        id: number,
        requestBody?: PatchedNewsFeedEntry,
    ): CancelablePromise<NewsFeedEntry> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/news/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Newsfeed from the official inventree.org website.
     * @param id A unique integer value identifying this news feed entry.
     * @returns void
     * @throws ApiError
     */
    public static newsDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/news/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
