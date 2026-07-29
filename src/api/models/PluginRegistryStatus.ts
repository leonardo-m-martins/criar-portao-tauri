/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PluginRegistryError } from './PluginRegistryError';
/**
 * Serializer for plugin registry status.
 */
export type PluginRegistryStatus = {
    readonly active_plugins: number;
    registry_errors: Array<PluginRegistryError>;
};

