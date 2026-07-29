/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for a PluginConfig.
 */
export type PluginConfig = {
    readonly pk: number;
    /**
     * Key of plugin
     */
    readonly key: string;
    /**
     * Name of the plugin
     */
    name?: string | null;
    /**
     * Name of the installed package, if the plugin was installed via PIP
     */
    package_name?: string | null;
    /**
     * Is the plugin active
     */
    active?: boolean;
    readonly meta: Record<string, any>;
    readonly mixins: Record<string, any>;
    /**
     * Return True if this is a 'builtin' plugin.
     */
    readonly is_builtin: boolean;
    /**
     * Is this plugin a sample app?
     */
    readonly is_sample: boolean;
    /**
     * Simple check to determine if this plugin is installed.
     *
     * A plugin might not be installed if it has been removed from the system,
     * but the PluginConfig associated with it still exists.
     */
    readonly is_installed: boolean;
    /**
     * Return True if this is a 'package' plugin.
     */
    readonly is_package: boolean;
    readonly is_mandatory: boolean;
};

