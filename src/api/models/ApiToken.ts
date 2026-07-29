/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
/**
 * Serializer for the ApiToken model.
 */
export type ApiToken = {
    readonly created: string;
    /**
     * Token expiry date
     */
    expiry?: string;
    readonly id: number;
    /**
     * Last time the token was used
     */
    last_seen?: string | null;
    /**
     * Custom token name
     */
    name?: string;
    /**
     * Provide a redacted version of the token.
     *
     * The *raw* key value should never be displayed anywhere!
     */
    readonly token: string;
    /**
     * Test if this token is active.
     */
    readonly active: boolean;
    /**
     * Token has been revoked
     */
    revoked?: boolean;
    user?: number;
    readonly user_detail: User;
    /**
     * Return True if the token is currently used to call the endpoint.
     */
    readonly in_use: boolean;
};

