/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImportRequest } from '../models/ImportRequest';
import type { ImportResult } from '../models/ImportResult';
import type { SearchResult } from '../models/SearchResult';
import type { SupplierList } from '../models/SupplierList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupplierService {
    /**
     * Import a part by supplier.
     * @param requestBody
     * @returns ImportResult
     * @throws ApiError
     */
    public static supplierImportCreate(
        requestBody: ImportRequest,
    ): CancelablePromise<ImportResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/supplier/import/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all available supplier plugins.
     * @returns SupplierList
     * @throws ApiError
     */
    public static supplierListList(): CancelablePromise<Array<SupplierList>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/supplier/list/',
        });
    }
    /**
     * Search parts by supplier.
     * @param plugin Plugin slug
     * @param supplier Supplier slug
     * @param term Search term
     * @returns SearchResult
     * @throws ApiError
     */
    public static supplierSearchList(
        plugin: string,
        supplier: string,
        term: string,
    ): CancelablePromise<Array<SearchResult>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/supplier/search/',
            query: {
                'plugin': plugin,
                'supplier': supplier,
                'term': term,
            },
        });
    }
}
