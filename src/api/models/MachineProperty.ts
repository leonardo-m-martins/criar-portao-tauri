/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MachinePropertyTypeEnum } from './MachinePropertyTypeEnum';
/**
 * Machine Properties are set by the driver/machine to represent specific state.
 */
export type MachineProperty = {
    /**
     * Key of the property
     */
    key: string;
    /**
     * Value of the property
     */
    value: string;
    /**
     * Grouping of the property
     */
    group?: string;
    /**
     * Type of the property
     *
     * * `str` - str
     * * `bool` - bool
     * * `progress` - progress
     * * `int` - int
     * * `float` - float
     */
    type?: MachinePropertyTypeEnum;
    /**
     * Maximum value for progress type, required if type=progress
     */
    max_progress?: number | null;
};

