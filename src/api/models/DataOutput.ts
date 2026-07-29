/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
/**
 * Serializer for the DataOutput model.
 */
export type DataOutput = {
    readonly pk: number;
    readonly created: string;
    user?: number | null;
    readonly user_detail: User;
    total?: number;
    progress?: number;
    complete?: boolean;
    output_type?: string | null;
    template_name?: string | null;
    plugin?: string | null;
    readonly output?: string | null;
    errors?: any;
};

