/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { DirectionEnum } from './DirectionEnum';
import type { EmailMessageStatusEnum } from './EmailMessageStatusEnum';
import type { NullEnum } from './NullEnum';
import type { PriorityEnum } from './PriorityEnum';
/**
 * Serializer for the EmailMessage model.
 */
export type EmailMessage = {
    /**
     * Unique identifier for this message
     */
    readonly pk: string;
    /**
     * Unique identifier for this message
     */
    readonly global_id: string;
    /**
     * Identifier for this message (might be supplied by external system)
     */
    message_id_key?: string | null;
    /**
     * Identifier for this message thread (might be supplied by external system)
     */
    thread_id_key?: string | null;
    /**
     * Linked thread for this message
     */
    thread?: string | null;
    subject: string;
    body: string;
    to: string;
    sender: string;
    status?: (EmailMessageStatusEnum | BlankEnum | NullEnum) | null;
    readonly timestamp: string;
    headers?: any;
    full_message?: string | null;
    direction?: (DirectionEnum | BlankEnum | NullEnum) | null;
    priority: PriorityEnum;
    error_code?: string | null;
    error_message?: string | null;
    error_timestamp?: string | null;
    delivery_options?: any;
};

