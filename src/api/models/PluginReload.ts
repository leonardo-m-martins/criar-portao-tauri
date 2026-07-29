/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for remotely forcing plugin registry reload.
 */
export type PluginReload = {
    /**
     * Perform a full reload of the plugin registry
     */
    full_reload?: boolean;
    /**
     * Force a reload of the plugin registry, even if it is already loaded
     */
    force_reload?: boolean;
    /**
     * Collect plugins and add them to the registry
     */
    collect_plugins?: boolean;
};

