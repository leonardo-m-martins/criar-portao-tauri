/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
/**
 * Serializer for barcode scan results.
 */
export type BarcodeScanResult = {
    readonly pk: number;
    /**
     * Barcode data
     */
    readonly data: string;
    /**
     * Date and time of the barcode scan
     */
    readonly timestamp: string;
    /**
     * URL endpoint which processed the barcode
     */
    readonly endpoint?: string | null;
    /**
     * Context data for the barcode scan
     */
    readonly context?: any;
    /**
     * Response data from the barcode scan
     */
    readonly response?: any;
    /**
     * Was the barcode scan successful?
     */
    readonly result: boolean;
    /**
     * User who scanned the barcode
     */
    readonly user?: number | null;
    readonly user_detail: User;
};

