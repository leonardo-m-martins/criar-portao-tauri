/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartBrief } from './PartBrief';
/**
 * Serializer for the BomItemSubstitute class.
 */
export type BomItemSubstitute = {
    readonly pk: number;
    /**
     * Parent BOM item
     */
    bom_item: number;
    /**
     * Substitute part
     */
    part: number;
    readonly part_detail: PartBrief;
};

