/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserTypeEnum } from './UserTypeEnum';
/**
 * Serializer for the UserProfile model.
 */
export type PatchedUserProfile = {
    /**
     * Preferred language for the user
     */
    language?: string | null;
    /**
     * Settings for the web UI as JSON - do not edit manually!
     */
    theme?: any;
    /**
     * Settings for the dashboard widgets as JSON - do not edit manually!
     */
    widgets?: any;
    /**
     * Chosen display name for the user
     */
    displayname?: string | null;
    /**
     * Main job title or position
     */
    position?: string | null;
    /**
     * User status message
     */
    status?: string | null;
    /**
     * User location information
     */
    location?: string | null;
    /**
     * User is actively using the system
     */
    active?: boolean;
    /**
     * Preferred contact information for the user
     */
    contact?: string | null;
    /**
     * Which type of user is this?
     *
     * * `bot` - Bot
     * * `internal` - Internal
     * * `external` - External
     * * `guest` - Guest
     */
    type?: UserTypeEnum;
    /**
     * Users primary organisation/affiliation
     */
    organisation?: string | null;
    /**
     * Primary group for the user
     */
    primary_group?: number | null;
};

