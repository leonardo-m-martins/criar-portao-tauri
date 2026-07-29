/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MachineConfig } from '../models/MachineConfig';
import type { MachineConfigCreate } from '../models/MachineConfigCreate';
import type { MachineDriver } from '../models/MachineDriver';
import type { MachineRegistryStatus } from '../models/MachineRegistryStatus';
import type { MachineRestart } from '../models/MachineRestart';
import type { MachineSetting } from '../models/MachineSetting';
import type { MachineType } from '../models/MachineType';
import type { PaginatedMachineConfigList } from '../models/PaginatedMachineConfigList';
import type { PatchedMachineConfig } from '../models/PatchedMachineConfig';
import type { PatchedMachineSetting } from '../models/PatchedMachineSetting';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MachineService {
    /**
     * API endpoint for list of Machine objects.
     *
     * - GET: Return a list of all Machine objects
     * - POST: create a MachineConfig
     * @param limit Number of results to return per page.
     * @param active
     * @param driver
     * @param machineType
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: name.
     * @returns PaginatedMachineConfigList
     * @throws ApiError
     */
    public static machineList(
        limit: number,
        active?: boolean,
        driver?: string,
        machineType?: string,
        offset?: number,
        ordering?: 'name' | '-name' | 'machine_type' | '-machine_type' | 'driver' | '-driver' | 'active' | '-active',
        search?: string,
    ): CancelablePromise<PaginatedMachineConfigList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/machine/',
            query: {
                'active': active,
                'driver': driver,
                'limit': limit,
                'machine_type': machineType,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for list of Machine objects.
     *
     * - GET: Return a list of all Machine objects
     * - POST: create a MachineConfig
     * @param requestBody
     * @returns MachineConfigCreate
     * @throws ApiError
     */
    public static machineCreate(
        requestBody: MachineConfigCreate,
    ): CancelablePromise<MachineConfigCreate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/machine/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for MachineConfig object.
     *
     * - GET: return a single MachineConfig
     * - PUT: update a MachineConfig
     * - PATCH: partial update a MachineConfig
     * - DELETE: delete a MachineConfig
     * @param id
     * @returns MachineConfig
     * @throws ApiError
     */
    public static machineRetrieve(
        id: string,
    ): CancelablePromise<MachineConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/machine/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API detail endpoint for MachineConfig object.
     *
     * - GET: return a single MachineConfig
     * - PUT: update a MachineConfig
     * - PATCH: partial update a MachineConfig
     * - DELETE: delete a MachineConfig
     * @param id
     * @param requestBody
     * @returns MachineConfig
     * @throws ApiError
     */
    public static machineUpdate(
        id: string,
        requestBody: MachineConfig,
    ): CancelablePromise<MachineConfig> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/machine/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for MachineConfig object.
     *
     * - GET: return a single MachineConfig
     * - PUT: update a MachineConfig
     * - PATCH: partial update a MachineConfig
     * - DELETE: delete a MachineConfig
     * @param id
     * @param requestBody
     * @returns MachineConfig
     * @throws ApiError
     */
    public static machinePartialUpdate(
        id: string,
        requestBody?: PatchedMachineConfig,
    ): CancelablePromise<MachineConfig> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/machine/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for MachineConfig object.
     *
     * - GET: return a single MachineConfig
     * - PUT: update a MachineConfig
     * - PATCH: partial update a MachineConfig
     * - DELETE: delete a MachineConfig
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static machineDestroy(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/machine/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Restart machine by pk.
     * @param id
     * @returns MachineRestart
     * @throws ApiError
     */
    public static machineRestartCreate(
        id: string,
    ): CancelablePromise<MachineRestart> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/machine/{id}/restart/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Return all settings for a machine config.
     * @param id
     * @returns MachineSetting
     * @throws ApiError
     */
    public static machineSettingsList(
        id: string,
    ): CancelablePromise<Array<MachineSetting>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/machine/{id}/settings/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for a machine-specific setting.
     *
     * - GET: Get machine setting detail
     * - PUT: Update machine setting
     * - PATCH: Update machine setting
     *
     * (Note that these cannot be created or deleted via API)
     * @param configType
     * @param id
     * @param key
     * @returns MachineSetting
     * @throws ApiError
     */
    public static machineSettingsRetrieve(
        configType: string,
        id: string,
        key: string,
    ): CancelablePromise<MachineSetting> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/machine/{id}/settings/{config_type}/{key}/',
            path: {
                'config_type': configType,
                'id': id,
                'key': key,
            },
        });
    }
    /**
     * Detail endpoint for a machine-specific setting.
     *
     * - GET: Get machine setting detail
     * - PUT: Update machine setting
     * - PATCH: Update machine setting
     *
     * (Note that these cannot be created or deleted via API)
     * @param configType
     * @param id
     * @param key
     * @param requestBody
     * @returns MachineSetting
     * @throws ApiError
     */
    public static machineSettingsUpdate(
        configType: string,
        id: string,
        key: string,
        requestBody: MachineSetting,
    ): CancelablePromise<MachineSetting> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/machine/{id}/settings/{config_type}/{key}/',
            path: {
                'config_type': configType,
                'id': id,
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a machine-specific setting.
     *
     * - GET: Get machine setting detail
     * - PUT: Update machine setting
     * - PATCH: Update machine setting
     *
     * (Note that these cannot be created or deleted via API)
     * @param configType
     * @param id
     * @param key
     * @param requestBody
     * @returns MachineSetting
     * @throws ApiError
     */
    public static machineSettingsPartialUpdate(
        configType: string,
        id: string,
        key: string,
        requestBody?: PatchedMachineSetting,
    ): CancelablePromise<MachineSetting> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/machine/{id}/settings/{config_type}/{key}/',
            path: {
                'config_type': configType,
                'id': id,
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all machine drivers.
     * @returns MachineDriver
     * @throws ApiError
     */
    public static machineDriversList(): CancelablePromise<Array<MachineDriver>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/machine/drivers/',
        });
    }
    /**
     * Provide status data for the machine registry.
     * @returns MachineRegistryStatus
     * @throws ApiError
     */
    public static machineStatusRetrieve(): CancelablePromise<MachineRegistryStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/machine/status/',
        });
    }
    /**
     * List of all machine types.
     * @returns MachineType
     * @throws ApiError
     */
    public static machineTypesList(): CancelablePromise<Array<MachineType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/machine/types/',
        });
    }
}
