/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Part } from './Part';
/**
 * Serializer for a PartRelated model.
 */
export type PartRelation = {
    readonly pk: number;
    part_1: number;
    readonly part_1_detail: Part;
    /**
     * Select Related Part
     */
    part_2: number;
    readonly part_2_detail: Part;
    /**
     * Note for this relationship
     */
    note?: string;
};

