/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSelectionEntryList } from '../models/PaginatedSelectionEntryList';
import type { PaginatedSelectionListList } from '../models/PaginatedSelectionListList';
import type { PatchedSelectionEntry } from '../models/PatchedSelectionEntry';
import type { PatchedSelectionList } from '../models/PatchedSelectionList';
import type { SelectionEntry } from '../models/SelectionEntry';
import type { SelectionList } from '../models/SelectionList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SelectionService {
    /**
     * List view for SelectionList objects.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedSelectionListList
     * @throws ApiError
     */
    public static selectionList(
        limit: number,
        offset?: number,
    ): CancelablePromise<PaginatedSelectionListList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/selection/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * List view for SelectionList objects.
     * @param requestBody
     * @returns SelectionList
     * @throws ApiError
     */
    public static selectionCreate(
        requestBody: SelectionList,
    ): CancelablePromise<SelectionList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/selection/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a SelectionList object.
     * @param id
     * @returns SelectionList
     * @throws ApiError
     */
    public static selectionRetrieve(
        id: number,
    ): CancelablePromise<SelectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/selection/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail view for a SelectionList object.
     * @param id
     * @param requestBody
     * @returns SelectionList
     * @throws ApiError
     */
    public static selectionUpdate(
        id: number,
        requestBody: SelectionList,
    ): CancelablePromise<SelectionList> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/selection/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a SelectionList object.
     * @param id
     * @param requestBody
     * @returns SelectionList
     * @throws ApiError
     */
    public static selectionPartialUpdate(
        id: number,
        requestBody?: PatchedSelectionList,
    ): CancelablePromise<SelectionList> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/selection/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a SelectionList object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static selectionDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/selection/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List view for SelectionEntry objects.
     * @param id
     * @param limit Number of results to return per page.
     * @param active
     * @param list
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: description, label.
     * @param value
     * @returns PaginatedSelectionEntryList
     * @throws ApiError
     */
    public static selectionEntryList(
        id: number,
        limit: number,
        active?: boolean,
        list?: number,
        offset?: number,
        ordering?: 'list' | '-list' | 'label' | '-label' | 'active' | '-active',
        search?: string,
        value?: string,
    ): CancelablePromise<PaginatedSelectionEntryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/selection/{id}/entry/',
            path: {
                'id': id,
            },
            query: {
                'active': active,
                'limit': limit,
                'list': list,
                'offset': offset,
                'ordering': ordering,
                'search': search,
                'value': value,
            },
        });
    }
    /**
     * List view for SelectionEntry objects.
     * @param id
     * @param requestBody
     * @returns SelectionEntry
     * @throws ApiError
     */
    public static selectionEntryCreate(
        id: number,
        requestBody: SelectionEntry,
    ): CancelablePromise<SelectionEntry> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/selection/{id}/entry/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a SelectionEntry object.
     * @param entrypk
     * @param id
     * @returns SelectionEntry
     * @throws ApiError
     */
    public static selectionEntryRetrieve(
        entrypk: number,
        id: number,
    ): CancelablePromise<SelectionEntry> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/selection/{id}/entry/{entrypk}/',
            path: {
                'entrypk': entrypk,
                'id': id,
            },
        });
    }
    /**
     * Detail view for a SelectionEntry object.
     * @param entrypk
     * @param id
     * @param requestBody
     * @returns SelectionEntry
     * @throws ApiError
     */
    public static selectionEntryUpdate(
        entrypk: number,
        id: number,
        requestBody: SelectionEntry,
    ): CancelablePromise<SelectionEntry> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/selection/{id}/entry/{entrypk}/',
            path: {
                'entrypk': entrypk,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a SelectionEntry object.
     * @param entrypk
     * @param id
     * @param requestBody
     * @returns SelectionEntry
     * @throws ApiError
     */
    public static selectionEntryPartialUpdate(
        entrypk: number,
        id: number,
        requestBody?: PatchedSelectionEntry,
    ): CancelablePromise<SelectionEntry> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/selection/{id}/entry/{entrypk}/',
            path: {
                'entrypk': entrypk,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a SelectionEntry object.
     * @param entrypk
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static selectionEntryDestroy(
        entrypk: number,
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/selection/{id}/entry/{entrypk}/',
            path: {
                'entrypk': entrypk,
                'id': id,
            },
        });
    }
}
