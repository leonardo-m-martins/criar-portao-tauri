/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for installing a new plugin.
 */
export type PluginConfigInstall = {
    /**
     * Source for the package - this can be a custom registry or a VCS path
     */
    url?: string;
    /**
     * Name for the Plugin Package - can also contain a version indicator
     */
    packagename?: string;
    /**
     * Version specifier for the plugin. Leave blank for latest version.
     */
    version?: string;
    /**
     * This will install this plugin now into the current instance. The instance will go into maintenance.
     */
    confirm: boolean;
};

