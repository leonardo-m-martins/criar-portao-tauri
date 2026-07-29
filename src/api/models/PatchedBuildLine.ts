/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BomItem } from './BomItem';
import type { Build } from './Build';
import type { BuildItem } from './BuildItem';
import type { Category } from './Category';
import type { PartBrief } from './PartBrief';
/**
 * Serializer for a BuildItem object.
 */
export type PatchedBuildLine = {
    readonly pk?: number;
    /**
     * Build object
     */
    readonly build?: number;
    readonly bom_item?: number;
    quantity?: number;
    consumed?: number;
    readonly part?: number;
    readonly build_reference?: string;
    readonly reference?: string;
    readonly consumable?: boolean;
    readonly optional?: boolean;
    readonly testable?: boolean;
    readonly trackable?: boolean;
    readonly inherited?: boolean;
    readonly allow_variants?: boolean;
    readonly allocated?: number;
    readonly in_production?: number;
    readonly scheduled_to_build?: number;
    readonly on_order?: number;
    readonly available_stock?: number;
    readonly available_substitute_stock?: number;
    readonly available_variant_stock?: number;
    readonly external_stock?: number;
    readonly assembly_detail?: PartBrief | null;
    readonly category_detail?: Category | null;
    readonly bom_item_detail?: BomItem | null;
    readonly part_detail?: PartBrief | null;
    readonly allocations?: Array<BuildItem> | null;
    readonly build_detail?: Build | null;
};

