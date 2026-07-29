/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NameEnum } from './NameEnum';
/**
 * Serializer for a RuleSet.
 */
export type RuleSet = {
    readonly pk: number;
    /**
     * Permission set
     *
     * * `admin` - Admin
     * * `part_category` - Part Categories
     * * `part` - Parts
     * * `bom` - Bills of Material
     * * `stock_location` - Stock Locations
     * * `stock` - Stock Items
     * * `build` - Build Orders
     * * `purchase_order` - Purchase Orders
     * * `sales_order` - Sales Orders
     * * `return_order` - Return Orders
     * * `transfer_order` - Transfer Orders
     */
    readonly name: NameEnum;
    /**
     * Return the translated label for this ruleset.
     */
    readonly label: string;
    /**
     * Group
     */
    readonly group: number;
    /**
     * Permission to view items
     */
    can_view?: boolean;
    /**
     * Permission to add items
     */
    can_add?: boolean;
    /**
     * Permissions to edit items
     */
    can_change?: boolean;
    /**
     * Permission to delete items
     */
    can_delete?: boolean;
};

