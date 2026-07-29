/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the PluginSetting model.
 */
export type PluginSetting = {
    readonly pk: number;
    readonly key: string;
    value: string | null;
    readonly name: string;
    readonly description: string;
    readonly type: string;
    /**
     * Returns the choices available for a given item.
     */
    readonly choices: Array<any>;
    readonly model_name?: string | null;
    readonly model_filters: Record<string, any>;
    readonly api_url?: string | null;
    readonly typ: string;
    readonly units: string;
    readonly required: boolean;
    /**
     * Indicates if changing this setting requires confirmation
     */
    readonly confirm: boolean;
    readonly confirm_text: string;
    readonly plugin: string;
    /**
     * Indicates if the setting is overridden by configuration
     */
    readonly read_only: boolean;
};

