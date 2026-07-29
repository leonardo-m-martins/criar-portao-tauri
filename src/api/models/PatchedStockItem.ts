/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationBrief } from './LocationBrief';
import type { PartBrief } from './PartBrief';
import type { StockItemStatusEnum } from './StockItemStatusEnum';
import type { StockItemTestResult } from './StockItemTestResult';
import type { SupplierPart } from './SupplierPart';
import type { TreePath } from './TreePath';
/**
 * Serializer for a StockItem.
 *
 * - Includes serialization for the linked part
 * - Includes serialization for the item location
 */
export type PatchedStockItem = {
    readonly pk?: number;
    /**
     * Base Part
     */
    part?: number;
    quantity?: number;
    /**
     * Serial number for this item
     */
    serial?: string | null;
    /**
     * Batch code for this stock item
     */
    batch?: string | null;
    /**
     * Where is this stock item located?
     */
    location?: number | null;
    /**
     * Is this item installed in another item?
     */
    belongs_to?: number | null;
    /**
     * Build for this stock item
     */
    build?: number | null;
    /**
     * Build order which consumed this stock item
     */
    consumed_by?: number | null;
    /**
     * Customer
     */
    customer?: number | null;
    /**
     * Delete this Stock Item when stock is depleted
     */
    delete_on_deplete?: boolean;
    /**
     * Expiry date for stock item. Stock will be considered expired after this date
     */
    expiry_date?: string | null;
    readonly in_stock?: boolean;
    is_building?: boolean;
    /**
     * Link to external URL
     */
    link?: string;
    /**
     * Markdown notes (optional)
     */
    notes?: string | null;
    /**
     * Select Owner
     */
    owner?: number | null;
    /**
     * Packaging this stock item is stored in
     */
    packaging?: string | null;
    /**
     * Parent stock item
     */
    readonly parent?: number | null;
    /**
     * Purchase order for this stock item
     */
    purchase_order?: number | null;
    readonly purchase_order_reference?: string | null;
    sales_order?: number | null;
    readonly sales_order_reference?: string | null;
    status?: StockItemStatusEnum;
    readonly status_text?: string | null;
    /**
     * Additional status information for this item
     */
    status_custom_key?: number | null;
    /**
     * Select a matching supplier part for this stock item
     */
    supplier_part?: number | null;
    readonly SKU?: string | null;
    readonly MPN?: string | null;
    /**
     * Unique hash of barcode data
     */
    readonly barcode_hash?: string;
    /**
     * Date that this stock item was created
     */
    readonly creation_date?: string | null;
    readonly stocktake_date?: string | null;
    /**
     * Timestamp of last update
     */
    readonly updated?: string | null;
    /**
     * Purchase price of this stock item, per unit or pack
     */
    purchase_price?: string | null;
    /**
     * Purchase currency of this stock item
     */
    purchase_price_currency?: string;
    /**
     * Use pack size when adding: the quantity defined is the number of packs
     */
    use_pack_size?: boolean | null;
    /**
     * Enter serial numbers for new items
     */
    serial_numbers?: string | null;
    readonly allocated?: number | null;
    readonly expired?: boolean | null;
    readonly installed_items?: number | null;
    readonly child_items?: number | null;
    readonly stale?: boolean | null;
    readonly tracking_items?: number | null;
    readonly part_detail?: PartBrief | null;
    tags?: Array<string>;
    readonly tests?: Array<StockItemTestResult> | null;
    readonly location_path?: Array<TreePath> | null;
    readonly location_detail?: LocationBrief | null;
    readonly supplier_part_detail?: SupplierPart | null;
};

