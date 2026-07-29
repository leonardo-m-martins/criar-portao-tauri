/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressBrief } from './AddressBrief';
import type { Parameter } from './Parameter';
/**
 * Serializer for Company object (full detail).
 */
export type PatchedCompany = {
    readonly pk?: number;
    /**
     * Company name
     */
    name?: string;
    /**
     * Description of the company
     */
    description?: string;
    /**
     * Company website URL
     */
    website?: string;
    /**
     * Contact phone number
     */
    phone?: string;
    email?: string | null;
    /**
     * Default currency used for this supplier
     */
    currency?: string;
    /**
     * Point of contact
     */
    contact?: string;
    /**
     * Link to external company information
     */
    link?: string;
    image?: string | null;
    /**
     * Is this company active?
     */
    active?: boolean;
    /**
     * Do you sell items to this company?
     */
    is_customer?: boolean;
    /**
     * Does this company manufacture parts?
     */
    is_manufacturer?: boolean;
    /**
     * Do you purchase items from this company?
     */
    is_supplier?: boolean;
    /**
     * Markdown notes (optional)
     */
    notes?: string | null;
    readonly parts_supplied?: number;
    readonly parts_manufactured?: number;
    /**
     * Company Tax ID
     */
    tax_id?: string;
    readonly primary_address?: AddressBrief | null;
    tags?: Array<string>;
    readonly parameters?: Array<Parameter> | null;
};

