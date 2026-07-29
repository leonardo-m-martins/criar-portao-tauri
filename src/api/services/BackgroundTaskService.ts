/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { PaginatedFailedTaskList } from '../models/PaginatedFailedTaskList';
import type { PaginatedPendingTaskList } from '../models/PaginatedPendingTaskList';
import type { PaginatedScheduledTaskList } from '../models/PaginatedScheduledTaskList';
import type { TaskDetail } from '../models/TaskDetail';
import type { TaskOverview } from '../models/TaskOverview';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BackgroundTaskService {
    /**
     * Return information about the current status of the background task queue.
     * @returns TaskOverview
     * @throws ApiError
     */
    public static backgroundTaskOverview(): CancelablePromise<TaskOverview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/background-task/',
        });
    }
    /**
     * Fetch information regarding a particular background task ID.
     * @param taskId
     * @returns TaskDetail
     * @throws ApiError
     */
    public static backgroundTaskRetrieve(
        taskId: string,
    ): CancelablePromise<TaskDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/background-task/{task_id}/',
            path: {
                'task_id': taskId,
            },
        });
    }
    /**
     * Provides a read-only list of currently failed tasks.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: func.
     * @returns PaginatedFailedTaskList
     * @throws ApiError
     */
    public static backgroundTaskFailedList(
        limit: number,
        offset?: number,
        ordering?: 'pk' | '-pk' | 'func' | '-func' | 'started' | '-started' | 'stopped' | '-stopped',
        search?: string,
    ): CancelablePromise<PaginatedFailedTaskList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/background-task/failed/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
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
    public static backgroundTaskFailedBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/background-task/failed/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Provides a read-only list of currently pending tasks.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPendingTaskList
     * @throws ApiError
     */
    public static backgroundTaskPendingList(
        limit: number,
        offset?: number,
    ): CancelablePromise<PaginatedPendingTaskList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/background-task/pending/',
            query: {
                'limit': limit,
                'offset': offset,
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
    public static backgroundTaskPendingBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/background-task/pending/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Provides a read-only list of currently scheduled tasks.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: func, name.
     * @returns PaginatedScheduledTaskList
     * @throws ApiError
     */
    public static backgroundTaskScheduledList(
        limit: number,
        offset?: number,
        ordering?: 'pk' | '-pk' | 'func' | '-func' | 'last_run' | '-last_run' | 'next_run' | '-next_run',
        search?: string,
    ): CancelablePromise<PaginatedScheduledTaskList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/background-task/scheduled/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
}
