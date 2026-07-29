/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for an individual failed task object.
 */
export type FailedTask = {
    readonly pk: string;
    /**
     * Optional human-readable name for lookup and display.
     */
    readonly name: string;
    /**
     * Dotted import path to the callable, e.g. myapp.tasks.job.
     */
    func: string;
    /**
     * Pickled positional arguments (tuple).
     */
    readonly args?: string | null;
    /**
     * Pickled keyword arguments (dict).
     */
    readonly kwargs?: string | null;
    /**
     * When the worker started executing the task.
     */
    readonly started: string;
    /**
     * When the worker finished (success or failure).
     */
    readonly stopped: string;
    /**
     * How many times execution was attempted.
     */
    attempt_count?: number;
    result: string;
};

