/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressBrief } from './AddressBrief';
import type { Contact } from './Contact';
import type { DuplicateOrder } from './DuplicateOrder';
import type { Location } from './Location';
import type { Owner } from './Owner';
import type { Parameter } from './Parameter';
import type { ProjectCode } from './ProjectCode';
import type { User } from './User';
/**
 * Serializer for a TransferOrder object.
 */
export type PatchedTransferOrder = {
    readonly pk?: number;
    readonly created_by?: User;
    creation_date?: string | null;
    /**
     * Date order was issued
     */
    issue_date?: string | null;
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
     * Source for transferred items
     */
    take_from?: number | null;
    readonly take_from_detail?: Location | null;
    /**
     * Destination for transferred items
     */
    destination?: number | null;
    readonly destination_detail?: Location | null;
    /**
     * Rather than transfer the stock to the destination, "consume" it, by removing transferred quantity from the allocated stock item
     */
    consume?: boolean;
    /**
     * Date order was completed
     */
    complete_date?: string | null;
    tags?: Array<string>;
    readonly parameters?: Array<Parameter> | null;
};

