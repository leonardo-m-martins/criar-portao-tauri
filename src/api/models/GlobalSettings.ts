/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the InvenTreeSetting model.
 */
export type GlobalSettings = {
    readonly pk: number;
    readonly key: string;
    value: string | null;
    readonly name: string;
    readonly description: string;
    readonly type: string;
    readonly units: string;
    /**
     * Returns the choices available for a given item.
     */
    readonly choices: Array<any>;
    readonly model_name?: string | null;
    readonly api_url?: string | null;
    readonly typ: string;
    /**
     * Indicates if the setting is overridden by an environment variable
     */
    readonly read_only: boolean;
    /**
     * Indicates if changing this setting requires confirmation
     */
    readonly confirm: boolean;
    readonly confirm_text: string;
};

