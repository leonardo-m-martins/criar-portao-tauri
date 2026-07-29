/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for Company object (limited detail).
 */
export type CompanyBrief = {
    readonly pk: number;
    /**
     * Is this company active?
     */
    active?: boolean;
    /**
     * Company name
     */
    name: string;
    /**
     * Description of the company
     */
    description?: string;
    readonly image: string;
    readonly thumbnail: string;
    /**
     * Default currency used for this company
     */
    readonly currency: string;
    /**
     * Company Tax ID
     */
    tax_id?: string;
};

