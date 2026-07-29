/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GlobalSettings } from '../models/GlobalSettings';
import type { PaginatedGlobalSettingsList } from '../models/PaginatedGlobalSettingsList';
import type { PaginatedUserSettingsList } from '../models/PaginatedUserSettingsList';
import type { PatchedGlobalSettings } from '../models/PatchedGlobalSettings';
import type { PatchedUserSettings } from '../models/PatchedUserSettings';
import type { UserSettings } from '../models/UserSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SettingsService {
    /**
     * API endpoint for accessing a list of global settings objects.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: key.
     * @returns PaginatedGlobalSettingsList
     * @throws ApiError
     */
    public static settingsGlobalList(
        limit: number,
        offset?: number,
        ordering?: 'pk' | '-pk' | 'key' | '-key' | 'name' | '-name',
        search?: string,
    ): CancelablePromise<PaginatedGlobalSettingsList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/settings/global/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * Detail view for an individual "global setting" object.
     *
     * - User must have 'staff' status to view / edit
     * @param key
     * @returns GlobalSettings
     * @throws ApiError
     */
    public static settingsGlobalRetrieve(
        key: string,
    ): CancelablePromise<GlobalSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/settings/global/{key}/',
            path: {
                'key': key,
            },
        });
    }
    /**
     * Detail view for an individual "global setting" object.
     *
     * - User must have 'staff' status to view / edit
     * @param key
     * @param requestBody
     * @returns GlobalSettings
     * @throws ApiError
     */
    public static settingsGlobalUpdate(
        key: string,
        requestBody: GlobalSettings,
    ): CancelablePromise<GlobalSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/settings/global/{key}/',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for an individual "global setting" object.
     *
     * - User must have 'staff' status to view / edit
     * @param key
     * @param requestBody
     * @returns GlobalSettings
     * @throws ApiError
     */
    public static settingsGlobalPartialUpdate(
        key: string,
        requestBody?: PatchedGlobalSettings,
    ): CancelablePromise<GlobalSettings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/settings/global/{key}/',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for accessing a list of user settings objects.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: key.
     * @returns PaginatedUserSettingsList
     * @throws ApiError
     */
    public static settingsUserList(
        limit: number,
        offset?: number,
        ordering?: 'pk' | '-pk' | 'key' | '-key' | 'name' | '-name',
        search?: string,
    ): CancelablePromise<PaginatedUserSettingsList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/settings/user/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * Detail view for an individual "user setting" object.
     *
     * - User can only view / edit settings their own settings objects
     * @param key
     * @returns UserSettings
     * @throws ApiError
     */
    public static settingsUserRetrieve(
        key: string,
    ): CancelablePromise<UserSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/settings/user/{key}/',
            path: {
                'key': key,
            },
        });
    }
    /**
     * Detail view for an individual "user setting" object.
     *
     * - User can only view / edit settings their own settings objects
     * @param key
     * @param requestBody
     * @returns UserSettings
     * @throws ApiError
     */
    public static settingsUserUpdate(
        key: string,
        requestBody: UserSettings,
    ): CancelablePromise<UserSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/settings/user/{key}/',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for an individual "user setting" object.
     *
     * - User can only view / edit settings their own settings objects
     * @param key
     * @param requestBody
     * @returns UserSettings
     * @throws ApiError
     */
    public static settingsUserPartialUpdate(
        key: string,
        requestBody?: PatchedUserSettings,
    ): CancelablePromise<UserSettings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/settings/user/{key}/',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
