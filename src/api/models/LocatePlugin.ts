/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the LocatePluginView API endpoint.
 */
export type LocatePlugin = {
    /**
     * Plugin to use for location identification
     */
    plugin: string;
    /**
     * StockItem to identify
     */
    item?: number;
    /**
     * StockLocation to identify
     */
    location?: number;
};

