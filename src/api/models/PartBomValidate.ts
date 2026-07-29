/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
/**
 * Serializer for Part BOM information.
 */
export type PartBomValidate = {
    readonly pk: number;
    /**
     * Is the BOM for this part valid?
     */
    readonly bom_validated: boolean;
    /**
     * Stored BOM checksum
     */
    readonly bom_checksum: string;
    readonly bom_checked_by?: number | null;
    readonly bom_checked_by_detail?: User | null;
    readonly bom_checked_date?: string | null;
    /**
     * Validate entire Bill of Materials
     */
    valid?: boolean;
};

