/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from './Group';
import type { UserProfile } from './UserProfile';
/**
 * API serializer specifically for the 'me' endpoint.
 */
export type MeUser = {
    readonly pk: number;
    /**
     * Username
     */
    username: string;
    /**
     * First name of the user
     */
    first_name: string;
    /**
     * Last name of the user
     */
    last_name: string;
    /**
     * Email address of the user
     */
    email: string;
    readonly groups: Array<Group>;
    /**
     * Does this user have staff permissions
     */
    readonly is_staff: boolean;
    /**
     * Is this user a superuser
     */
    readonly is_superuser: boolean;
    /**
     * Is this user account active
     */
    readonly is_active: boolean;
    readonly profile: UserProfile;
};

