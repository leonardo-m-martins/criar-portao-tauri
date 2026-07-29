/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { DataImportAcceptRow } from '../models/DataImportAcceptRow';
import type { DataImportColumnMap } from '../models/DataImportColumnMap';
import type { DataImporterModel } from '../models/DataImporterModel';
import type { DataImportRow } from '../models/DataImportRow';
import type { DataImportSession } from '../models/DataImportSession';
import type { PaginatedDataImportColumnMapList } from '../models/PaginatedDataImportColumnMapList';
import type { PaginatedDataImportRowList } from '../models/PaginatedDataImportRowList';
import type { PaginatedDataImportSessionList } from '../models/PaginatedDataImportSessionList';
import type { PatchedDataImportColumnMap } from '../models/PatchedDataImportColumnMap';
import type { PatchedDataImportRow } from '../models/PatchedDataImportRow';
import type { PatchedDataImportSession } from '../models/PatchedDataImportSession';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ImporterService {
    /**
     * API endpoint for accessing a list of DataImportColumnMap objects.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param session
     * @returns PaginatedDataImportColumnMapList
     * @throws ApiError
     */
    public static importerColumnMappingList(
        limit: number,
        offset?: number,
        ordering?: string,
        search?: string,
        session?: number,
    ): CancelablePromise<PaginatedDataImportColumnMapList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/importer/column-mapping/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
                'session': session,
            },
        });
    }
    /**
     * Detail endpoint for a single DataImportColumnMap object.
     * @param id
     * @returns DataImportColumnMap
     * @throws ApiError
     */
    public static importerColumnMappingRetrieve(
        id: number,
    ): CancelablePromise<DataImportColumnMap> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/importer/column-mapping/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for a single DataImportColumnMap object.
     * @param id
     * @param requestBody
     * @returns DataImportColumnMap
     * @throws ApiError
     */
    public static importerColumnMappingUpdate(
        id: number,
        requestBody?: DataImportColumnMap,
    ): CancelablePromise<DataImportColumnMap> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/importer/column-mapping/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single DataImportColumnMap object.
     * @param id
     * @param requestBody
     * @returns DataImportColumnMap
     * @throws ApiError
     */
    public static importerColumnMappingPartialUpdate(
        id: number,
        requestBody?: PatchedDataImportColumnMap,
    ): CancelablePromise<DataImportColumnMap> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/importer/column-mapping/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Return a list of models available for import.
     * @returns DataImporterModel
     * @throws ApiError
     */
    public static importerModelsList(): CancelablePromise<Array<DataImporterModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/importer/models/',
        });
    }
    /**
     * API endpoint for accessing a list of DataImportRow objects.
     * @param limit Number of results to return per page.
     * @param complete
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param session
     * @param valid
     * @returns PaginatedDataImportRowList
     * @throws ApiError
     */
    public static importerRowList(
        limit: number,
        complete?: boolean,
        offset?: number,
        ordering?: 'pk' | '-pk' | 'row_index' | '-row_index' | 'valid' | '-valid',
        search?: string,
        session?: number,
        valid?: boolean,
    ): CancelablePromise<PaginatedDataImportRowList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/importer/row/',
            query: {
                'complete': complete,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
                'session': session,
                'valid': valid,
            },
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
    public static importerRowBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/importer/row/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single DataImportRow object.
     * @param id
     * @returns DataImportRow
     * @throws ApiError
     */
    public static importerRowRetrieve(
        id: number,
    ): CancelablePromise<DataImportRow> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/importer/row/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for a single DataImportRow object.
     * @param id
     * @param requestBody
     * @returns DataImportRow
     * @throws ApiError
     */
    public static importerRowUpdate(
        id: number,
        requestBody?: DataImportRow,
    ): CancelablePromise<DataImportRow> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/importer/row/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single DataImportRow object.
     * @param id
     * @param requestBody
     * @returns DataImportRow
     * @throws ApiError
     */
    public static importerRowPartialUpdate(
        id: number,
        requestBody?: PatchedDataImportRow,
    ): CancelablePromise<DataImportRow> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/importer/row/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single DataImportRow object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static importerRowDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/importer/row/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for accessing a list of DataImportSession objects.
     * @param limit Number of results to return per page.
     * @param modelType
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param status Import status
     *
     * * `0` - Initializing
     * * `10` - Mapping Columns
     * * `20` - Importing Data
     * * `30` - Processing Data
     * * `40` - Complete
     * @param user
     * @returns PaginatedDataImportSessionList
     * @throws ApiError
     */
    public static importerSessionList(
        limit: number,
        modelType?: string,
        offset?: number,
        ordering?: 'timestamp' | '-timestamp' | 'status' | '-status' | 'model_type' | '-model_type',
        search?: string,
        status?: 0 | 10 | 20 | 30 | 40,
        user?: number,
    ): CancelablePromise<PaginatedDataImportSessionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/importer/session/',
            query: {
                'limit': limit,
                'model_type': modelType,
                'offset': offset,
                'ordering': ordering,
                'search': search,
                'status': status,
                'user': user,
            },
        });
    }
    /**
     * API endpoint for accessing a list of DataImportSession objects.
     * @param requestBody
     * @returns DataImportSession
     * @throws ApiError
     */
    public static importerSessionCreate(
        requestBody: DataImportSession,
    ): CancelablePromise<DataImportSession> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/importer/session/',
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
    public static importerSessionBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/importer/session/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single DataImportSession object.
     * @param id
     * @returns DataImportSession
     * @throws ApiError
     */
    public static importerSessionRetrieve(
        id: number,
    ): CancelablePromise<DataImportSession> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/importer/session/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for a single DataImportSession object.
     * @param id
     * @param requestBody
     * @returns DataImportSession
     * @throws ApiError
     */
    public static importerSessionUpdate(
        id: number,
        requestBody: DataImportSession,
    ): CancelablePromise<DataImportSession> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/importer/session/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single DataImportSession object.
     * @param id
     * @param requestBody
     * @returns DataImportSession
     * @throws ApiError
     */
    public static importerSessionPartialUpdate(
        id: number,
        requestBody?: PatchedDataImportSession,
    ): CancelablePromise<DataImportSession> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/importer/session/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single DataImportSession object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static importerSessionDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/importer/session/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Accept the field mapping for a DataImportSession.
     * @param id
     * @returns DataImportSession
     * @throws ApiError
     */
    public static importerSessionAcceptFieldsCreate(
        id: number,
    ): CancelablePromise<DataImportSession> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/importer/session/{id}/accept_fields/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to accept the rows for a DataImportSession.
     * @param id
     * @param requestBody
     * @returns DataImportAcceptRow
     * @throws ApiError
     */
    public static importerSessionAcceptRowsCreate(
        id: number,
        requestBody: DataImportAcceptRow,
    ): CancelablePromise<DataImportAcceptRow> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/importer/session/{id}/accept_rows/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
