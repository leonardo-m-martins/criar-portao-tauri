/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentModelTypeEnum } from './AttachmentModelTypeEnum';
import type { User } from './User';
/**
 * Serializer class for the Attachment model.
 */
export type PatchedAttachment = {
    readonly pk?: number;
    attachment?: string | null;
    readonly thumbnail?: string | null;
    filename?: string;
    /**
     * Link to external URL
     */
    link?: string | null;
    /**
     * Attachment comment
     */
    comment?: string;
    /**
     * True if this attachment is a valid image file
     */
    readonly is_image?: boolean;
    readonly upload_date?: string;
    /**
     * User
     */
    readonly upload_user?: number | null;
    readonly user_detail?: User;
    /**
     * File size in bytes
     */
    readonly file_size?: number;
    model_type?: AttachmentModelTypeEnum;
    model_id?: number;
    tags?: Array<string>;
};

