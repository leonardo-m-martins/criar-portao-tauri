/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Owner } from './Owner';
/**
 * Serializer for the ProjectCode model.
 */
export type ProjectCode = {
    readonly pk: number;
    /**
     * Unique project code
     */
    code: string;
    /**
     * Project description
     */
    description?: string;
    /**
     * User or group responsible for this project
     */
    responsible?: number | null;
    readonly responsible_detail?: Owner | null;
};

