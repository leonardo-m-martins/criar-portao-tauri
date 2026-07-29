/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { Version } from './Version';
/**
 * Serializer for a single version.
 */
export type VersionView = {
    dev: boolean;
    up_to_date: boolean;
    version: Version;
    links: Link;
};

