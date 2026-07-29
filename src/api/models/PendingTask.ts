/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for an individual pending task object.
 */
export type PendingTask = {
    readonly pk: number;
    /**
     * Name of the target cluster
     */
    key: string;
    /**
     * Lock time
     */
    lock: string;
    /**
     * Unique task ID
     */
    task_id: string;
    /**
     * Task name
     */
    name: string;
    /**
     * Function name
     */
    func: string;
    /**
     * Task arguments
     */
    args: string;
    /**
     * Task keyword arguments
     */
    kwargs: string;
};

