/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPluginConfigList } from '../models/PaginatedPluginConfigList';
import type { PaginatedPluginSettingList } from '../models/PaginatedPluginSettingList';
import type { PatchedPluginActivate } from '../models/PatchedPluginActivate';
import type { PatchedPluginSetting } from '../models/PatchedPluginSetting';
import type { PatchedPluginUninstall } from '../models/PatchedPluginUninstall';
import type { PatchedPluginUserSetting } from '../models/PatchedPluginUserSetting';
import type { PluginActivate } from '../models/PluginActivate';
import type { PluginAdminDetail } from '../models/PluginAdminDetail';
import type { PluginConfig } from '../models/PluginConfig';
import type { PluginConfigInstall } from '../models/PluginConfigInstall';
import type { PluginRegistryStatus } from '../models/PluginRegistryStatus';
import type { PluginReload } from '../models/PluginReload';
import type { PluginSetting } from '../models/PluginSetting';
import type { PluginUIFeature } from '../models/PluginUIFeature';
import type { PluginUninstall } from '../models/PluginUninstall';
import type { PluginUserSetting } from '../models/PluginUserSetting';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PluginsService {
    /**
     * API endpoint for list of PluginConfig objects.
     *
     * - GET: Return a list of all PluginConfig objects
     * @param limit Number of results to return per page.
     * @param active
     * @param builtin Builtin
     * @param installed Installed
     * @param mandatory Mandatory
     * @param mixin Mixin
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param sample Sample
     * @param search A search term. Searched fields: key, name.
     * @returns PaginatedPluginConfigList
     * @throws ApiError
     */
    public static pluginsList(
        limit: number,
        active?: boolean,
        builtin?: boolean,
        installed?: boolean,
        mandatory?: boolean,
        mixin?: string,
        offset?: number,
        ordering?: 'key' | '-key' | 'name' | '-name' | 'active' | '-active',
        sample?: boolean,
        search?: string,
    ): CancelablePromise<PaginatedPluginConfigList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/',
            query: {
                'active': active,
                'builtin': builtin,
                'installed': installed,
                'limit': limit,
                'mandatory': mandatory,
                'mixin': mixin,
                'offset': offset,
                'ordering': ordering,
                'sample': sample,
                'search': search,
            },
        });
    }
    /**
     * API detail endpoint for PluginConfig object.
     *
     * get:
     * Return a single PluginConfig object
     *
     * post:
     * Update a PluginConfig
     *
     * delete:
     * Remove a PluginConfig
     * @param plugin
     * @returns PluginConfig
     * @throws ApiError
     */
    public static pluginsRetrieve(
        plugin: string,
    ): CancelablePromise<PluginConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/{plugin}/',
            path: {
                'plugin': plugin,
            },
        });
    }
    /**
     * Handle DELETE request for a PluginConfig instance.
     *
     * We only allow plugin deletion if the plugin is not active.
     * @param plugin
     * @returns void
     * @throws ApiError
     */
    public static pluginsDestroy(
        plugin: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/plugins/{plugin}/',
            path: {
                'plugin': plugin,
            },
        });
    }
    /**
     * Endpoint for activating a plugin.
     *
     * - PATCH: Activate a plugin
     *
     * Pass a boolean value for the 'active' field.
     * If not provided, it is assumed to be True,
     * and the plugin will be activated.
     * @param plugin
     * @param requestBody
     * @returns PluginActivate
     * @throws ApiError
     */
    public static pluginsActivateUpdate(
        plugin: string,
        requestBody?: PluginActivate,
    ): CancelablePromise<PluginActivate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/plugins/{plugin}/activate/',
            path: {
                'plugin': plugin,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint for activating a plugin.
     *
     * - PATCH: Activate a plugin
     *
     * Pass a boolean value for the 'active' field.
     * If not provided, it is assumed to be True,
     * and the plugin will be activated.
     * @param plugin
     * @param requestBody
     * @returns PluginActivate
     * @throws ApiError
     */
    public static pluginsActivatePartialUpdate(
        plugin: string,
        requestBody?: PatchedPluginActivate,
    ): CancelablePromise<PluginActivate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/plugins/{plugin}/activate/',
            path: {
                'plugin': plugin,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint for viewing admin integration plugin details.
     *
     * This endpoint is used to view the available admin integration options for a plugin.
     * @param plugin
     * @returns PluginAdminDetail
     * @throws ApiError
     */
    public static pluginsAdminRetrieve(
        plugin: string,
    ): CancelablePromise<PluginAdminDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/{plugin}/admin/',
            path: {
                'plugin': plugin,
            },
        });
    }
    /**
     * Get all settings for a plugin config.
     * @param plugin
     * @returns PluginSetting
     * @throws ApiError
     */
    public static pluginsSettingsList(
        plugin: string,
    ): CancelablePromise<Array<PluginSetting>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/{plugin}/settings/',
            path: {
                'plugin': plugin,
            },
        });
    }
    /**
     * Detail endpoint for a plugin-specific setting.
     * @param key
     * @param plugin
     * @returns PluginSetting
     * @throws ApiError
     */
    public static pluginsSettingsRetrieve(
        key: string,
        plugin: string,
    ): CancelablePromise<PluginSetting> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/{plugin}/settings/{key}/',
            path: {
                'key': key,
                'plugin': plugin,
            },
        });
    }
    /**
     * Detail endpoint for a plugin-specific setting.
     * @param key
     * @param plugin
     * @param requestBody
     * @returns PluginSetting
     * @throws ApiError
     */
    public static pluginsSettingsUpdate(
        key: string,
        plugin: string,
        requestBody: PluginSetting,
    ): CancelablePromise<PluginSetting> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/plugins/{plugin}/settings/{key}/',
            path: {
                'key': key,
                'plugin': plugin,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a plugin-specific setting.
     * @param key
     * @param plugin
     * @param requestBody
     * @returns PluginSetting
     * @throws ApiError
     */
    public static pluginsSettingsPartialUpdate(
        key: string,
        plugin: string,
        requestBody?: PatchedPluginSetting,
    ): CancelablePromise<PluginSetting> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/plugins/{plugin}/settings/{key}/',
            path: {
                'key': key,
                'plugin': plugin,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint for uninstalling a single plugin.
     * @param plugin
     * @param requestBody
     * @returns PluginUninstall
     * @throws ApiError
     */
    public static pluginsUninstallUpdate(
        plugin: string,
        requestBody?: PluginUninstall,
    ): CancelablePromise<PluginUninstall> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/plugins/{plugin}/uninstall/',
            path: {
                'plugin': plugin,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint for uninstalling a single plugin.
     * @param plugin
     * @param requestBody
     * @returns PluginUninstall
     * @throws ApiError
     */
    public static pluginsUninstallPartialUpdate(
        plugin: string,
        requestBody?: PatchedPluginUninstall,
    ): CancelablePromise<PluginUninstall> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/plugins/{plugin}/uninstall/',
            path: {
                'plugin': plugin,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get all user settings for a plugin config.
     * @param plugin
     * @returns PluginUserSetting
     * @throws ApiError
     */
    public static pluginsUserSettingsList(
        plugin: string,
    ): CancelablePromise<Array<PluginUserSetting>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/{plugin}/user-settings/',
            path: {
                'plugin': plugin,
            },
        });
    }
    /**
     * Detail endpoint for a plugin-specific user setting.
     * @param key
     * @param plugin
     * @returns PluginUserSetting
     * @throws ApiError
     */
    public static pluginsUserSettingsRetrieve(
        key: string,
        plugin: string,
    ): CancelablePromise<PluginUserSetting> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/{plugin}/user-settings/{key}/',
            path: {
                'key': key,
                'plugin': plugin,
            },
        });
    }
    /**
     * Detail endpoint for a plugin-specific user setting.
     * @param key
     * @param plugin
     * @param requestBody
     * @returns PluginUserSetting
     * @throws ApiError
     */
    public static pluginsUserSettingsUpdate(
        key: string,
        plugin: string,
        requestBody: PluginUserSetting,
    ): CancelablePromise<PluginUserSetting> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/plugins/{plugin}/user-settings/{key}/',
            path: {
                'key': key,
                'plugin': plugin,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a plugin-specific user setting.
     * @param key
     * @param plugin
     * @param requestBody
     * @returns PluginUserSetting
     * @throws ApiError
     */
    public static pluginsUserSettingsPartialUpdate(
        key: string,
        plugin: string,
        requestBody?: PatchedPluginUserSetting,
    ): CancelablePromise<PluginUserSetting> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/plugins/{plugin}/user-settings/{key}/',
            path: {
                'key': key,
                'plugin': plugin,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint for installing a new plugin.
     * @param requestBody
     * @returns PluginConfigInstall
     * @throws ApiError
     */
    public static pluginsInstallCreate(
        requestBody: PluginConfigInstall,
    ): CancelablePromise<PluginConfigInstall> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/plugins/install/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint for reloading all plugins.
     * @param requestBody
     * @returns PluginReload
     * @throws ApiError
     */
    public static pluginsReloadCreate(
        requestBody?: PluginReload,
    ): CancelablePromise<PluginReload> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/plugins/reload/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List endpoint for all plugin related settings.
     *
     * - read only
     * - only accessible by staff users
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param pluginActive
     * @param pluginKey
     * @returns PaginatedPluginSettingList
     * @throws ApiError
     */
    public static pluginsSettingsListAll(
        limit: number,
        offset?: number,
        pluginActive?: boolean,
        pluginKey?: string,
    ): CancelablePromise<PaginatedPluginSettingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/settings/',
            query: {
                'limit': limit,
                'offset': offset,
                'plugin__active': pluginActive,
                'plugin__key': pluginKey,
            },
        });
    }
    /**
     * Show plugin registry status information.
     * @returns PluginRegistryStatus
     * @throws ApiError
     */
    public static pluginsStatusRetrieve(): CancelablePromise<PluginRegistryStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/status/',
        });
    }
    /**
     * Show available plugin ui features.
     * @param feature
     * @returns PluginUIFeature
     * @throws ApiError
     */
    public static pluginsUiFeaturesList(
        feature: string,
    ): CancelablePromise<Array<PluginUIFeature>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/plugins/ui/features/{feature}/',
            path: {
                'feature': feature,
            },
        });
    }
}
