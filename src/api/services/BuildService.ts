/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Build } from '../models/Build';
import type { BuildAllocation } from '../models/BuildAllocation';
import type { BuildAutoAllocation } from '../models/BuildAutoAllocation';
import type { BuildCancel } from '../models/BuildCancel';
import type { BuildComplete } from '../models/BuildComplete';
import type { BuildConsume } from '../models/BuildConsume';
import type { BuildItem } from '../models/BuildItem';
import type { BuildLine } from '../models/BuildLine';
import type { BuildOutputComplete } from '../models/BuildOutputComplete';
import type { BuildOutputCreate } from '../models/BuildOutputCreate';
import type { BuildOutputDelete } from '../models/BuildOutputDelete';
import type { BuildOutputScrap } from '../models/BuildOutputScrap';
import type { BuildUnallocation } from '../models/BuildUnallocation';
import type { BulkRequest } from '../models/BulkRequest';
import type { GenericStateClass } from '../models/GenericStateClass';
import type { PaginatedBuildItemList } from '../models/PaginatedBuildItemList';
import type { PaginatedBuildLineList } from '../models/PaginatedBuildLineList';
import type { PaginatedBuildList } from '../models/PaginatedBuildList';
import type { PatchedBuild } from '../models/PatchedBuild';
import type { PatchedBuildItem } from '../models/PatchedBuildItem';
import type { PatchedBuildLine } from '../models/PatchedBuildLine';
import type { StockItem } from '../models/StockItem';
import type { TaskDetail } from '../models/TaskDetail';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuildService {
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param active Build is active
     * @param ancestor Ancestor Build
     * @param assignedTo Assigned To
     * @param assignedToMe Assigned to me
     * @param category Category
     * @param completedAfter Completed after
     * @param completedBefore Completed before
     * @param createdAfter Created after
     * @param createdBefore Created before
     * @param excludeTree Exclude Tree
     * @param external
     * @param hasProjectCode has_project_code
     * @param hasStartDate Has start date
     * @param hasTargetDate Has target date
     * @param includeVariants Include Variants
     * @param issuedBy
     * @param maxDate Max Date
     * @param minDate Min Date
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param outstanding Build is outstanding
     * @param overdue Build is overdue
     * @param parent Parent Build
     * @param part Part
     * @param partDetail Include detailed information about the related part in the response
     * @param projectCode
     * @param reference Filter by exact reference
     * @param salesOrder
     * @param search A search term. Searched fields: part__IPN, part__description, part__name, priority, project_code__code, reference, title.
     * @param startDateAfter Start date after
     * @param startDateBefore Start date before
     * @param status Order Status
     * @param tags Tags
     * @param targetDateAfter Target date after
     * @param targetDateBefore Target date before
     * @returns PaginatedBuildList
     * @throws ApiError
     */
    public static buildList(
        limit: number,
        active?: boolean,
        ancestor?: number,
        assignedTo?: number,
        assignedToMe?: boolean,
        category?: number,
        completedAfter?: string,
        completedBefore?: string,
        createdAfter?: string,
        createdBefore?: string,
        excludeTree?: number,
        external?: boolean,
        hasProjectCode?: boolean,
        hasStartDate?: boolean,
        hasTargetDate?: boolean,
        includeVariants?: boolean,
        issuedBy?: number,
        maxDate?: string,
        minDate?: string,
        offset?: number,
        ordering?: 'reference' | '-reference' | 'part' | '-part' | 'IPN' | '-IPN' | 'part__name' | '-part__name' | 'status' | '-status' | 'creation_date' | '-creation_date' | 'start_date' | '-start_date' | 'target_date' | '-target_date' | 'completion_date' | '-completion_date' | 'quantity' | '-quantity' | 'completed' | '-completed' | 'issued_by' | '-issued_by' | 'responsible' | '-responsible' | 'project_code' | '-project_code' | 'priority' | '-priority' | 'level' | '-level' | 'external' | '-external',
        outstanding?: boolean,
        overdue?: boolean,
        parent?: number,
        part?: number,
        partDetail: boolean = true,
        projectCode?: number,
        reference?: string,
        salesOrder?: number,
        search?: string,
        startDateAfter?: string,
        startDateBefore?: string,
        status?: number,
        tags?: string,
        targetDateAfter?: string,
        targetDateBefore?: string,
    ): CancelablePromise<PaginatedBuildList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/build/',
            query: {
                'active': active,
                'ancestor': ancestor,
                'assigned_to': assignedTo,
                'assigned_to_me': assignedToMe,
                'category': category,
                'completed_after': completedAfter,
                'completed_before': completedBefore,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'exclude_tree': excludeTree,
                'external': external,
                'has_project_code': hasProjectCode,
                'has_start_date': hasStartDate,
                'has_target_date': hasTargetDate,
                'include_variants': includeVariants,
                'issued_by': issuedBy,
                'limit': limit,
                'max_date': maxDate,
                'min_date': minDate,
                'offset': offset,
                'ordering': ordering,
                'outstanding': outstanding,
                'overdue': overdue,
                'parent': parent,
                'part': part,
                'part_detail': partDetail,
                'project_code': projectCode,
                'reference': reference,
                'sales_order': salesOrder,
                'search': search,
                'start_date_after': startDateAfter,
                'start_date_before': startDateBefore,
                'status': status,
                'tags': tags,
                'target_date_after': targetDateAfter,
                'target_date_before': targetDateBefore,
            },
        });
    }
    /**
     * API endpoint for accessing a list of Build objects.
     *
     * - GET: Return list of objects (with filters)
     * - POST: Create a new Build object
     * @param requestBody
     * @returns Build
     * @throws ApiError
     */
    public static buildCreate(
        requestBody: Build,
    ): CancelablePromise<Build> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a Build object.
     * @param id
     * @returns Build
     * @throws ApiError
     */
    public static buildRetrieve(
        id: number,
    ): CancelablePromise<Build> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/build/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a Build object.
     * @param id
     * @param requestBody
     * @returns Build
     * @throws ApiError
     */
    public static buildUpdate(
        id: number,
        requestBody: Build,
    ): CancelablePromise<Build> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/build/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a Build object.
     * @param id
     * @param requestBody
     * @returns Build
     * @throws ApiError
     */
    public static buildPartialUpdate(
        id: number,
        requestBody?: PatchedBuild,
    ): CancelablePromise<Build> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/build/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a Build object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static buildDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/build/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to allocate stock items to a build order.
     *
     * - The BuildOrder object is specified by the URL
     * - Items to allocate are specified as a list called "items" with the following options:
     * - bom_item: pk value of a given BomItem object (must match the part associated with this build)
     * - stock_item: pk value of a given StockItem object
     * - quantity: quantity to allocate
     * - output: StockItem (build order output) to allocate stock against (optional)
     * @param id
     * @param requestBody
     * @returns BuildAllocation
     * @throws ApiError
     */
    public static buildAllocateCreate(
        id: number,
        requestBody: BuildAllocation,
    ): CancelablePromise<BuildAllocation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/allocate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override the POST method to handle auto allocation task.
     *
     * As this is offloaded to the background task,
     * we return information about the background task which is performing the auto allocation operation.
     * @param id
     * @param requestBody
     * @returns TaskDetail
     * @throws ApiError
     */
    public static buildAutoAllocateCreate(
        id: number,
        requestBody?: BuildAutoAllocation,
    ): CancelablePromise<TaskDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/auto-allocate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for cancelling a BuildOrder.
     * @param id
     * @param requestBody
     * @returns BuildCancel
     * @throws ApiError
     */
    public static buildCancelCreate(
        id: number,
        requestBody?: BuildCancel,
    ): CancelablePromise<BuildCancel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/cancel/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override POST to offload build output completion to the background worker.
     * @param id
     * @param requestBody
     * @returns TaskDetail
     * @throws ApiError
     */
    public static buildCompleteCreate(
        id: number,
        requestBody: BuildOutputComplete,
    ): CancelablePromise<TaskDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/complete/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override the POST method to handle consume task.
     *
     * As this is offloaded to the background task,
     * we return information about the background task which is performing the consume operation.
     * @param id
     * @param requestBody
     * @returns TaskDetail
     * @throws ApiError
     */
    public static buildConsumeCreate(
        id: number,
        requestBody?: BuildConsume,
    ): CancelablePromise<TaskDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/consume/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for creating new build output(s).
     * @param id
     * @param requestBody
     * @returns StockItem
     * @throws ApiError
     */
    public static buildCreateOutputCreate(
        id: number,
        requestBody: BuildOutputCreate,
    ): CancelablePromise<Array<StockItem>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/create-output/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override POST to offload build output deletion to the background worker.
     * @param id
     * @param requestBody
     * @returns TaskDetail
     * @throws ApiError
     */
    public static buildDeleteOutputsCreate(
        id: number,
        requestBody: BuildOutputDelete,
    ): CancelablePromise<TaskDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/delete-outputs/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for marking a build as finished (completed).
     * @param id
     * @param requestBody
     * @returns BuildComplete
     * @throws ApiError
     */
    public static buildFinishCreate(
        id: number,
        requestBody?: BuildComplete,
    ): CancelablePromise<BuildComplete> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/finish/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for placing a BuildOrder on hold.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static buildHoldCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/hold/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for issuing a BuildOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static buildIssueCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/issue/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override POST to offload scrapping to the background worker.
     * @param id
     * @param requestBody
     * @returns TaskDetail
     * @throws ApiError
     */
    public static buildScrapOutputsCreate(
        id: number,
        requestBody: BuildOutputScrap,
    ): CancelablePromise<TaskDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/scrap-outputs/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for unallocating stock items from a build order.
     *
     * - The BuildOrder object is specified by the URL
     * - "output" (StockItem) can optionally be specified
     * - "bom_item" can optionally be specified
     * @param id
     * @param requestBody
     * @returns BuildUnallocation
     * @throws ApiError
     */
    public static buildUnallocateCreate(
        id: number,
        requestBody?: BuildUnallocation,
    ): CancelablePromise<BuildUnallocation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/{id}/unallocate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param build Build Order
     * @param buildDetail Include detailed information about the associated build order.
     * @param buildLine
     * @param includeVariants Include Variants
     * @param installInto
     * @param installIntoDetail Include detailed information about the build output for this build item.
     * @param location Location
     * @param locationDetail Include detailed information about the location of the allocated stock item.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param output Filter by output stock item ID. Use 'null' to find uninstalled build items.
     * @param part Part
     * @param partDetail Include detailed information about the part associated with this build item.
     * @param search A search term. Searched fields: build_line__bom_item__reference, stock_item__part__IPN, stock_item__part__name, stock_item__supplier_part__SKU.
     * @param stockDetail Include detailed information about the allocated stock item.
     * @param stockItem
     * @param supplierPartDetail Include detailed information about the supplier part associated with this build item.
     * @param tracked Tracked
     * @returns PaginatedBuildItemList
     * @throws ApiError
     */
    public static buildItemList(
        limit: number,
        build?: number,
        buildDetail: boolean = false,
        buildLine?: number,
        includeVariants?: boolean,
        installInto?: number,
        installIntoDetail: boolean = false,
        location?: number,
        locationDetail: boolean = false,
        offset?: number,
        ordering?: 'part' | '-part' | 'sku' | '-sku' | 'quantity' | '-quantity' | 'location' | '-location' | 'reference' | '-reference' | 'IPN' | '-IPN',
        output?: number,
        part?: number,
        partDetail: boolean = false,
        search?: string,
        stockDetail: boolean = false,
        stockItem?: number,
        supplierPartDetail: boolean = false,
        tracked?: boolean,
    ): CancelablePromise<PaginatedBuildItemList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/build/item/',
            query: {
                'build': build,
                'build_detail': buildDetail,
                'build_line': buildLine,
                'include_variants': includeVariants,
                'install_into': installInto,
                'install_into_detail': installIntoDetail,
                'limit': limit,
                'location': location,
                'location_detail': locationDetail,
                'offset': offset,
                'ordering': ordering,
                'output': output,
                'part': part,
                'part_detail': partDetail,
                'search': search,
                'stock_detail': stockDetail,
                'stock_item': stockItem,
                'supplier_part_detail': supplierPartDetail,
                'tracked': tracked,
            },
        });
    }
    /**
     * API endpoint for accessing a list of BuildItem objects.
     *
     * - GET: Return list of objects
     * - POST: Create a new BuildItem object
     * @param requestBody
     * @returns BuildItem
     * @throws ApiError
     */
    public static buildItemCreate(
        requestBody: BuildItem,
    ): CancelablePromise<BuildItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/item/',
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
    public static buildItemBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/build/item/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a BuildItem object.
     * @param id
     * @returns BuildItem
     * @throws ApiError
     */
    public static buildItemRetrieve(
        id: number,
    ): CancelablePromise<BuildItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/build/item/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a BuildItem object.
     * @param id
     * @param requestBody
     * @returns BuildItem
     * @throws ApiError
     */
    public static buildItemUpdate(
        id: number,
        requestBody: BuildItem,
    ): CancelablePromise<BuildItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/build/item/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a BuildItem object.
     * @param id
     * @param requestBody
     * @returns BuildItem
     * @throws ApiError
     */
    public static buildItemPartialUpdate(
        id: number,
        requestBody?: PatchedBuildItem,
    ): CancelablePromise<BuildItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/build/item/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a BuildItem object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static buildItemDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/build/item/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param allocated Allocated
     * @param allocations Include allocation details showing which stock items are allocated to this build line.
     * @param assembly Assembly
     * @param assemblyDetail Include brief details of the assembly (parent part) related to the BOM item in this build line.
     * @param available Available
     * @param bomItem
     * @param bomItemDetail Include detailed information about the BOM item linked to this build line.
     * @param build
     * @param buildDetail Include detailed information about the associated build order.
     * @param consumable Consumable
     * @param consumed Consumed
     * @param offset The initial index from which to return the results.
     * @param onOrder On Order
     * @param optional Optional
     * @param orderOutstanding Order Outstanding
     * @param ordering Which field to use when ordering the results.
     * @param part Part
     * @param partDetail Include detailed information about the specific part being built or consumed in this build line.
     * @param search A search term. Searched fields: bom_item__reference, bom_item__sub_part__IPN, bom_item__sub_part__description, bom_item__sub_part__name.
     * @param testable Testable
     * @param tracked Tracked
     * @returns PaginatedBuildLineList
     * @throws ApiError
     */
    public static buildLineList(
        limit: number,
        allocated?: boolean,
        allocations: boolean = false,
        assembly?: boolean,
        assemblyDetail: boolean = false,
        available?: boolean,
        bomItem?: number,
        bomItemDetail: boolean = false,
        build?: number,
        buildDetail: boolean = false,
        consumable?: boolean,
        consumed?: boolean,
        offset?: number,
        onOrder?: boolean,
        optional?: boolean,
        orderOutstanding?: boolean,
        ordering?: 'part' | '-part' | 'IPN' | '-IPN' | 'allocated' | '-allocated' | 'category' | '-category' | 'consumed' | '-consumed' | 'reference' | '-reference' | 'quantity' | '-quantity' | 'consumable' | '-consumable' | 'optional' | '-optional' | 'unit_quantity' | '-unit_quantity' | 'available_stock' | '-available_stock' | 'trackable' | '-trackable' | 'allow_variants' | '-allow_variants' | 'inherited' | '-inherited' | 'on_order' | '-on_order' | 'scheduled_to_build' | '-scheduled_to_build',
        part?: number,
        partDetail: boolean = false,
        search?: string,
        testable?: boolean,
        tracked?: boolean,
    ): CancelablePromise<PaginatedBuildLineList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/build/line/',
            query: {
                'allocated': allocated,
                'allocations': allocations,
                'assembly': assembly,
                'assembly_detail': assemblyDetail,
                'available': available,
                'bom_item': bomItem,
                'bom_item_detail': bomItemDetail,
                'build': build,
                'build_detail': buildDetail,
                'consumable': consumable,
                'consumed': consumed,
                'limit': limit,
                'offset': offset,
                'on_order': onOrder,
                'optional': optional,
                'order_outstanding': orderOutstanding,
                'ordering': ordering,
                'part': part,
                'part_detail': partDetail,
                'search': search,
                'testable': testable,
                'tracked': tracked,
            },
        });
    }
    /**
     * API endpoint for accessing a list of BuildLine objects.
     * @param requestBody
     * @returns BuildLine
     * @throws ApiError
     */
    public static buildLineCreate(
        requestBody: BuildLine,
    ): CancelablePromise<BuildLine> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/build/line/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a BuildLine object.
     * @param id
     * @param allocations Include allocation details showing which stock items are allocated to this build line.
     * @param assemblyDetail Include brief details of the assembly (parent part) related to the BOM item in this build line.
     * @param bomItemDetail Include detailed information about the BOM item linked to this build line.
     * @param buildDetail Include detailed information about the associated build order.
     * @param partDetail Include detailed information about the specific part being built or consumed in this build line.
     * @returns BuildLine
     * @throws ApiError
     */
    public static buildLineRetrieve(
        id: number,
        allocations: boolean = false,
        assemblyDetail: boolean = false,
        bomItemDetail: boolean = false,
        buildDetail: boolean = false,
        partDetail: boolean = false,
    ): CancelablePromise<BuildLine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/build/line/{id}/',
            path: {
                'id': id,
            },
            query: {
                'allocations': allocations,
                'assembly_detail': assemblyDetail,
                'bom_item_detail': bomItemDetail,
                'build_detail': buildDetail,
                'part_detail': partDetail,
            },
        });
    }
    /**
     * API endpoint for detail view of a BuildLine object.
     * @param id
     * @param requestBody
     * @returns BuildLine
     * @throws ApiError
     */
    public static buildLineUpdate(
        id: number,
        requestBody: BuildLine,
    ): CancelablePromise<BuildLine> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/build/line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a BuildLine object.
     * @param id
     * @param requestBody
     * @returns BuildLine
     * @throws ApiError
     */
    public static buildLinePartialUpdate(
        id: number,
        requestBody?: PatchedBuildLine,
    ): CancelablePromise<BuildLine> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/build/line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a BuildLine object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static buildLineDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/build/line/{id}/',
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
    public static buildStatusRetrieve(): CancelablePromise<GenericStateClass> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/build/status/',
            errors: {
                400: `Invalid request`,
            },
        });
    }
}
