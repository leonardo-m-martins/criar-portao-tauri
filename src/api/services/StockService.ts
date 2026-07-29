/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { ConvertStockItem } from '../models/ConvertStockItem';
import type { GenericStateClass } from '../models/GenericStateClass';
import type { InstallStockItem } from '../models/InstallStockItem';
import type { Location } from '../models/Location';
import type { PaginatedLocationList } from '../models/PaginatedLocationList';
import type { PaginatedLocationTreeList } from '../models/PaginatedLocationTreeList';
import type { PaginatedStockItemList } from '../models/PaginatedStockItemList';
import type { PaginatedStockItemTestResultList } from '../models/PaginatedStockItemTestResultList';
import type { PaginatedStockLocationTypeList } from '../models/PaginatedStockLocationTypeList';
import type { PaginatedStockTrackingList } from '../models/PaginatedStockTrackingList';
import type { PatchedLocation } from '../models/PatchedLocation';
import type { PatchedStockItem } from '../models/PatchedStockItem';
import type { PatchedStockItemTestResult } from '../models/PatchedStockItemTestResult';
import type { PatchedStockLocationType } from '../models/PatchedStockLocationType';
import type { SerializeStockItem } from '../models/SerializeStockItem';
import type { StockAdd } from '../models/StockAdd';
import type { StockAssignment } from '../models/StockAssignment';
import type { StockChangeStatus } from '../models/StockChangeStatus';
import type { StockCount } from '../models/StockCount';
import type { StockItem } from '../models/StockItem';
import type { StockItemSerialNumbers } from '../models/StockItemSerialNumbers';
import type { StockItemTestResult } from '../models/StockItemTestResult';
import type { StockLocationType } from '../models/StockLocationType';
import type { StockMerge } from '../models/StockMerge';
import type { StockRemove } from '../models/StockRemove';
import type { StockReturn } from '../models/StockReturn';
import type { StockTracking } from '../models/StockTracking';
import type { StockTransfer } from '../models/StockTransfer';
import type { UninstallStockItem } from '../models/UninstallStockItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StockService {
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param ipn Part IPN (case insensitive)
     * @param ipnContains Part IPN contains (case insensitive)
     * @param ipnRegex Part IPN (regex)
     * @param active Active
     * @param allocated Is Allocated
     * @param ancestor
     * @param assembly Assembly
     * @param available Available
     * @param batch Batch code filter (case insensitive)
     * @param batchRegex Batch code filter (regex)
     * @param belongsTo
     * @param bomItem
     * @param build
     * @param cascade If true, include items in child locations of the given location
     * @param category
     * @param company
     * @param consumed Consumed by Build Order
     * @param consumedBy
     * @param createdAfter Created after
     * @param createdBefore Created before
     * @param customer
     * @param depleted Depleted
     * @param excludeTree Provide a StockItem PK to exclude that item and all its descendants
     * @param expired Expired
     * @param expiryAfter Expiry date after
     * @param expiryBefore Expiry date before
     * @param external External Location
     * @param hasBatch Has batch code
     * @param hasChildItems Has child items
     * @param hasInstalledItems Has installed items
     * @param hasPurchasePrice Has purchase price
     * @param hasStocktake Has Stocktake Date
     * @param inStock In Stock
     * @param includeVariants Include Variants
     * @param installed Installed in other stock item
     * @param isBuilding In production
     * @param location Filter by numeric Location ID or the literal 'null'
     * @param locationDetail Include detailed information about the stock location in the response
     * @param manufacturer
     * @param manufacturerPart Manufacturer Part
     * @param maxStock Maximum stock
     * @param minStock Minimum stock
     * @param name Part name (case insensitive)
     * @param nameContains Part name contains (case insensitive)
     * @param nameRegex Part name (regex)
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part Part
     * @param partDetail Include detailed information about the related part in the response
     * @param partTree
     * @param pathDetail
     * @param purchaseOrder
     * @param salable Salable
     * @param salesOrder
     * @param search A search term. Searched fields: batch, location__name, part__IPN, part__description, part__name, serial, supplier_part__SKU, supplier_part__manufacturer_part__MPN, supplier_part__manufacturer_part__manufacturer__name, supplier_part__supplier__name, tags__name, tags__slug.
     * @param sentToCustomer Sent to customer
     * @param serial Serial number
     * @param serialGte Serial number GTE
     * @param serialLte Serial number LTE
     * @param serialized Has serial number
     * @param stale Stale
     * @param status Status Code
     * @param stocktakeAfter Stocktake After
     * @param stocktakeBefore Stocktake Before
     * @param supplier Supplier
     * @param supplierPart
     * @param supplierPartDetail
     * @param tags Tags
     * @param tagsName
     * @param tagsSlug
     * @param tests
     * @param tracked Tracked
     * @param updatedAfter Updated after
     * @param updatedBefore Updated before
     * @returns PaginatedStockItemList
     * @throws ApiError
     */
    public static stockList(
        limit: number,
        ipn?: string,
        ipnContains?: string,
        ipnRegex?: string,
        active?: boolean,
        allocated?: boolean,
        ancestor?: number,
        assembly?: boolean,
        available?: boolean,
        batch?: string,
        batchRegex?: string,
        belongsTo?: number,
        bomItem?: number,
        build?: number,
        cascade?: boolean,
        category?: number,
        company?: number,
        consumed?: boolean,
        consumedBy?: number,
        createdAfter?: string,
        createdBefore?: string,
        customer?: number,
        depleted?: boolean,
        excludeTree?: number,
        expired?: boolean,
        expiryAfter?: string,
        expiryBefore?: string,
        external?: boolean,
        hasBatch?: boolean,
        hasChildItems?: boolean,
        hasInstalledItems?: boolean,
        hasPurchasePrice?: boolean,
        hasStocktake?: boolean,
        inStock?: boolean,
        includeVariants?: boolean,
        installed?: boolean,
        isBuilding?: boolean,
        location?: number,
        locationDetail: boolean = false,
        manufacturer?: number,
        manufacturerPart?: number,
        maxStock?: number,
        minStock?: number,
        name?: string,
        nameContains?: string,
        nameRegex?: string,
        offset?: number,
        ordering?: 'batch' | '-batch' | 'location' | '-location' | 'part' | '-part' | 'part__name' | '-part__name' | 'part__IPN' | '-part__IPN' | 'updated' | '-updated' | 'purchase_price' | '-purchase_price' | 'creation_date' | '-creation_date' | 'stocktake_date' | '-stocktake_date' | 'expiry_date' | '-expiry_date' | 'packaging' | '-packaging' | 'quantity' | '-quantity' | 'stock' | '-stock' | 'status' | '-status' | 'IPN' | '-IPN' | 'SKU' | '-SKU' | 'MPN' | '-MPN',
        part?: number,
        partDetail: boolean = true,
        partTree?: number,
        pathDetail: boolean = false,
        purchaseOrder?: number,
        salable?: boolean,
        salesOrder?: number,
        search?: string,
        sentToCustomer?: boolean,
        serial?: string,
        serialGte?: number,
        serialLte?: number,
        serialized?: boolean,
        stale?: boolean,
        status?: number,
        stocktakeAfter?: string,
        stocktakeBefore?: string,
        supplier?: number,
        supplierPart?: number,
        supplierPartDetail: boolean = false,
        tags?: string,
        tagsName?: string,
        tagsSlug?: string,
        tests: boolean = false,
        tracked?: boolean,
        updatedAfter?: string,
        updatedBefore?: string,
    ): CancelablePromise<PaginatedStockItemList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/',
            query: {
                'IPN': ipn,
                'IPN_contains': ipnContains,
                'IPN_regex': ipnRegex,
                'active': active,
                'allocated': allocated,
                'ancestor': ancestor,
                'assembly': assembly,
                'available': available,
                'batch': batch,
                'batch_regex': batchRegex,
                'belongs_to': belongsTo,
                'bom_item': bomItem,
                'build': build,
                'cascade': cascade,
                'category': category,
                'company': company,
                'consumed': consumed,
                'consumed_by': consumedBy,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'customer': customer,
                'depleted': depleted,
                'exclude_tree': excludeTree,
                'expired': expired,
                'expiry_after': expiryAfter,
                'expiry_before': expiryBefore,
                'external': external,
                'has_batch': hasBatch,
                'has_child_items': hasChildItems,
                'has_installed_items': hasInstalledItems,
                'has_purchase_price': hasPurchasePrice,
                'has_stocktake': hasStocktake,
                'in_stock': inStock,
                'include_variants': includeVariants,
                'installed': installed,
                'is_building': isBuilding,
                'limit': limit,
                'location': location,
                'location_detail': locationDetail,
                'manufacturer': manufacturer,
                'manufacturer_part': manufacturerPart,
                'max_stock': maxStock,
                'min_stock': minStock,
                'name': name,
                'name_contains': nameContains,
                'name_regex': nameRegex,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'part_detail': partDetail,
                'part_tree': partTree,
                'path_detail': pathDetail,
                'purchase_order': purchaseOrder,
                'salable': salable,
                'sales_order': salesOrder,
                'search': search,
                'sent_to_customer': sentToCustomer,
                'serial': serial,
                'serial_gte': serialGte,
                'serial_lte': serialLte,
                'serialized': serialized,
                'stale': stale,
                'status': status,
                'stocktake_after': stocktakeAfter,
                'stocktake_before': stocktakeBefore,
                'supplier': supplier,
                'supplier_part': supplierPart,
                'supplier_part_detail': supplierPartDetail,
                'tags': tags,
                'tags__name': tagsName,
                'tags__slug': tagsSlug,
                'tests': tests,
                'tracked': tracked,
                'updated_after': updatedAfter,
                'updated_before': updatedBefore,
            },
        });
    }
    /**
     * API endpoint for list view of Stock objects.
     *
     * - GET: Return a list of all StockItem objects (with optional query filters)
     * - POST: Create a new StockItem
     * - DELETE: Delete multiple StockItem objects
     * @param requestBody
     * @returns StockItem
     * @throws ApiError
     */
    public static stockCreate(
        requestBody: StockItem,
    ): CancelablePromise<Array<StockItem>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a PUT operation against this list endpoint.
     *
     * Simply redirects to the PATCH method.
     * @param requestBody
     * @returns StockItem
     * @throws ApiError
     */
    public static stockBulkUpdate(
        requestBody: StockItem,
    ): CancelablePromise<StockItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/stock/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a PATCH operation against this list endpoint.
     *
     * Note that the typical DRF list endpoint does not support PATCH,
     * so this method is provided as a custom implementation.
     * @param requestBody
     * @returns StockItem
     * @throws ApiError
     */
    public static stockBulkPartialUpdate(
        requestBody?: PatchedStockItem,
    ): CancelablePromise<StockItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/stock/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a DELETE operation against this list endpoint.
     *
     * Note that the typical DRF list endpoint does not support DELETE,
     * so this method is provided as a custom implementation.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static stockBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/stock/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for a single StockItem instance.
     * @param id
     * @param locationDetail Include detailed information about the stock location in the response
     * @param partDetail Include detailed information about the related part in the response
     * @param pathDetail
     * @param supplierPartDetail
     * @param tests
     * @returns StockItem
     * @throws ApiError
     */
    public static stockRetrieve(
        id: number,
        locationDetail: boolean = false,
        partDetail: boolean = true,
        pathDetail: boolean = false,
        supplierPartDetail: boolean = false,
        tests: boolean = false,
    ): CancelablePromise<StockItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/{id}/',
            path: {
                'id': id,
            },
            query: {
                'location_detail': locationDetail,
                'part_detail': partDetail,
                'path_detail': pathDetail,
                'supplier_part_detail': supplierPartDetail,
                'tests': tests,
            },
        });
    }
    /**
     * API detail endpoint for a single StockItem instance.
     * @param id
     * @param requestBody
     * @returns StockItem
     * @throws ApiError
     */
    public static stockUpdate(
        id: number,
        requestBody: StockItem,
    ): CancelablePromise<StockItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/stock/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for a single StockItem instance.
     * @param id
     * @param requestBody
     * @returns StockItem
     * @throws ApiError
     */
    public static stockPartialUpdate(
        id: number,
        requestBody?: PatchedStockItem,
    ): CancelablePromise<StockItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/stock/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for a single StockItem instance.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static stockDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/stock/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for converting a stock item to a variant part.
     * @param id
     * @param requestBody
     * @returns ConvertStockItem
     * @throws ApiError
     */
    public static stockConvertCreate(
        id: number,
        requestBody: ConvertStockItem,
    ): CancelablePromise<ConvertStockItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/{id}/convert/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for installing a particular stock item into this stock item.
     *
     * - stock_item.part must be in the BOM for this part
     * - stock_item must currently be "in stock"
     * - stock_item must be serialized (and not belong to another item)
     * @param id
     * @param requestBody
     * @returns InstallStockItem
     * @throws ApiError
     */
    public static stockInstallCreate(
        id: number,
        requestBody: InstallStockItem,
    ): CancelablePromise<InstallStockItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/{id}/install/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * View extra serial number information for a given stock item.
     *
     * Provides information on the "previous" and "next" stock items,
     * based on the serial number of the given stock item.
     * @param id
     * @returns StockItemSerialNumbers
     * @throws ApiError
     */
    public static stockSerialNumbersRetrieve(
        id: number,
    ): CancelablePromise<StockItemSerialNumbers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/{id}/serial-numbers/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for serializing a stock item.
     * @param id
     * @param requestBody
     * @returns StockItem
     * @throws ApiError
     */
    public static stockSerializeCreate(
        id: number,
        requestBody: SerializeStockItem,
    ): CancelablePromise<Array<StockItem>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/{id}/serialize/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for removing (uninstalling) items from this item.
     * @param id
     * @param requestBody
     * @returns UninstallStockItem
     * @throws ApiError
     */
    public static stockUninstallCreate(
        id: number,
        requestBody: UninstallStockItem,
    ): CancelablePromise<UninstallStockItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/{id}/uninstall/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint for adding a quantity of stock to an existing StockItem.
     * @param requestBody
     * @returns StockAdd
     * @throws ApiError
     */
    public static stockAddCreate(
        requestBody: StockAdd,
    ): CancelablePromise<StockAdd> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/add/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for assigning stock to a particular customer.
     * @param requestBody
     * @returns StockAssignment
     * @throws ApiError
     */
    public static stockAssignCreate(
        requestBody: StockAssignment,
    ): CancelablePromise<StockAssignment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/assign/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint to change the status code of multiple StockItem objects.
     * @param requestBody
     * @returns StockChangeStatus
     * @throws ApiError
     */
    public static stockChangeStatusCreate(
        requestBody: StockChangeStatus,
    ): CancelablePromise<StockChangeStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/change_status/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint for counting stock (performing a stocktake).
     * @param requestBody
     * @returns StockCount
     * @throws ApiError
     */
    public static stockCountCreate(
        requestBody: StockCount,
    ): CancelablePromise<StockCount> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/count/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param cascade Include sub-locations in filtered results
     * @param depth Filter by location depth
     * @param external
     * @param hasLocationType has_location_type
     * @param locationType
     * @param name
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param parent Filter by parent location
     * @param pathDetail Include detailed information about the BOM item linked to this build line.
     * @param search A search term. Searched fields: description, name, pathstring, tags__name, tags__slug.
     * @param structural
     * @param tags Tags
     * @param topLevel Filter by top-level locations
     * @returns PaginatedLocationList
     * @throws ApiError
     */
    public static stockLocationList(
        limit: number,
        cascade?: boolean,
        depth?: number,
        external?: boolean,
        hasLocationType?: boolean,
        locationType?: number,
        name?: string,
        offset?: number,
        ordering?: 'name' | '-name' | 'pathstring' | '-pathstring' | 'items' | '-items' | 'level' | '-level' | 'tree_id' | '-tree_id' | 'lft' | '-lft',
        parent?: number,
        pathDetail: boolean = false,
        search?: string,
        structural?: boolean,
        tags?: string,
        topLevel?: boolean,
    ): CancelablePromise<PaginatedLocationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/location/',
            query: {
                'cascade': cascade,
                'depth': depth,
                'external': external,
                'has_location_type': hasLocationType,
                'limit': limit,
                'location_type': locationType,
                'name': name,
                'offset': offset,
                'ordering': ordering,
                'parent': parent,
                'path_detail': pathDetail,
                'search': search,
                'structural': structural,
                'tags': tags,
                'top_level': topLevel,
            },
        });
    }
    /**
     * API endpoint for list view of StockLocation objects.
     *
     * - GET: Return list of StockLocation objects
     * - POST: Create a new StockLocation
     * @param requestBody
     * @returns Location
     * @throws ApiError
     */
    public static stockLocationCreate(
        requestBody: Location,
    ): CancelablePromise<Location> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/location/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a PUT operation against this list endpoint.
     *
     * Simply redirects to the PATCH method.
     * @param requestBody
     * @returns Location
     * @throws ApiError
     */
    public static stockLocationBulkUpdate(
        requestBody: Location,
    ): CancelablePromise<Location> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/stock/location/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a PATCH operation against this list endpoint.
     *
     * Note that the typical DRF list endpoint does not support PATCH,
     * so this method is provided as a custom implementation.
     * @param requestBody
     * @returns Location
     * @throws ApiError
     */
    public static stockLocationBulkPartialUpdate(
        requestBody?: PatchedLocation,
    ): CancelablePromise<Location> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/stock/location/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a list of StockLocationType objects.
     *
     * - GET: Return a list of all StockLocationType objects
     * - POST: Create a StockLocationType
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: name.
     * @returns PaginatedStockLocationTypeList
     * @throws ApiError
     */
    public static stockLocationTypeList(
        limit: number,
        offset?: number,
        ordering?: 'name' | '-name' | 'location_count' | '-location_count' | 'icon' | '-icon',
        search?: string,
    ): CancelablePromise<PaginatedStockLocationTypeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/location-type/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for a list of StockLocationType objects.
     *
     * - GET: Return a list of all StockLocationType objects
     * - POST: Create a StockLocationType
     * @param requestBody
     * @returns StockLocationType
     * @throws ApiError
     */
    public static stockLocationTypeCreate(
        requestBody: StockLocationType,
    ): CancelablePromise<StockLocationType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/location-type/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for a StockLocationType object.
     *
     * - GET: return a single StockLocationType
     * - PUT: update a StockLocationType
     * - PATCH: partial update a StockLocationType
     * - DELETE: delete a StockLocationType
     * @param id
     * @returns StockLocationType
     * @throws ApiError
     */
    public static stockLocationTypeRetrieve(
        id: number,
    ): CancelablePromise<StockLocationType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/location-type/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API detail endpoint for a StockLocationType object.
     *
     * - GET: return a single StockLocationType
     * - PUT: update a StockLocationType
     * - PATCH: partial update a StockLocationType
     * - DELETE: delete a StockLocationType
     * @param id
     * @param requestBody
     * @returns StockLocationType
     * @throws ApiError
     */
    public static stockLocationTypeUpdate(
        id: number,
        requestBody: StockLocationType,
    ): CancelablePromise<StockLocationType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/stock/location-type/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for a StockLocationType object.
     *
     * - GET: return a single StockLocationType
     * - PUT: update a StockLocationType
     * - PATCH: partial update a StockLocationType
     * - DELETE: delete a StockLocationType
     * @param id
     * @param requestBody
     * @returns StockLocationType
     * @throws ApiError
     */
    public static stockLocationTypePartialUpdate(
        id: number,
        requestBody?: PatchedStockLocationType,
    ): CancelablePromise<StockLocationType> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/stock/location-type/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for a StockLocationType object.
     *
     * - GET: return a single StockLocationType
     * - PUT: update a StockLocationType
     * - PATCH: partial update a StockLocationType
     * - DELETE: delete a StockLocationType
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static stockLocationTypeDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/stock/location-type/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Custom get method to pass kwargs.
     * @param id
     * @param pathDetail Include detailed information about the BOM item linked to this build line.
     * @returns Location
     * @throws ApiError
     */
    public static stockLocationRetrieve(
        id: number,
        pathDetail: boolean = false,
    ): CancelablePromise<Location> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/location/{id}/',
            path: {
                'id': id,
            },
            query: {
                'path_detail': pathDetail,
            },
        });
    }
    /**
     * Custom put method to pass kwargs.
     * @param id
     * @param requestBody
     * @returns Location
     * @throws ApiError
     */
    public static stockLocationUpdate(
        id: number,
        requestBody: Location,
    ): CancelablePromise<Location> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/stock/location/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Custom patch method to pass kwargs.
     * @param id
     * @param requestBody
     * @returns Location
     * @throws ApiError
     */
    public static stockLocationPartialUpdate(
        id: number,
        requestBody?: PatchedLocation,
    ): CancelablePromise<Location> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/stock/location/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Custom delete method to pass kwargs.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static stockLocationDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/stock/location/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for accessing a list of StockLocation objects, ready for rendering as a tree.
     * @param limit Number of results to return per page.
     * @param level
     * @param maxLevel Limit the depth of the category tree
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param parent
     * @param search A search term. Searched fields: description, name.
     * @param treeId
     * @returns PaginatedLocationTreeList
     * @throws ApiError
     */
    public static stockLocationTreeList(
        limit: number,
        level?: number,
        maxLevel?: number,
        offset?: number,
        ordering?: 'level' | '-level' | 'name' | '-name' | 'subcategories' | '-subcategories',
        parent?: number,
        search?: string,
        treeId?: number,
    ): CancelablePromise<PaginatedLocationTreeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/location/tree/',
            query: {
                'level': level,
                'limit': limit,
                'max_level': maxLevel,
                'offset': offset,
                'ordering': ordering,
                'parent': parent,
                'search': search,
                'tree_id': treeId,
            },
        });
    }
    /**
     * API endpoint for merging multiple stock items.
     * @param requestBody
     * @returns StockMerge
     * @throws ApiError
     */
    public static stockMergeCreate(
        requestBody: StockMerge,
    ): CancelablePromise<StockMerge> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/merge/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint for removing a quantity of stock from an existing StockItem.
     * @param requestBody
     * @returns StockRemove
     * @throws ApiError
     */
    public static stockRemoveCreate(
        requestBody: StockRemove,
    ): CancelablePromise<StockRemove> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/remove/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for returning items into stock.
     *
     * This API endpoint is for items that are initially considered "not in stock",
     * and the user wants to return them to stock, marking them as
     * "available" for further consumption or sale.
     * @param requestBody
     * @returns StockReturn
     * @throws ApiError
     */
    public static stockReturnCreate(
        requestBody: StockReturn,
    ): CancelablePromise<StockReturn> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/return/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve information about a specific status code
     * @returns GenericStateClass
     * @throws ApiError
     */
    public static stockStatusRetrieve(): CancelablePromise<GenericStateClass> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/status/',
            errors: {
                400: `Invalid request`,
            },
        });
    }
    /**
     * API endpoint for listing (and creating) a StockItemTestResult object.
     * @param limit Number of results to return per page.
     * @param build Build
     * @param enabled Enabled
     * @param includeInstalled If true, include test results for items installed underneath the given stock item
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part Part
     * @param required Required
     * @param result
     * @param search A search term.
     * @param stockItem Filter by numeric Stock Item ID
     * @param template
     * @param templateDetail
     * @param test Test name (case insensitive)
     * @param user
     * @param userDetail
     * @param value
     * @returns PaginatedStockItemTestResultList
     * @throws ApiError
     */
    public static stockTestList(
        limit: number,
        build?: number,
        enabled?: boolean,
        includeInstalled?: boolean,
        offset?: number,
        ordering?: 'date' | '-date' | 'result' | '-result' | 'started_datetime' | '-started_datetime' | 'finished_datetime' | '-finished_datetime' | 'test_station' | '-test_station',
        part?: number,
        required?: boolean,
        result?: boolean,
        search?: string,
        stockItem?: number,
        template?: number,
        templateDetail: boolean = false,
        test?: string,
        user?: number,
        userDetail: boolean = false,
        value?: string,
    ): CancelablePromise<PaginatedStockItemTestResultList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/test/',
            query: {
                'build': build,
                'enabled': enabled,
                'include_installed': includeInstalled,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'required': required,
                'result': result,
                'search': search,
                'stock_item': stockItem,
                'template': template,
                'template_detail': templateDetail,
                'test': test,
                'user': user,
                'user_detail': userDetail,
                'value': value,
            },
        });
    }
    /**
     * API endpoint for listing (and creating) a StockItemTestResult object.
     * @param requestBody
     * @returns StockItemTestResult
     * @throws ApiError
     */
    public static stockTestCreate(
        requestBody: StockItemTestResult,
    ): CancelablePromise<StockItemTestResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/test/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a DELETE operation against this list endpoint.
     *
     * Note that the typical DRF list endpoint does not support DELETE,
     * so this method is provided as a custom implementation.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static stockTestBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/stock/test/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for StockItemTestResult.
     * @param id
     * @param templateDetail
     * @param userDetail
     * @returns StockItemTestResult
     * @throws ApiError
     */
    public static stockTestRetrieve(
        id: number,
        templateDetail: boolean = false,
        userDetail: boolean = false,
    ): CancelablePromise<StockItemTestResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/test/{id}/',
            path: {
                'id': id,
            },
            query: {
                'template_detail': templateDetail,
                'user_detail': userDetail,
            },
        });
    }
    /**
     * Detail endpoint for StockItemTestResult.
     * @param id
     * @param requestBody
     * @returns StockItemTestResult
     * @throws ApiError
     */
    public static stockTestUpdate(
        id: number,
        requestBody: StockItemTestResult,
    ): CancelablePromise<StockItemTestResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/stock/test/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for StockItemTestResult.
     * @param id
     * @param requestBody
     * @returns StockItemTestResult
     * @throws ApiError
     */
    public static stockTestPartialUpdate(
        id: number,
        requestBody?: PatchedStockItemTestResult,
    ): CancelablePromise<StockItemTestResult> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/stock/test/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for StockItemTestResult.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static stockTestDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/stock/test/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param includeVariants Include Part Variants
     * @param item
     * @param itemDetail Include detailed information about the item in the response
     * @param maxDate Date before
     * @param minDate Date after
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part Part
     * @param search A search term. Searched fields: notes.
     * @param user
     * @param userDetail
     * @returns PaginatedStockTrackingList
     * @throws ApiError
     */
    public static stockTrackList(
        limit: number,
        includeVariants?: boolean,
        item?: number,
        itemDetail: boolean = false,
        maxDate?: string,
        minDate?: string,
        offset?: number,
        ordering?: 'date' | '-date',
        part?: number,
        search?: string,
        user?: number,
        userDetail: boolean = false,
    ): CancelablePromise<PaginatedStockTrackingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/track/',
            query: {
                'include_variants': includeVariants,
                'item': item,
                'item_detail': itemDetail,
                'limit': limit,
                'max_date': maxDate,
                'min_date': minDate,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'search': search,
                'user': user,
                'user_detail': userDetail,
            },
        });
    }
    /**
     * Detail API endpoint for StockItemTracking model.
     * @param id
     * @returns StockTracking
     * @throws ApiError
     */
    public static stockTrackRetrieve(
        id: number,
    ): CancelablePromise<StockTracking> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/track/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Retrieve information about a specific status code
     * @returns GenericStateClass
     * @throws ApiError
     */
    public static stockTrackStatusRetrieve(): CancelablePromise<GenericStateClass> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stock/track/status/',
            errors: {
                400: `Invalid request`,
            },
        });
    }
    /**
     * API endpoint for performing stock movements.
     * @param requestBody
     * @returns StockTransfer
     * @throws ApiError
     */
    public static stockTransferCreate(
        requestBody: StockTransfer,
    ): CancelablePromise<StockTransfer> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stock/transfer/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
