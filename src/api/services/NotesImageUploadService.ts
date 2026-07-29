/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotesImage } from '../models/NotesImage';
import type { PaginatedNotesImageList } from '../models/PaginatedNotesImageList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotesImageUploadService {
    /**
     * List view for all notes images.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: model_id, model_type, user.
     * @returns PaginatedNotesImageList
     * @throws ApiError
     */
    public static notesImageUploadList(
        limit: number,
        offset?: number,
        ordering?: string,
        search?: string,
    ): CancelablePromise<PaginatedNotesImageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/notes-image-upload/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * List view for all notes images.
     * @param requestBody
     * @returns NotesImage
     * @throws ApiError
     */
    public static notesImageUploadCreate(
        requestBody: NotesImage,
    ): CancelablePromise<NotesImage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/notes-image-upload/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
