/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressBrief } from './AddressBrief';
import type { CompanyBrief } from './CompanyBrief';
import type { Contact } from './Contact';
import type { DuplicateOrder } from './DuplicateOrder';
import type { Owner } from './Owner';
import type { Parameter } from './Parameter';
import type { ProjectCode } from './ProjectCode';
import type { User } from './User';
/**
 * Serializer for a PurchaseOrder object.
 */
export type PatchedPurchaseOrder = {
    readonly pk?: number;
    readonly created_by?: User;
    creation_date?: string | null;
    /**
     * Date order was issued
     */
    readonly issue_date?: string | null;
    /**
     * Scheduled start date for this order
     */
    start_date?: string | null;
    /**
     * Expected date for order delivery. Order will be overdue after this date.
     */
    target_date?: string | null;
    /**
     * Order description (optional)
     */
    description?: string;
    readonly line_items?: number | null;
    readonly completed_lines?: number | null;
    /**
     * Link to external page
     */
    link?: string;
    /**
     * Select project code for this order
     */
    project_code?: number | null;
    reference?: string;
    /**
     * User or group responsible for this order
     */
    responsible?: number | null;
    /**
     * Point of contact for this order
     */
    contact?: number | null;
    /**
     * Company address for this order
     */
    address?: number | null;
    readonly status?: number;
    readonly status_text?: string | null;
    /**
     * Update order status to a custom value for this logical value
     */
    status_custom_key?: number | null;
    /**
     * Markdown notes (optional)
     */
    notes?: string | null;
    readonly barcode_hash?: string;
    readonly overdue?: boolean | null;
    /**
     * Specify options for duplicating this order
     */
    duplicate?: DuplicateOrder;
    readonly address_detail?: AddressBrief | null;
    readonly contact_detail?: Contact | null;
    readonly project_code_detail?: ProjectCode | null;
    readonly project_code_label?: string | null;
    readonly responsible_detail?: Owner | null;
    /**
     * Date order was completed
     */
    readonly complete_date?: string | null;
    /**
     * Company from which the items are being ordered
     */
    supplier?: number | null;
    /**
     * Supplier order reference code
     */
    supplier_reference?: string;
    readonly supplier_name?: string;
    readonly total_price?: string | null;
    /**
     * Currency for this order (leave blank to use company default)
     */
    order_currency?: string | null;
    /**
     * Destination for received items
     */
    destination?: number | null;
    /**
     * Timestamp of last update
     */
    readonly updated_at?: string | null;
    tags?: Array<string>;
    readonly supplier_detail?: CompanyBrief | null;
    readonly parameters?: Array<Parameter> | null;
};

