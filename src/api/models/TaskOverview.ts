/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for background task overview.
 */
export type TaskOverview = {
    /**
     * Boolean value to indicate if the background worker process is running.
     */
    readonly is_running: boolean;
    /**
     * Number of active background tasks
     */
    readonly pending_tasks: number;
    /**
     * Number of scheduled background tasks
     */
    readonly scheduled_tasks: number;
    /**
     * Number of failed background tasks
     */
    readonly failed_tasks: number;
};

