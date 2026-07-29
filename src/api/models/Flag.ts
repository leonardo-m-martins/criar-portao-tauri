/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for feature flags.
 */
export type Flag = {
    readonly key: string;
    readonly state: string;
    readonly conditions?: Array<Record<string, any>> | null;
};

