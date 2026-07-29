/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RuleSet } from './RuleSet';
import type { User } from './User';
/**
 * Serializer for a 'Group'.
 */
export type PatchedGroup = {
    readonly pk?: number;
    name?: string;
    readonly roles?: Array<RuleSet> | null;
    readonly users?: Array<User> | null;
    /**
     * Return a list of permissions associated with the group.
     */
    readonly permissions?: Record<string, any> | null;
};

