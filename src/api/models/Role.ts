/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for a roles associated with a given user.
 */
export type Role = {
    user: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string;
    /**
     * Roles associated with the user.
     */
    readonly roles: Record<string, any>;
    /**
     * Permissions associated with the user.
     */
    readonly permissions?: Record<string, any> | null;
    /**
     * Designates whether the user can log into this admin site.
     */
    is_staff?: boolean;
    /**
     * Designates that this user has all permissions without explicitly assigning them.
     */
    is_superuser?: boolean;
};

