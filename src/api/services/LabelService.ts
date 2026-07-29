/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelPrint } from '../models/LabelPrint';
import type { LabelTemplate } from '../models/LabelTemplate';
import type { PaginatedLabelTemplateList } from '../models/PaginatedLabelTemplateList';
import type { PatchedLabelTemplate } from '../models/PatchedLabelTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LabelService {
    /**
     * POST action for printing labels.
     * @param requestBody
     * @returns LabelPrint
     * @throws ApiError
     */
    public static labelPrintCreate(
        requestBody: LabelPrint,
    ): CancelablePromise<LabelPrint> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/label/print/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for viewing list of LabelTemplate objects.
     * @param limit Number of results to return per page.
     * @param enabled
     * @param items Items
     * @param modelType Model Type
     *
     * * `build` - Build Order
     * * `buildline` - Build Order Line Item
     * * `company` - Company
     * * `purchaseorder` - Purchase Order
     * * `returnorder` - Return Order
     * * `salesorder` - Sales Order
     * * `salesordershipment` - Sales Order Shipment
     * * `transferorder` - Transfer Order
     * * `part` - Part
     * * `stockitem` - Stock Item
     * * `stocklocation` - Stock Location
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: description, name.
     * @returns PaginatedLabelTemplateList
     * @throws ApiError
     */
    public static labelTemplateList(
        limit: number,
        enabled?: boolean,
        items?: string,
        modelType?: 'build' | 'buildline' | 'company' | 'part' | 'purchaseorder' | 'returnorder' | 'salesorder' | 'salesordershipment' | 'stockitem' | 'stocklocation' | 'transferorder',
        offset?: number,
        ordering?: 'name' | '-name' | 'enabled' | '-enabled' | 'width' | '-width' | 'height' | '-height',
        search?: string,
    ): CancelablePromise<PaginatedLabelTemplateList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/label/template/',
            query: {
                'enabled': enabled,
                'items': items,
                'limit': limit,
                'model_type': modelType,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for viewing list of LabelTemplate objects.
     * @param requestBody
     * @returns LabelTemplate
     * @throws ApiError
     */
    public static labelTemplateCreate(
        requestBody: LabelTemplate,
    ): CancelablePromise<LabelTemplate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/label/template/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for label template model.
     * @param id
     * @returns LabelTemplate
     * @throws ApiError
     */
    public static labelTemplateRetrieve(
        id: number,
    ): CancelablePromise<LabelTemplate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/label/template/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail API endpoint for label template model.
     * @param id
     * @param requestBody
     * @returns LabelTemplate
     * @throws ApiError
     */
    public static labelTemplateUpdate(
        id: number,
        requestBody: LabelTemplate,
    ): CancelablePromise<LabelTemplate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/label/template/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for label template model.
     * @param id
     * @param requestBody
     * @returns LabelTemplate
     * @throws ApiError
     */
    public static labelTemplatePartialUpdate(
        id: number,
        requestBody?: PatchedLabelTemplate,
    ): CancelablePromise<LabelTemplate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/label/template/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for label template model.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static labelTemplateDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/label/template/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
