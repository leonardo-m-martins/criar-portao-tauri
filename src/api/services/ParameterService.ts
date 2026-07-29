/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { PaginatedParameterList } from '../models/PaginatedParameterList';
import type { PaginatedParameterTemplateList } from '../models/PaginatedParameterTemplateList';
import type { Parameter } from '../models/Parameter';
import type { ParameterTemplate } from '../models/ParameterTemplate';
import type { PatchedParameter } from '../models/PatchedParameter';
import type { PatchedParameterTemplate } from '../models/PatchedParameterTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ParameterService {
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param enabled Template Enabled
     * @param modelId
     * @param modelType Model Type
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: data, template__description, template__name, template__units.
     * @param template
     * @param updatedBy
     * @returns PaginatedParameterList
     * @throws ApiError
     */
    public static parameterList(
        limit: number,
        enabled?: boolean,
        modelId?: number,
        modelType?: string,
        offset?: number,
        ordering?: 'name' | '-name' | 'data' | '-data' | 'units' | '-units' | 'template' | '-template' | 'updated' | '-updated' | 'updated_by' | '-updated_by',
        search?: string,
        template?: number,
        updatedBy?: number,
    ): CancelablePromise<PaginatedParameterList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/parameter/',
            query: {
                'enabled': enabled,
                'limit': limit,
                'model_id': modelId,
                'model_type': modelType,
                'offset': offset,
                'ordering': ordering,
                'search': search,
                'template': template,
                'updated_by': updatedBy,
            },
        });
    }
    /**
     * List API endpoint for Parameter objects.
     * @param requestBody
     * @returns Parameter
     * @throws ApiError
     */
    public static parameterCreate(
        requestBody: Parameter,
    ): CancelablePromise<Parameter> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/parameter/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a DELETE operation against this list endpoint.
     *
     * Note that the typical DRF list endpoint does not support DELETE,
     * so this method is provided as a custom implementation.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static parameterBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/parameter/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for Parameter objects.
     * @param id
     * @returns Parameter
     * @throws ApiError
     */
    public static parameterRetrieve(
        id: number,
    ): CancelablePromise<Parameter> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/parameter/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail API endpoint for Parameter objects.
     * @param id
     * @param requestBody
     * @returns Parameter
     * @throws ApiError
     */
    public static parameterUpdate(
        id: number,
        requestBody: Parameter,
    ): CancelablePromise<Parameter> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/parameter/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for Parameter objects.
     * @param id
     * @param requestBody
     * @returns Parameter
     * @throws ApiError
     */
    public static parameterPartialUpdate(
        id: number,
        requestBody?: PatchedParameter,
    ): CancelablePromise<Parameter> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/parameter/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for Parameter objects.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static parameterDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/parameter/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param checkbox
     * @param enabled
     * @param existsForModel Exists For Model
     * @param existsForModelId Exists For Model ID
     * @param existsForRelatedModel Exists For Related Model
     * @param existsForRelatedModelId Exists For Model ID
     * @param forModel For Model
     * @param hasChoices Has Choice
     * @param hasUnits Has Units
     * @param modelType Model Type
     * @param name
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: description, name.
     * @param units
     * @returns PaginatedParameterTemplateList
     * @throws ApiError
     */
    public static parameterTemplateList(
        limit: number,
        checkbox?: boolean,
        enabled?: boolean,
        existsForModel?: string,
        existsForModelId?: number,
        existsForRelatedModel?: string,
        existsForRelatedModelId?: number,
        forModel?: string,
        hasChoices?: boolean,
        hasUnits?: boolean,
        modelType?: string,
        name?: string,
        offset?: number,
        ordering?: 'name' | '-name' | 'units' | '-units' | 'checkbox' | '-checkbox',
        search?: string,
        units?: string,
    ): CancelablePromise<PaginatedParameterTemplateList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/parameter/template/',
            query: {
                'checkbox': checkbox,
                'enabled': enabled,
                'exists_for_model': existsForModel,
                'exists_for_model_id': existsForModelId,
                'exists_for_related_model': existsForRelatedModel,
                'exists_for_related_model_id': existsForRelatedModelId,
                'for_model': forModel,
                'has_choices': hasChoices,
                'has_units': hasUnits,
                'limit': limit,
                'model_type': modelType,
                'name': name,
                'offset': offset,
                'ordering': ordering,
                'search': search,
                'units': units,
            },
        });
    }
    /**
     * List view for ParameterTemplate objects.
     * @param requestBody
     * @returns ParameterTemplate
     * @throws ApiError
     */
    public static parameterTemplateCreate(
        requestBody: ParameterTemplate,
    ): CancelablePromise<ParameterTemplate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/parameter/template/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a ParameterTemplate object.
     * @param id
     * @returns ParameterTemplate
     * @throws ApiError
     */
    public static parameterTemplateRetrieve(
        id: number,
    ): CancelablePromise<ParameterTemplate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/parameter/template/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail view for a ParameterTemplate object.
     * @param id
     * @param requestBody
     * @returns ParameterTemplate
     * @throws ApiError
     */
    public static parameterTemplateUpdate(
        id: number,
        requestBody: ParameterTemplate,
    ): CancelablePromise<ParameterTemplate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/parameter/template/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a ParameterTemplate object.
     * @param id
     * @param requestBody
     * @returns ParameterTemplate
     * @throws ApiError
     */
    public static parameterTemplatePartialUpdate(
        id: number,
        requestBody?: PatchedParameterTemplate,
    ): CancelablePromise<ParameterTemplate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/parameter/template/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail view for a ParameterTemplate object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static parameterTemplateDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/parameter/template/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
