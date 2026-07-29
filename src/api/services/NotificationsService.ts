/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { NotificationMessage } from '../models/NotificationMessage';
import type { PaginatedNotificationMessageList } from '../models/PaginatedNotificationMessageList';
import type { PatchedNotificationMessage } from '../models/PatchedNotificationMessage';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationsService {
    /**
     * Notifications for the current user.
     *
     * - User can only view / delete their own notification objects
     * @param limit Number of results to return per page.
     * @param category
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param read
     * @param search A search term. Searched fields: message, name.
     * @returns PaginatedNotificationMessageList
     * @throws ApiError
     */
    public static notificationsList(
        limit: number,
        category?: string,
        offset?: number,
        ordering?: 'category' | '-category' | 'name' | '-name' | 'read' | '-read' | 'creation' | '-creation',
        read?: boolean,
        search?: string,
    ): CancelablePromise<PaginatedNotificationMessageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/notifications/',
            query: {
                'category': category,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'read': read,
                'search': search,
            },
        });
    }
    /**
     * Perform a bulk delete operation.
     *
     * Provide either a list of ids (via `items`) or a filter (via `filters`) to select the items to be deleted.
     *
     * This action is performed attomically, so either all items will be deleted, or none will be deleted.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static notificationsBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/notifications/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Notifications for the current user.
     *
     * - User can only view / delete their own notification objects
     * @param id A unique integer value identifying this notification message.
     * @returns NotificationMessage
     * @throws ApiError
     */
    public static notificationsRetrieve(
        id: number,
    ): CancelablePromise<NotificationMessage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/notifications/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Notifications for the current user.
     *
     * - User can only view / delete their own notification objects
     * @param id A unique integer value identifying this notification message.
     * @param requestBody
     * @returns NotificationMessage
     * @throws ApiError
     */
    public static notificationsUpdate(
        id: number,
        requestBody: NotificationMessage,
    ): CancelablePromise<NotificationMessage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/notifications/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Notifications for the current user.
     *
     * - User can only view / delete their own notification objects
     * @param id A unique integer value identifying this notification message.
     * @param requestBody
     * @returns NotificationMessage
     * @throws ApiError
     */
    public static notificationsPartialUpdate(
        id: number,
        requestBody?: PatchedNotificationMessage,
    ): CancelablePromise<NotificationMessage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/notifications/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Notifications for the current user.
     *
     * - User can only view / delete their own notification objects
     * @param id A unique integer value identifying this notification message.
     * @returns void
     * @throws ApiError
     */
    public static notificationsDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/notifications/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Set all messages for the current user as read.
     * @param requestBody
     * @returns NotificationMessage
     * @throws ApiError
     */
    public static notificationsReadallCreate(
        requestBody: NotificationMessage,
    ): CancelablePromise<NotificationMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/notifications/readall/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
