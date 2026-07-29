/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from '../models/Attachment';
import type { BulkRequest } from '../models/BulkRequest';
import type { PaginatedAttachmentList } from '../models/PaginatedAttachmentList';
import type { PatchedAttachment } from '../models/PatchedAttachment';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttachmentService {
    /**
     * List API endpoint for Attachment objects.
     * @param limit Number of results to return per page.
     * @param hasThumbnail Has Thumbnail
     * @param isFile Is File
     * @param isImage
     * @param isLink Is Link
     * @param modelId
     * @param modelType
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: comment, model_id, model_type.
     * @param tags Tags
     * @param uploadUser
     * @returns PaginatedAttachmentList
     * @throws ApiError
     */
    public static attachmentList(
        limit: number,
        hasThumbnail?: boolean,
        isFile?: boolean,
        isImage?: boolean,
        isLink?: boolean,
        modelId?: number,
        modelType?: string,
        offset?: number,
        ordering?: 'model_id' | '-model_id' | 'model_type' | '-model_type' | 'upload_date' | '-upload_date' | 'file_size' | '-file_size',
        search?: string,
        tags?: string,
        uploadUser?: number,
    ): CancelablePromise<PaginatedAttachmentList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attachment/',
            query: {
                'has_thumbnail': hasThumbnail,
                'is_file': isFile,
                'is_image': isImage,
                'is_link': isLink,
                'limit': limit,
                'model_id': modelId,
                'model_type': modelType,
                'offset': offset,
                'ordering': ordering,
                'search': search,
                'tags': tags,
                'upload_user': uploadUser,
            },
        });
    }
    /**
     * List API endpoint for Attachment objects.
     * @param requestBody
     * @returns Attachment
     * @throws ApiError
     */
    public static attachmentCreate(
        requestBody: Attachment,
    ): CancelablePromise<Attachment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/attachment/',
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
    public static attachmentBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/attachment/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for Attachment objects.
     * @param id
     * @returns Attachment
     * @throws ApiError
     */
    public static attachmentRetrieve(
        id: number,
    ): CancelablePromise<Attachment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attachment/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail API endpoint for Attachment objects.
     * @param id
     * @param requestBody
     * @returns Attachment
     * @throws ApiError
     */
    public static attachmentUpdate(
        id: number,
        requestBody: Attachment,
    ): CancelablePromise<Attachment> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/attachment/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for Attachment objects.
     * @param id
     * @param requestBody
     * @returns Attachment
     * @throws ApiError
     */
    public static attachmentPartialUpdate(
        id: number,
        requestBody?: PatchedAttachment,
    ): CancelablePromise<Attachment> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/attachment/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for Attachment objects.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static attachmentDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/attachment/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
