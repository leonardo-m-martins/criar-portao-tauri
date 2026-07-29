/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { Config } from '../models/Config';
import type { EmailMessage } from '../models/EmailMessage';
import type { PaginatedEmailMessageList } from '../models/PaginatedEmailMessageList';
import type { TestEmail } from '../models/TestEmail';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
    /**
     * All accessed/in-use configurations.
     * @returns Config
     * @throws ApiError
     */
    public static adminConfigList(): CancelablePromise<Array<Config>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/config/',
        });
    }
    /**
     * All accessed/in-use configurations.
     * @param key Unique identifier for this configuration
     * @returns Config
     * @throws ApiError
     */
    public static adminConfigRetrieve(
        key: string,
    ): CancelablePromise<Config> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/config/{key}/',
            path: {
                'key': key,
            },
        });
    }
    /**
     * Backend E-Mail management for administrative purposes.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: global_id, message_id_key, sender, subject, thread_id_key, to.
     * @returns PaginatedEmailMessageList
     * @throws ApiError
     */
    public static adminEmailList(
        limit: number,
        offset?: number,
        ordering?: 'created' | '-created' | 'subject' | '-subject' | 'to' | '-to' | 'sender' | '-sender' | 'status' | '-status' | 'timestamp' | '-timestamp' | 'direction' | '-direction',
        search?: string,
    ): CancelablePromise<PaginatedEmailMessageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/email/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
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
    public static adminEmailBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/admin/email/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Backend E-Mail management for administrative purposes.
     * @param globalId
     * @returns EmailMessage
     * @throws ApiError
     */
    public static adminEmailRetrieve(
        globalId: string,
    ): CancelablePromise<EmailMessage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/email/{global_id}/',
            path: {
                'global_id': globalId,
            },
        });
    }
    /**
     * Backend E-Mail management for administrative purposes.
     * @param globalId
     * @returns void
     * @throws ApiError
     */
    public static adminEmailDestroy(
        globalId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/admin/email/{global_id}/',
            path: {
                'global_id': globalId,
            },
        });
    }
    /**
     * Send a test email.
     * @param requestBody
     * @returns TestEmail
     * @throws ApiError
     */
    public static adminEmailTestCreate(
        requestBody: TestEmail,
    ): CancelablePromise<TestEmail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/admin/email/test/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
