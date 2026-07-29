/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Available machine types.
 */
export type MachineType = {
    slug: string;
    name: string;
    description: string;
    /**
     * File that contains the class definition.
     */
    readonly provider_file: string;
    /**
     * Plugin(s) that contain(s) the class definition.
     */
    readonly provider_plugin?: Record<string, any> | null;
    /**
     * Indicates if the machine type is build into the InvenTree source code.
     */
    readonly is_builtin: boolean;
};

