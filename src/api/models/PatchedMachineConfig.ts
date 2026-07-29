/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MachineProperty } from './MachineProperty';
/**
 * Serializer for a MachineConfig.
 */
export type PatchedMachineConfig = {
    readonly pk?: string;
    /**
     * Name of machine
     */
    name?: string;
    /**
     * Type of machine
     */
    readonly machine_type?: string;
    /**
     * Driver used for the machine
     */
    readonly driver?: string;
    /**
     * Indicator if machine is initialized.
     */
    readonly initialized?: boolean;
    /**
     * Machines can be disabled
     */
    active?: boolean;
    /**
     * Numerical machine status if available, else -1.
     */
    readonly status?: number;
    /**
     * Textual machine status name if available, else None.
     */
    readonly status_model?: string | null;
    /**
     * Current status text for machine.
     */
    readonly status_text?: string;
    /**
     * List of machine errors.
     */
    readonly machine_errors?: Array<string>;
    /**
     * Indicator if driver for machine is available.
     */
    readonly is_driver_available?: boolean;
    /**
     * Indicator if machine restart is required.
     */
    readonly restart_required?: boolean;
    readonly properties?: Array<MachineProperty>;
};

