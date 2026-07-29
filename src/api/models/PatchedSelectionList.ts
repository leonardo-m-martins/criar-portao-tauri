/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SelectionEntry } from './SelectionEntry';
/**
 * Serializer for a selection list.
 */
export type PatchedSelectionList = {
    readonly pk?: number;
    /**
     * Name of the selection list
     */
    name?: string;
    /**
     * Description of the selection list
     */
    description?: string;
    /**
     * Can this selection list be used?
     */
    active?: boolean;
    /**
     * Is this selection list locked?
     */
    locked?: boolean;
    /**
     * Plugin which provides the selection list
     */
    source_plugin?: number | null;
    /**
     * Optional string identifying the source used for this list
     */
    source_string?: string;
    readonly default?: SelectionEntry | null;
    /**
     * Date and time that the selection list was created
     */
    readonly created?: string;
    /**
     * Date and time that the selection list was last updated
     */
    readonly last_updated?: string;
    readonly entry_count?: number;
    readonly choices?: Array<SelectionEntry>;
};

