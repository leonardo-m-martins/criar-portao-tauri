/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the InvenTreeUserSetting model.
 */
export type PatchedNotificationMessage = {
    readonly pk?: number;
    /**
     * Function to resolve generic object reference to target.
     */
    readonly target?: Record<string, any>;
    /**
     * Function to resolve generic object reference to source.
     */
    readonly source?: Record<string, any>;
    readonly user?: number;
    readonly category?: string;
    readonly name?: string;
    readonly message?: string | null;
    readonly creation?: string;
    /**
     * Age of the message in seconds.
     */
    readonly age?: number;
    /**
     * Humanized age.
     */
    readonly age_human?: string;
    read?: boolean;
};

