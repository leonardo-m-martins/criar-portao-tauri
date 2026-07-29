/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for a background task detail.
 */
export type TaskDetail = {
    readonly task_id: string;
    readonly exists: boolean;
    readonly pending: boolean;
    readonly complete: boolean;
    readonly success: boolean;
    readonly http_status: number;
};

