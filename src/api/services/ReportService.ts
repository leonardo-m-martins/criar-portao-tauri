/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedReportAssetList } from '../models/PaginatedReportAssetList';
import type { PaginatedReportSnippetList } from '../models/PaginatedReportSnippetList';
import type { PaginatedReportTemplateList } from '../models/PaginatedReportTemplateList';
import type { PatchedReportAsset } from '../models/PatchedReportAsset';
import type { PatchedReportSnippet } from '../models/PatchedReportSnippet';
import type { PatchedReportTemplate } from '../models/PatchedReportTemplate';
import type { ReportAsset } from '../models/ReportAsset';
import type { ReportPrint } from '../models/ReportPrint';
import type { ReportSnippet } from '../models/ReportSnippet';
import type { ReportTemplate } from '../models/ReportTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReportService {
    /**
     * API endpoint for listing ReportAsset objects.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedReportAssetList
     * @throws ApiError
     */
    public static reportAssetList(
        limit: number,
        offset?: number,
    ): CancelablePromise<PaginatedReportAssetList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/report/asset/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * API endpoint for listing ReportAsset objects.
     * @param requestBody
     * @returns ReportAsset
     * @throws ApiError
     */
    public static reportAssetCreate(
        requestBody: ReportAsset,
    ): CancelablePromise<ReportAsset> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/report/asset/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a single ReportAsset object.
     * @param id
     * @returns ReportAsset
     * @throws ApiError
     */
    public static reportAssetRetrieve(
        id: number,
    ): CancelablePromise<ReportAsset> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/report/asset/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for a single ReportAsset object.
     * @param id
     * @param requestBody
     * @returns ReportAsset
     * @throws ApiError
     */
    public static reportAssetUpdate(
        id: number,
        requestBody: ReportAsset,
    ): CancelablePromise<ReportAsset> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/report/asset/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a single ReportAsset object.
     * @param id
     * @param requestBody
     * @returns ReportAsset
     * @throws ApiError
     */
    public static reportAssetPartialUpdate(
        id: number,
        requestBody?: PatchedReportAsset,
    ): CancelablePromise<ReportAsset> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/report/asset/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a single ReportAsset object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static reportAssetDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/report/asset/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * POST action for printing a report.
     * @param requestBody
     * @returns ReportPrint
     * @throws ApiError
     */
    public static reportPrintCreate(
        requestBody: ReportPrint,
    ): CancelablePromise<ReportPrint> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/report/print/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for listing ReportSnippet objects.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedReportSnippetList
     * @throws ApiError
     */
    public static reportSnippetList(
        limit: number,
        offset?: number,
    ): CancelablePromise<PaginatedReportSnippetList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/report/snippet/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * API endpoint for listing ReportSnippet objects.
     * @param requestBody
     * @returns ReportSnippet
     * @throws ApiError
     */
    public static reportSnippetCreate(
        requestBody: ReportSnippet,
    ): CancelablePromise<ReportSnippet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/report/snippet/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a single ReportSnippet object.
     * @param id
     * @returns ReportSnippet
     * @throws ApiError
     */
    public static reportSnippetRetrieve(
        id: number,
    ): CancelablePromise<ReportSnippet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/report/snippet/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for a single ReportSnippet object.
     * @param id
     * @param requestBody
     * @returns ReportSnippet
     * @throws ApiError
     */
    public static reportSnippetUpdate(
        id: number,
        requestBody: ReportSnippet,
    ): CancelablePromise<ReportSnippet> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/report/snippet/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a single ReportSnippet object.
     * @param id
     * @param requestBody
     * @returns ReportSnippet
     * @throws ApiError
     */
    public static reportSnippetPartialUpdate(
        id: number,
        requestBody?: PatchedReportSnippet,
    ): CancelablePromise<ReportSnippet> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/report/snippet/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a single ReportSnippet object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static reportSnippetDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/report/snippet/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for viewing list of ReportTemplate objects.
     * @param limit Number of results to return per page.
     * @param attachToModel
     * @param enabled
     * @param items Items
     * @param landscape
     * @param merge
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
     * @returns PaginatedReportTemplateList
     * @throws ApiError
     */
    public static reportTemplateList(
        limit: number,
        attachToModel?: boolean,
        enabled?: boolean,
        items?: string,
        landscape?: boolean,
        merge?: boolean,
        modelType?: 'build' | 'buildline' | 'company' | 'part' | 'purchaseorder' | 'returnorder' | 'salesorder' | 'salesordershipment' | 'stockitem' | 'stocklocation' | 'transferorder',
        offset?: number,
        ordering?: 'name' | '-name' | 'enabled' | '-enabled',
        search?: string,
    ): CancelablePromise<PaginatedReportTemplateList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/report/template/',
            query: {
                'attach_to_model': attachToModel,
                'enabled': enabled,
                'items': items,
                'landscape': landscape,
                'limit': limit,
                'merge': merge,
                'model_type': modelType,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for viewing list of ReportTemplate objects.
     * @param requestBody
     * @returns ReportTemplate
     * @throws ApiError
     */
    public static reportTemplateCreate(
        requestBody: ReportTemplate,
    ): CancelablePromise<ReportTemplate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/report/template/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for report template model.
     * @param id
     * @returns ReportTemplate
     * @throws ApiError
     */
    public static reportTemplateRetrieve(
        id: number,
    ): CancelablePromise<ReportTemplate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/report/template/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail API endpoint for report template model.
     * @param id
     * @param requestBody
     * @returns ReportTemplate
     * @throws ApiError
     */
    public static reportTemplateUpdate(
        id: number,
        requestBody: ReportTemplate,
    ): CancelablePromise<ReportTemplate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/report/template/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for report template model.
     * @param id
     * @param requestBody
     * @returns ReportTemplate
     * @throws ApiError
     */
    public static reportTemplatePartialUpdate(
        id: number,
        requestBody?: PatchedReportTemplate,
    ): CancelablePromise<ReportTemplate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/report/template/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for report template model.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static reportTemplateDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/report/template/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
