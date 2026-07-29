/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BriefUserProfile } from './BriefUserProfile';
import type { Group } from './Group';
/**
 * Serializer for a User with a bit more info.
 */
export type ExtendedUser = {
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
    group_ids?: Array<number>;
    /**
     * Does this user have administrative permissions
     */
    is_staff?: boolean;
    /**
     * Is this user a superuser
     */
    is_superuser?: boolean;
    /**
     * Is this user account active
     */
    is_active?: boolean;
    readonly profile: BriefUserProfile;
};

