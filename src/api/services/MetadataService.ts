/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MetadataService {
    /**
     * Metadata for specific instance; see https://docs.inventree.org/en/stable/plugins/metadata/ for more detail on how metadata works. Most core models support metadata.
     * @param lookupField
     * @param lookupValue
     * @param model
     * @returns any No response body
     * @throws ApiError
     */
    public static metadataRetrieve(
        lookupField: string,
        lookupValue: string,
        model: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/metadata/{model}/{lookup_field}/{lookup_value}/',
            path: {
                'lookup_field': lookupField,
                'lookup_value': lookupValue,
                'model': model,
            },
        });
    }
    /**
     * Metadata for specific instance; see https://docs.inventree.org/en/stable/plugins/metadata/ for more detail on how metadata works. Most core models support metadata.
     * @param lookupField
     * @param lookupValue
     * @param model
     * @returns any No response body
     * @throws ApiError
     */
    public static metadataUpdate(
        lookupField: string,
        lookupValue: string,
        model: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/metadata/{model}/{lookup_field}/{lookup_value}/',
            path: {
                'lookup_field': lookupField,
                'lookup_value': lookupValue,
                'model': model,
            },
        });
    }
    /**
     * Metadata for specific instance; see https://docs.inventree.org/en/stable/plugins/metadata/ for more detail on how metadata works. Most core models support metadata.
     * @param lookupField
     * @param lookupValue
     * @param model
     * @returns any No response body
     * @throws ApiError
     */
    public static metadataPartialUpdate(
        lookupField: string,
        lookupValue: string,
        model: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/metadata/{model}/{lookup_field}/{lookup_value}/',
            path: {
                'lookup_field': lookupField,
                'lookup_value': lookupValue,
                'model': model,
            },
        });
    }
    /**
     * Perform a GET request to retrieve metadata for the given object.
     * @param id
     * @param model
     * @returns any No response body
     * @throws ApiError
     */
    public static metadataPkRetrieve(
        id: number,
        model: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/metadata/{model}/{id}/',
            path: {
                'id': id,
                'model': model,
            },
        });
    }
    /**
     * Perform a PUT request to update metadata for the given object.
     * @param id
     * @param model
     * @returns any No response body
     * @throws ApiError
     */
    public static metadataPkUpdate(
        id: number,
        model: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/metadata/{model}/{id}/',
            path: {
                'id': id,
                'model': model,
            },
        });
    }
    /**
     * Perform a PATCH request to partially update metadata for the given object.
     * @param id
     * @param model
     * @returns any No response body
     * @throws ApiError
     */
    public static metadataPkPartialUpdate(
        id: number,
        model: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/metadata/{model}/{id}/',
            path: {
                'id': id,
                'model': model,
            },
        });
    }
}
