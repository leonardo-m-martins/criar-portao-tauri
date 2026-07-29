/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { GenericStateClass } from '../models/GenericStateClass';
import type { PaginatedPurchaseOrderExtraLineList } from '../models/PaginatedPurchaseOrderExtraLineList';
import type { PaginatedPurchaseOrderLineItemList } from '../models/PaginatedPurchaseOrderLineItemList';
import type { PaginatedPurchaseOrderList } from '../models/PaginatedPurchaseOrderList';
import type { PaginatedReturnOrderExtraLineList } from '../models/PaginatedReturnOrderExtraLineList';
import type { PaginatedReturnOrderLineItemList } from '../models/PaginatedReturnOrderLineItemList';
import type { PaginatedReturnOrderList } from '../models/PaginatedReturnOrderList';
import type { PaginatedSalesOrderAllocationList } from '../models/PaginatedSalesOrderAllocationList';
import type { PaginatedSalesOrderExtraLineList } from '../models/PaginatedSalesOrderExtraLineList';
import type { PaginatedSalesOrderLineItemList } from '../models/PaginatedSalesOrderLineItemList';
import type { PaginatedSalesOrderList } from '../models/PaginatedSalesOrderList';
import type { PaginatedSalesOrderShipmentList } from '../models/PaginatedSalesOrderShipmentList';
import type { PaginatedTransferOrderAllocationList } from '../models/PaginatedTransferOrderAllocationList';
import type { PaginatedTransferOrderLineItemList } from '../models/PaginatedTransferOrderLineItemList';
import type { PaginatedTransferOrderList } from '../models/PaginatedTransferOrderList';
import type { PatchedPurchaseOrder } from '../models/PatchedPurchaseOrder';
import type { PatchedPurchaseOrderExtraLine } from '../models/PatchedPurchaseOrderExtraLine';
import type { PatchedPurchaseOrderLineItem } from '../models/PatchedPurchaseOrderLineItem';
import type { PatchedReturnOrder } from '../models/PatchedReturnOrder';
import type { PatchedReturnOrderExtraLine } from '../models/PatchedReturnOrderExtraLine';
import type { PatchedReturnOrderLineItem } from '../models/PatchedReturnOrderLineItem';
import type { PatchedSalesOrder } from '../models/PatchedSalesOrder';
import type { PatchedSalesOrderAllocation } from '../models/PatchedSalesOrderAllocation';
import type { PatchedSalesOrderExtraLine } from '../models/PatchedSalesOrderExtraLine';
import type { PatchedSalesOrderLineItem } from '../models/PatchedSalesOrderLineItem';
import type { PatchedSalesOrderShipment } from '../models/PatchedSalesOrderShipment';
import type { PatchedTransferOrder } from '../models/PatchedTransferOrder';
import type { PatchedTransferOrderAllocation } from '../models/PatchedTransferOrderAllocation';
import type { PatchedTransferOrderLineItem } from '../models/PatchedTransferOrderLineItem';
import type { PurchaseOrder } from '../models/PurchaseOrder';
import type { PurchaseOrderComplete } from '../models/PurchaseOrderComplete';
import type { PurchaseOrderExtraLine } from '../models/PurchaseOrderExtraLine';
import type { PurchaseOrderLineItem } from '../models/PurchaseOrderLineItem';
import type { PurchaseOrderReceive } from '../models/PurchaseOrderReceive';
import type { ReturnOrder } from '../models/ReturnOrder';
import type { ReturnOrderExtraLine } from '../models/ReturnOrderExtraLine';
import type { ReturnOrderLineItem } from '../models/ReturnOrderLineItem';
import type { ReturnOrderReceive } from '../models/ReturnOrderReceive';
import type { SalesOrder } from '../models/SalesOrder';
import type { SalesOrderAllocation } from '../models/SalesOrderAllocation';
import type { SalesOrderAutoAllocation } from '../models/SalesOrderAutoAllocation';
import type { SalesOrderComplete } from '../models/SalesOrderComplete';
import type { SalesOrderExtraLine } from '../models/SalesOrderExtraLine';
import type { SalesOrderLineItem } from '../models/SalesOrderLineItem';
import type { SalesOrderSerialAllocation } from '../models/SalesOrderSerialAllocation';
import type { SalesOrderShipment } from '../models/SalesOrderShipment';
import type { SalesOrderShipmentAllocation } from '../models/SalesOrderShipmentAllocation';
import type { SalesOrderShipmentComplete } from '../models/SalesOrderShipmentComplete';
import type { StockItem } from '../models/StockItem';
import type { TaskDetail } from '../models/TaskDetail';
import type { TransferOrder } from '../models/TransferOrder';
import type { TransferOrderAllocation } from '../models/TransferOrderAllocation';
import type { TransferOrderComplete } from '../models/TransferOrderComplete';
import type { TransferOrderLineItem } from '../models/TransferOrderLineItem';
import type { TransferOrderLineItemAllocation } from '../models/TransferOrderLineItemAllocation';
import type { TransferOrderSerialAllocation } from '../models/TransferOrderSerialAllocation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrderService {
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param assignedTo Responsible
     * @param assignedToMe Assigned to me
     * @param completedAfter Completed After
     * @param completedBefore Completed Before
     * @param createdAfter Created After
     * @param createdBefore Created Before
     * @param createdBy Created By
     * @param externalBuild External Build Order
     * @param hasProjectCode Has Project Code
     * @param hasStartDate Has Start Date
     * @param hasTargetDate Has Target Date
     * @param maxDate Max Date
     * @param minDate Min Date
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param outstanding Outstanding
     * @param overdue overdue
     * @param part Part
     * @param projectCode Project Code
     * @param reference Order Reference
     * @param search A search term. Searched fields: description, project_code__code, reference, supplier__name, supplier_reference.
     * @param startDateAfter Start Date After
     * @param startDateBefore Start Date Before
     * @param status Order Status
     * @param supplier
     * @param supplierDetail Include detailed information about the supplier in the response
     * @param supplierPart Supplier Part
     * @param tags Tags
     * @param targetDateAfter Target Date After
     * @param targetDateBefore Target Date Before
     * @param updatedAfter Updated After
     * @param updatedBefore Updated Before
     * @returns PaginatedPurchaseOrderList
     * @throws ApiError
     */
    public static orderPoList(
        limit: number,
        assignedTo?: number,
        assignedToMe?: boolean,
        completedAfter?: string,
        completedBefore?: string,
        createdAfter?: string,
        createdBefore?: string,
        createdBy?: number,
        externalBuild?: number,
        hasProjectCode?: boolean,
        hasStartDate?: boolean,
        hasTargetDate?: boolean,
        maxDate?: string,
        minDate?: string,
        offset?: number,
        ordering?: 'creation_date' | '-creation_date' | 'created_by' | '-created_by' | 'reference' | '-reference' | 'supplier__name' | '-supplier__name' | 'start_date' | '-start_date' | 'target_date' | '-target_date' | 'complete_date' | '-complete_date' | 'line_items' | '-line_items' | 'status' | '-status' | 'responsible' | '-responsible' | 'total_price' | '-total_price' | 'project_code' | '-project_code' | 'updated_at' | '-updated_at',
        outstanding?: boolean,
        overdue?: boolean,
        part?: number,
        projectCode?: number,
        reference?: string,
        search?: string,
        startDateAfter?: string,
        startDateBefore?: string,
        status?: number,
        supplier?: number,
        supplierDetail: boolean = false,
        supplierPart?: number,
        tags?: string,
        targetDateAfter?: string,
        targetDateBefore?: string,
        updatedAfter?: string,
        updatedBefore?: string,
    ): CancelablePromise<PaginatedPurchaseOrderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/po/',
            query: {
                'assigned_to': assignedTo,
                'assigned_to_me': assignedToMe,
                'completed_after': completedAfter,
                'completed_before': completedBefore,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'created_by': createdBy,
                'external_build': externalBuild,
                'has_project_code': hasProjectCode,
                'has_start_date': hasStartDate,
                'has_target_date': hasTargetDate,
                'limit': limit,
                'max_date': maxDate,
                'min_date': minDate,
                'offset': offset,
                'ordering': ordering,
                'outstanding': outstanding,
                'overdue': overdue,
                'part': part,
                'project_code': projectCode,
                'reference': reference,
                'search': search,
                'start_date_after': startDateAfter,
                'start_date_before': startDateBefore,
                'status': status,
                'supplier': supplier,
                'supplier_detail': supplierDetail,
                'supplier_part': supplierPart,
                'tags': tags,
                'target_date_after': targetDateAfter,
                'target_date_before': targetDateBefore,
                'updated_after': updatedAfter,
                'updated_before': updatedBefore,
            },
        });
    }
    /**
     * API endpoint for accessing a list of PurchaseOrder objects.
     *
     * - GET: Return list of PurchaseOrder objects (with filters)
     * - POST: Create a new PurchaseOrder object
     * @param requestBody
     * @returns PurchaseOrder
     * @throws ApiError
     */
    public static orderPoCreate(
        requestBody: PurchaseOrder,
    ): CancelablePromise<PurchaseOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/po/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param order
     * @param orderDetail Include detailed information about the sales order in the response
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: description, notes, quantity, reference.
     * @returns PaginatedPurchaseOrderExtraLineList
     * @throws ApiError
     */
    public static orderPoExtraLineList(
        limit: number,
        offset?: number,
        order?: number,
        orderDetail: boolean = false,
        ordering?: 'quantity' | '-quantity' | 'notes' | '-notes' | 'reference' | '-reference' | 'line' | '-line',
        search?: string,
    ): CancelablePromise<PaginatedPurchaseOrderExtraLineList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/po-extra-line/',
            query: {
                'limit': limit,
                'offset': offset,
                'order': order,
                'order_detail': orderDetail,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for accessing a list of PurchaseOrderExtraLine objects.
     * @param requestBody
     * @returns PurchaseOrderExtraLine
     * @throws ApiError
     */
    public static orderPoExtraLineCreate(
        requestBody: PurchaseOrderExtraLine,
    ): CancelablePromise<PurchaseOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/po-extra-line/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a PurchaseOrderExtraLine object.
     * @param id
     * @returns PurchaseOrderExtraLine
     * @throws ApiError
     */
    public static orderPoExtraLineRetrieve(
        id: number,
    ): CancelablePromise<PurchaseOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/po-extra-line/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a PurchaseOrderExtraLine object.
     * @param id
     * @param requestBody
     * @returns PurchaseOrderExtraLine
     * @throws ApiError
     */
    public static orderPoExtraLineUpdate(
        id: number,
        requestBody: PurchaseOrderExtraLine,
    ): CancelablePromise<PurchaseOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/po-extra-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a PurchaseOrderExtraLine object.
     * @param id
     * @param requestBody
     * @returns PurchaseOrderExtraLine
     * @throws ApiError
     */
    public static orderPoExtraLinePartialUpdate(
        id: number,
        requestBody?: PatchedPurchaseOrderExtraLine,
    ): CancelablePromise<PurchaseOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/po-extra-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a PurchaseOrderExtraLine object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderPoExtraLineDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/po-extra-line/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param basePart Internal Part
     * @param hasPricing Has Pricing
     * @param includeVariants Include Variants
     * @param offset The initial index from which to return the results.
     * @param order Order
     * @param orderComplete Order Complete
     * @param orderDetail Include detailed information about the sales order in the response
     * @param orderStatus Order Status
     * @param ordering Which field to use when ordering the results.
     * @param part Supplier Part
     * @param partDetail Include detailed information about the related part in the response
     * @param pending Order Pending
     * @param received Items Received
     * @param search A search term. Searched fields: part__SKU, part__manufacturer_part__MPN, part__part__description, part__part__name, reference.
     * @returns PaginatedPurchaseOrderLineItemList
     * @throws ApiError
     */
    public static orderPoLineList(
        limit: number,
        basePart?: number,
        hasPricing?: boolean,
        includeVariants?: boolean,
        offset?: number,
        order?: number,
        orderComplete?: boolean,
        orderDetail: boolean = false,
        orderStatus?: number,
        ordering?: 'MPN' | '-MPN' | 'part_name' | '-part_name' | 'purchase_price' | '-purchase_price' | 'quantity' | '-quantity' | 'received' | '-received' | 'reference' | '-reference' | 'SKU' | '-SKU' | 'IPN' | '-IPN' | 'total_price' | '-total_price' | 'target_date' | '-target_date' | 'order' | '-order' | 'status' | '-status' | 'complete_date' | '-complete_date' | 'line' | '-line',
        part?: number,
        partDetail: boolean = false,
        pending?: boolean,
        received?: boolean,
        search?: string,
    ): CancelablePromise<PaginatedPurchaseOrderLineItemList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/po-line/',
            query: {
                'base_part': basePart,
                'has_pricing': hasPricing,
                'include_variants': includeVariants,
                'limit': limit,
                'offset': offset,
                'order': order,
                'order_complete': orderComplete,
                'order_detail': orderDetail,
                'order_status': orderStatus,
                'ordering': ordering,
                'part': part,
                'part_detail': partDetail,
                'pending': pending,
                'received': received,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for accessing a list of PurchaseOrderLineItem objects.
     *
     * - GET: Return a list of PurchaseOrder Line Item objects
     * - POST: Create a new PurchaseOrderLineItem object
     * @param requestBody
     * @returns PurchaseOrderLineItem
     * @throws ApiError
     */
    public static orderPoLineCreate(
        requestBody: PurchaseOrderLineItem,
    ): CancelablePromise<PurchaseOrderLineItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/po-line/',
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
    public static orderPoLineBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/po-line/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for PurchaseOrderLineItem object.
     * @param id
     * @param orderDetail Include detailed information about the sales order in the response
     * @param partDetail Include detailed information about the related part in the response
     * @returns PurchaseOrderLineItem
     * @throws ApiError
     */
    public static orderPoLineRetrieve(
        id: number,
        orderDetail: boolean = false,
        partDetail: boolean = false,
    ): CancelablePromise<PurchaseOrderLineItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/po-line/{id}/',
            path: {
                'id': id,
            },
            query: {
                'order_detail': orderDetail,
                'part_detail': partDetail,
            },
        });
    }
    /**
     * Detail API endpoint for PurchaseOrderLineItem object.
     * @param id
     * @param requestBody
     * @returns PurchaseOrderLineItem
     * @throws ApiError
     */
    public static orderPoLineUpdate(
        id: number,
        requestBody: PurchaseOrderLineItem,
    ): CancelablePromise<PurchaseOrderLineItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/po-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for PurchaseOrderLineItem object.
     * @param id
     * @param requestBody
     * @returns PurchaseOrderLineItem
     * @throws ApiError
     */
    public static orderPoLinePartialUpdate(
        id: number,
        requestBody?: PatchedPurchaseOrderLineItem,
    ): CancelablePromise<PurchaseOrderLineItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/po-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for PurchaseOrderLineItem object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderPoLineDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/po-line/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a PurchaseOrder object.
     * @param id
     * @param supplierDetail Include detailed information about the supplier in the response
     * @returns PurchaseOrder
     * @throws ApiError
     */
    public static orderPoRetrieve(
        id: number,
        supplierDetail: boolean = false,
    ): CancelablePromise<PurchaseOrder> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/po/{id}/',
            path: {
                'id': id,
            },
            query: {
                'supplier_detail': supplierDetail,
            },
        });
    }
    /**
     * API endpoint for detail view of a PurchaseOrder object.
     * @param id
     * @param requestBody
     * @returns PurchaseOrder
     * @throws ApiError
     */
    public static orderPoUpdate(
        id: number,
        requestBody: PurchaseOrder,
    ): CancelablePromise<PurchaseOrder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/po/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a PurchaseOrder object.
     * @param id
     * @param requestBody
     * @returns PurchaseOrder
     * @throws ApiError
     */
    public static orderPoPartialUpdate(
        id: number,
        requestBody?: PatchedPurchaseOrder,
    ): CancelablePromise<PurchaseOrder> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/po/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a PurchaseOrder object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderPoDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/po/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to 'cancel' a purchase order.
     *
     * The purchase order must be in a state which can be cancelled
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderPoCancelCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/po/{id}/cancel/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to 'complete' a purchase order.
     * @param id
     * @param requestBody
     * @returns PurchaseOrderComplete
     * @throws ApiError
     */
    public static orderPoCompleteCreate(
        id: number,
        requestBody?: PurchaseOrderComplete,
    ): CancelablePromise<PurchaseOrderComplete> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/po/{id}/complete/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint to place a PurchaseOrder on hold.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderPoHoldCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/po/{id}/hold/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to 'issue' (place) a PurchaseOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderPoIssueCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/po/{id}/issue/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to receive stock items against a PurchaseOrder.
     *
     * - The purchase order is specified in the URL.
     * - Items to receive are specified as a list called "items" with the following options:
     * - line_item: pk of the PO Line item
     * - supplier_part: pk value of the supplier part
     * - quantity: quantity to receive
     * - status: stock item status
     * - expiry_date: stock item expiry date (optional)
     * - location: destination for stock item (optional)
     * - batch_code: the batch code for this stock item
     * - serial_numbers: serial numbers for this stock item
     * - A global location must also be specified. This is used when no locations are specified for items, and no location is given in the PO line item
     * @param id
     * @param requestBody
     * @returns StockItem
     * @throws ApiError
     */
    public static orderPoReceiveCreate(
        id: number,
        requestBody: PurchaseOrderReceive,
    ): CancelablePromise<Array<StockItem>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/po/{id}/receive/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve information about a specific status code
     * @returns GenericStateClass
     * @throws ApiError
     */
    public static orderPoStatusRetrieve(): CancelablePromise<GenericStateClass> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/po/status/',
            errors: {
                400: `Invalid request`,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param assignedTo Responsible
     * @param assignedToMe Assigned to me
     * @param completedAfter Completed After
     * @param completedBefore Completed Before
     * @param createdAfter Created After
     * @param createdBefore Created Before
     * @param createdBy Created By
     * @param customer
     * @param customerDetail Include detailed information about the customer in the response
     * @param hasProjectCode Has Project Code
     * @param hasStartDate Has Start Date
     * @param hasTargetDate Has Target Date
     * @param includeVariants Include Variants
     * @param maxDate Max Date
     * @param minDate Min Date
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param outstanding Outstanding
     * @param overdue overdue
     * @param part
     * @param projectCode Project Code
     * @param reference Order Reference
     * @param search A search term. Searched fields: customer__name, customer_reference, description, project_code__code, reference.
     * @param startDateAfter Start Date After
     * @param startDateBefore Start Date Before
     * @param status Order Status
     * @param tags Tags
     * @param targetDateAfter Target Date After
     * @param targetDateBefore Target Date Before
     * @param updatedAfter Updated After
     * @param updatedBefore Updated Before
     * @returns PaginatedReturnOrderList
     * @throws ApiError
     */
    public static orderRoList(
        limit: number,
        assignedTo?: number,
        assignedToMe?: boolean,
        completedAfter?: string,
        completedBefore?: string,
        createdAfter?: string,
        createdBefore?: string,
        createdBy?: number,
        customer?: number,
        customerDetail: boolean = false,
        hasProjectCode?: boolean,
        hasStartDate?: boolean,
        hasTargetDate?: boolean,
        includeVariants?: boolean,
        maxDate?: string,
        minDate?: string,
        offset?: number,
        ordering?: 'creation_date' | '-creation_date' | 'created_by' | '-created_by' | 'reference' | '-reference' | 'customer__name' | '-customer__name' | 'customer_reference' | '-customer_reference' | 'line_items' | '-line_items' | 'status' | '-status' | 'start_date' | '-start_date' | 'target_date' | '-target_date' | 'complete_date' | '-complete_date' | 'project_code' | '-project_code' | 'updated_at' | '-updated_at',
        outstanding?: boolean,
        overdue?: boolean,
        part?: number,
        projectCode?: number,
        reference?: string,
        search?: string,
        startDateAfter?: string,
        startDateBefore?: string,
        status?: number,
        tags?: string,
        targetDateAfter?: string,
        targetDateBefore?: string,
        updatedAfter?: string,
        updatedBefore?: string,
    ): CancelablePromise<PaginatedReturnOrderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/ro/',
            query: {
                'assigned_to': assignedTo,
                'assigned_to_me': assignedToMe,
                'completed_after': completedAfter,
                'completed_before': completedBefore,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'created_by': createdBy,
                'customer': customer,
                'customer_detail': customerDetail,
                'has_project_code': hasProjectCode,
                'has_start_date': hasStartDate,
                'has_target_date': hasTargetDate,
                'include_variants': includeVariants,
                'limit': limit,
                'max_date': maxDate,
                'min_date': minDate,
                'offset': offset,
                'ordering': ordering,
                'outstanding': outstanding,
                'overdue': overdue,
                'part': part,
                'project_code': projectCode,
                'reference': reference,
                'search': search,
                'start_date_after': startDateAfter,
                'start_date_before': startDateBefore,
                'status': status,
                'tags': tags,
                'target_date_after': targetDateAfter,
                'target_date_before': targetDateBefore,
                'updated_after': updatedAfter,
                'updated_before': updatedBefore,
            },
        });
    }
    /**
     * API endpoint for accessing a list of ReturnOrder objects.
     * @param requestBody
     * @returns ReturnOrder
     * @throws ApiError
     */
    public static orderRoCreate(
        requestBody: ReturnOrder,
    ): CancelablePromise<ReturnOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/ro/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param order
     * @param orderDetail Include detailed information about the sales order in the response
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: description, notes, quantity, reference.
     * @returns PaginatedReturnOrderExtraLineList
     * @throws ApiError
     */
    public static orderRoExtraLineList(
        limit: number,
        offset?: number,
        order?: number,
        orderDetail: boolean = false,
        ordering?: 'quantity' | '-quantity' | 'notes' | '-notes' | 'reference' | '-reference' | 'line' | '-line',
        search?: string,
    ): CancelablePromise<PaginatedReturnOrderExtraLineList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/ro-extra-line/',
            query: {
                'limit': limit,
                'offset': offset,
                'order': order,
                'order_detail': orderDetail,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for accessing a list of ReturnOrderExtraLine objects.
     * @param requestBody
     * @returns ReturnOrderExtraLine
     * @throws ApiError
     */
    public static orderRoExtraLineCreate(
        requestBody: ReturnOrderExtraLine,
    ): CancelablePromise<ReturnOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/ro-extra-line/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a ReturnOrderExtraLine object.
     * @param id
     * @returns ReturnOrderExtraLine
     * @throws ApiError
     */
    public static orderRoExtraLineRetrieve(
        id: number,
    ): CancelablePromise<ReturnOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/ro-extra-line/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a ReturnOrderExtraLine object.
     * @param id
     * @param requestBody
     * @returns ReturnOrderExtraLine
     * @throws ApiError
     */
    public static orderRoExtraLineUpdate(
        id: number,
        requestBody: ReturnOrderExtraLine,
    ): CancelablePromise<ReturnOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/ro-extra-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a ReturnOrderExtraLine object.
     * @param id
     * @param requestBody
     * @returns ReturnOrderExtraLine
     * @throws ApiError
     */
    public static orderRoExtraLinePartialUpdate(
        id: number,
        requestBody?: PatchedReturnOrderExtraLine,
    ): CancelablePromise<ReturnOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/ro-extra-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a ReturnOrderExtraLine object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderRoExtraLineDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/ro-extra-line/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param hasPricing Has Pricing
     * @param item
     * @param itemDetail Include detailed information about the item in the response
     * @param offset The initial index from which to return the results.
     * @param order
     * @param orderDetail Include detailed information about the sales order in the response
     * @param orderStatus Order Status
     * @param ordering Which field to use when ordering the results.
     * @param outcome outcome
     * @param partDetail Include detailed information about the related part in the response
     * @param received received
     * @param search A search term. Searched fields: item__part__description, item__part__name, item__serial, reference.
     * @returns PaginatedReturnOrderLineItemList
     * @throws ApiError
     */
    public static orderRoLineList(
        limit: number,
        hasPricing?: boolean,
        item?: number,
        itemDetail: boolean = true,
        offset?: number,
        order?: number,
        orderDetail: boolean = false,
        orderStatus?: number,
        ordering?: 'part' | '-part' | 'IPN' | '-IPN' | 'stock' | '-stock' | 'reference' | '-reference' | 'target_date' | '-target_date' | 'received_date' | '-received_date' | 'line' | '-line',
        outcome?: number,
        partDetail: boolean = false,
        received?: boolean,
        search?: string,
    ): CancelablePromise<PaginatedReturnOrderLineItemList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/ro-line/',
            query: {
                'has_pricing': hasPricing,
                'item': item,
                'item_detail': itemDetail,
                'limit': limit,
                'offset': offset,
                'order': order,
                'order_detail': orderDetail,
                'order_status': orderStatus,
                'ordering': ordering,
                'outcome': outcome,
                'part_detail': partDetail,
                'received': received,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for accessing a list of ReturnOrderLineItemList objects.
     * @param requestBody
     * @returns ReturnOrderLineItem
     * @throws ApiError
     */
    public static orderRoLineCreate(
        requestBody: ReturnOrderLineItem,
    ): CancelablePromise<ReturnOrderLineItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/ro-line/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a ReturnOrderLineItem object.
     * @param id
     * @param itemDetail Include detailed information about the item in the response
     * @param orderDetail Include detailed information about the sales order in the response
     * @param partDetail Include detailed information about the related part in the response
     * @returns ReturnOrderLineItem
     * @throws ApiError
     */
    public static orderRoLineRetrieve(
        id: number,
        itemDetail: boolean = true,
        orderDetail: boolean = false,
        partDetail: boolean = false,
    ): CancelablePromise<ReturnOrderLineItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/ro-line/{id}/',
            path: {
                'id': id,
            },
            query: {
                'item_detail': itemDetail,
                'order_detail': orderDetail,
                'part_detail': partDetail,
            },
        });
    }
    /**
     * API endpoint for detail view of a ReturnOrderLineItem object.
     * @param id
     * @param requestBody
     * @returns ReturnOrderLineItem
     * @throws ApiError
     */
    public static orderRoLineUpdate(
        id: number,
        requestBody: ReturnOrderLineItem,
    ): CancelablePromise<ReturnOrderLineItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/ro-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a ReturnOrderLineItem object.
     * @param id
     * @param requestBody
     * @returns ReturnOrderLineItem
     * @throws ApiError
     */
    public static orderRoLinePartialUpdate(
        id: number,
        requestBody?: PatchedReturnOrderLineItem,
    ): CancelablePromise<ReturnOrderLineItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/ro-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a ReturnOrderLineItem object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderRoLineDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/ro-line/{id}/',
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
    public static orderRoLineStatusRetrieve(): CancelablePromise<GenericStateClass> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/ro-line/status/',
            errors: {
                400: `Invalid request`,
            },
        });
    }
    /**
     * API endpoint for detail view of a single ReturnOrder object.
     * @param id
     * @param customerDetail Include detailed information about the customer in the response
     * @returns ReturnOrder
     * @throws ApiError
     */
    public static orderRoRetrieve(
        id: number,
        customerDetail: boolean = false,
    ): CancelablePromise<ReturnOrder> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/ro/{id}/',
            path: {
                'id': id,
            },
            query: {
                'customer_detail': customerDetail,
            },
        });
    }
    /**
     * API endpoint for detail view of a single ReturnOrder object.
     * @param id
     * @param requestBody
     * @returns ReturnOrder
     * @throws ApiError
     */
    public static orderRoUpdate(
        id: number,
        requestBody: ReturnOrder,
    ): CancelablePromise<ReturnOrder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/ro/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single ReturnOrder object.
     * @param id
     * @param requestBody
     * @returns ReturnOrder
     * @throws ApiError
     */
    public static orderRoPartialUpdate(
        id: number,
        requestBody?: PatchedReturnOrder,
    ): CancelablePromise<ReturnOrder> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/ro/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single ReturnOrder object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderRoDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/ro/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to cancel a ReturnOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderRoCancelCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/ro/{id}/cancel/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to complete a ReturnOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderRoCompleteCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/ro/{id}/complete/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to hold a ReturnOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderRoHoldCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/ro/{id}/hold/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to issue (place) a ReturnOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderRoIssueCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/ro/{id}/issue/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to receive items against a ReturnOrder.
     * @param id
     * @param requestBody
     * @returns ReturnOrderReceive
     * @throws ApiError
     */
    public static orderRoReceiveCreate(
        id: number,
        requestBody: ReturnOrderReceive,
    ): CancelablePromise<ReturnOrderReceive> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/ro/{id}/receive/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve information about a specific status code
     * @returns GenericStateClass
     * @throws ApiError
     */
    public static orderRoStatusRetrieve(): CancelablePromise<GenericStateClass> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/ro/status/',
            errors: {
                400: `Invalid request`,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param assignedTo Responsible
     * @param assignedToMe Assigned to me
     * @param completedAfter Completed After
     * @param completedBefore Completed Before
     * @param createdAfter Created After
     * @param createdBefore Created Before
     * @param createdBy Created By
     * @param customer
     * @param customerDetail Include detailed information about the customer in the response
     * @param hasProjectCode Has Project Code
     * @param hasStartDate Has Start Date
     * @param hasTargetDate Has Target Date
     * @param includeVariants Include Variants
     * @param maxDate Max Date
     * @param minDate Min Date
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param outstanding Outstanding
     * @param overdue overdue
     * @param part
     * @param projectCode Project Code
     * @param reference Order Reference
     * @param search A search term. Searched fields: customer__name, customer_reference, description, project_code__code, reference.
     * @param startDateAfter Start Date After
     * @param startDateBefore Start Date Before
     * @param status Order Status
     * @param tags Tags
     * @param targetDateAfter Target Date After
     * @param targetDateBefore Target Date Before
     * @param updatedAfter Updated After
     * @param updatedBefore Updated Before
     * @returns PaginatedSalesOrderList
     * @throws ApiError
     */
    public static orderSoList(
        limit: number,
        assignedTo?: number,
        assignedToMe?: boolean,
        completedAfter?: string,
        completedBefore?: string,
        createdAfter?: string,
        createdBefore?: string,
        createdBy?: number,
        customer?: number,
        customerDetail: boolean = false,
        hasProjectCode?: boolean,
        hasStartDate?: boolean,
        hasTargetDate?: boolean,
        includeVariants?: boolean,
        maxDate?: string,
        minDate?: string,
        offset?: number,
        ordering?: 'creation_date' | '-creation_date' | 'created_by' | '-created_by' | 'reference' | '-reference' | 'customer__name' | '-customer__name' | 'customer_reference' | '-customer_reference' | 'status' | '-status' | 'start_date' | '-start_date' | 'target_date' | '-target_date' | 'line_items' | '-line_items' | 'shipment_date' | '-shipment_date' | 'total_price' | '-total_price' | 'project_code' | '-project_code' | 'updated_at' | '-updated_at',
        outstanding?: boolean,
        overdue?: boolean,
        part?: number,
        projectCode?: number,
        reference?: string,
        search?: string,
        startDateAfter?: string,
        startDateBefore?: string,
        status?: number,
        tags?: string,
        targetDateAfter?: string,
        targetDateBefore?: string,
        updatedAfter?: string,
        updatedBefore?: string,
    ): CancelablePromise<PaginatedSalesOrderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so/',
            query: {
                'assigned_to': assignedTo,
                'assigned_to_me': assignedToMe,
                'completed_after': completedAfter,
                'completed_before': completedBefore,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'created_by': createdBy,
                'customer': customer,
                'customer_detail': customerDetail,
                'has_project_code': hasProjectCode,
                'has_start_date': hasStartDate,
                'has_target_date': hasTargetDate,
                'include_variants': includeVariants,
                'limit': limit,
                'max_date': maxDate,
                'min_date': minDate,
                'offset': offset,
                'ordering': ordering,
                'outstanding': outstanding,
                'overdue': overdue,
                'part': part,
                'project_code': projectCode,
                'reference': reference,
                'search': search,
                'start_date_after': startDateAfter,
                'start_date_before': startDateBefore,
                'status': status,
                'tags': tags,
                'target_date_after': targetDateAfter,
                'target_date_before': targetDateBefore,
                'updated_after': updatedAfter,
                'updated_before': updatedBefore,
            },
        });
    }
    /**
     * API endpoint for accessing a list of SalesOrder objects.
     *
     * - GET: Return list of SalesOrder objects (with filters)
     * - POST: Create a new SalesOrder
     * @param requestBody
     * @returns SalesOrder
     * @throws ApiError
     */
    public static orderSoCreate(
        requestBody: SalesOrder,
    ): CancelablePromise<SalesOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for listing SalesOrderAllocation objects.
     * @param limit Number of results to return per page.
     * @param assignedToShipment Has Shipment
     * @param customerDetail Include detailed information about the customer in the response
     * @param includeVariants Include Variants
     * @param item
     * @param itemDetail Include detailed information about the item in the response
     * @param line
     * @param location Location
     * @param locationDetail Include detailed information about the stock location in the response
     * @param offset The initial index from which to return the results.
     * @param order Order
     * @param orderDetail Include detailed information about the sales order in the response
     * @param ordering Which field to use when ordering the results.
     * @param outstanding Outstanding
     * @param part Part
     * @param partDetail Include detailed information about the related part in the response
     * @param search A search term. Searched fields: item__batch, item__part__IPN, item__part__name, item__serial.
     * @param shipment
     * @returns PaginatedSalesOrderAllocationList
     * @throws ApiError
     */
    public static orderSoAllocationList(
        limit: number,
        assignedToShipment?: boolean,
        customerDetail: boolean = false,
        includeVariants?: boolean,
        item?: number,
        itemDetail: boolean = false,
        line?: number,
        location?: number,
        locationDetail: boolean = false,
        offset?: number,
        order?: number,
        orderDetail: boolean = false,
        ordering?: 'quantity' | '-quantity' | 'part' | '-part' | 'serial' | '-serial' | 'IPN' | '-IPN' | 'batch' | '-batch' | 'location' | '-location' | 'order' | '-order' | 'shipment_date' | '-shipment_date',
        outstanding?: boolean,
        part?: number,
        partDetail: boolean = false,
        search?: string,
        shipment?: number,
    ): CancelablePromise<PaginatedSalesOrderAllocationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so-allocation/',
            query: {
                'assigned_to_shipment': assignedToShipment,
                'customer_detail': customerDetail,
                'include_variants': includeVariants,
                'item': item,
                'item_detail': itemDetail,
                'limit': limit,
                'line': line,
                'location': location,
                'location_detail': locationDetail,
                'offset': offset,
                'order': order,
                'order_detail': orderDetail,
                'ordering': ordering,
                'outstanding': outstanding,
                'part': part,
                'part_detail': partDetail,
                'search': search,
                'shipment': shipment,
            },
        });
    }
    /**
     * Perform a PUT operation against this list endpoint.
     *
     * Simply redirects to the PATCH method.
     * @param requestBody
     * @returns SalesOrderAllocation
     * @throws ApiError
     */
    public static orderSoAllocationBulkUpdate(
        requestBody: SalesOrderAllocation,
    ): CancelablePromise<SalesOrderAllocation> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/so-allocation/',
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
     * @returns SalesOrderAllocation
     * @throws ApiError
     */
    public static orderSoAllocationBulkPartialUpdate(
        requestBody?: PatchedSalesOrderAllocation,
    ): CancelablePromise<SalesOrderAllocation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/so-allocation/',
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
    public static orderSoAllocationBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/so-allocation/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderAllocation object.
     * @param id
     * @returns SalesOrderAllocation
     * @throws ApiError
     */
    public static orderSoAllocationRetrieve(
        id: number,
    ): CancelablePromise<SalesOrderAllocation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so-allocation/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderAllocation object.
     * @param id
     * @param requestBody
     * @returns SalesOrderAllocation
     * @throws ApiError
     */
    public static orderSoAllocationUpdate(
        id: number,
        requestBody: SalesOrderAllocation,
    ): CancelablePromise<SalesOrderAllocation> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/so-allocation/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderAllocation object.
     * @param id
     * @param requestBody
     * @returns SalesOrderAllocation
     * @throws ApiError
     */
    public static orderSoAllocationPartialUpdate(
        id: number,
        requestBody?: PatchedSalesOrderAllocation,
    ): CancelablePromise<SalesOrderAllocation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/so-allocation/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderAllocation object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderSoAllocationDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/so-allocation/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param order
     * @param orderDetail Include detailed information about the sales order in the response
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: description, notes, quantity, reference.
     * @returns PaginatedSalesOrderExtraLineList
     * @throws ApiError
     */
    public static orderSoExtraLineList(
        limit: number,
        offset?: number,
        order?: number,
        orderDetail: boolean = false,
        ordering?: 'quantity' | '-quantity' | 'notes' | '-notes' | 'reference' | '-reference' | 'line' | '-line',
        search?: string,
    ): CancelablePromise<PaginatedSalesOrderExtraLineList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so-extra-line/',
            query: {
                'limit': limit,
                'offset': offset,
                'order': order,
                'order_detail': orderDetail,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for accessing a list of SalesOrderExtraLine objects.
     * @param requestBody
     * @returns SalesOrderExtraLine
     * @throws ApiError
     */
    public static orderSoExtraLineCreate(
        requestBody: SalesOrderExtraLine,
    ): CancelablePromise<SalesOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so-extra-line/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderExtraLine object.
     * @param id
     * @returns SalesOrderExtraLine
     * @throws ApiError
     */
    public static orderSoExtraLineRetrieve(
        id: number,
    ): CancelablePromise<SalesOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so-extra-line/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderExtraLine object.
     * @param id
     * @param requestBody
     * @returns SalesOrderExtraLine
     * @throws ApiError
     */
    public static orderSoExtraLineUpdate(
        id: number,
        requestBody: SalesOrderExtraLine,
    ): CancelablePromise<SalesOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/so-extra-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderExtraLine object.
     * @param id
     * @param requestBody
     * @returns SalesOrderExtraLine
     * @throws ApiError
     */
    public static orderSoExtraLinePartialUpdate(
        id: number,
        requestBody?: PatchedSalesOrderExtraLine,
    ): CancelablePromise<SalesOrderExtraLine> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/so-extra-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderExtraLine object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderSoExtraLineDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/so-extra-line/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param allocated Allocated
     * @param completed Completed
     * @param customerDetail Include detailed information about the customer in the response
     * @param hasPricing Has Pricing
     * @param offset The initial index from which to return the results.
     * @param order Order
     * @param orderComplete Order Complete
     * @param orderDetail Include detailed information about the sales order in the response
     * @param orderOutstanding Order Outstanding
     * @param orderStatus Order Status
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @param partDetail Include detailed information about the related part in the response
     * @param search A search term. Searched fields: part__name, quantity, reference.
     * @returns PaginatedSalesOrderLineItemList
     * @throws ApiError
     */
    public static orderSoLineList(
        limit: number,
        allocated?: boolean,
        completed?: boolean,
        customerDetail: boolean = false,
        hasPricing?: boolean,
        offset?: number,
        order?: number,
        orderComplete?: boolean,
        orderDetail: boolean = false,
        orderOutstanding?: boolean,
        orderStatus?: number,
        ordering?: 'customer' | '-customer' | 'order' | '-order' | 'part' | '-part' | 'IPN' | '-IPN' | 'part__name' | '-part__name' | 'quantity' | '-quantity' | 'allocated' | '-allocated' | 'shipped' | '-shipped' | 'reference' | '-reference' | 'sale_price' | '-sale_price' | 'target_date' | '-target_date' | 'line' | '-line',
        part?: number,
        partDetail: boolean = false,
        search?: string,
    ): CancelablePromise<PaginatedSalesOrderLineItemList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so-line/',
            query: {
                'allocated': allocated,
                'completed': completed,
                'customer_detail': customerDetail,
                'has_pricing': hasPricing,
                'limit': limit,
                'offset': offset,
                'order': order,
                'order_complete': orderComplete,
                'order_detail': orderDetail,
                'order_outstanding': orderOutstanding,
                'order_status': orderStatus,
                'ordering': ordering,
                'part': part,
                'part_detail': partDetail,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for accessing a list of SalesOrderLineItem objects.
     * @param requestBody
     * @returns SalesOrderLineItem
     * @throws ApiError
     */
    public static orderSoLineCreate(
        requestBody: SalesOrderLineItem,
    ): CancelablePromise<SalesOrderLineItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so-line/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderLineItem object.
     * @param id
     * @param customerDetail Include detailed information about the customer in the response
     * @param orderDetail Include detailed information about the sales order in the response
     * @param partDetail Include detailed information about the related part in the response
     * @returns SalesOrderLineItem
     * @throws ApiError
     */
    public static orderSoLineRetrieve(
        id: number,
        customerDetail: boolean = false,
        orderDetail: boolean = false,
        partDetail: boolean = false,
    ): CancelablePromise<SalesOrderLineItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so-line/{id}/',
            path: {
                'id': id,
            },
            query: {
                'customer_detail': customerDetail,
                'order_detail': orderDetail,
                'part_detail': partDetail,
            },
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderLineItem object.
     * @param id
     * @param requestBody
     * @returns SalesOrderLineItem
     * @throws ApiError
     */
    public static orderSoLineUpdate(
        id: number,
        requestBody: SalesOrderLineItem,
    ): CancelablePromise<SalesOrderLineItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/so-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderLineItem object.
     * @param id
     * @param requestBody
     * @returns SalesOrderLineItem
     * @throws ApiError
     */
    public static orderSoLinePartialUpdate(
        id: number,
        requestBody?: PatchedSalesOrderLineItem,
    ): CancelablePromise<SalesOrderLineItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/so-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrderLineItem object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderSoLineDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/so-line/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a SalesOrder object.
     * @param id
     * @param customerDetail Include detailed information about the customer in the response
     * @returns SalesOrder
     * @throws ApiError
     */
    public static orderSoRetrieve(
        id: number,
        customerDetail: boolean = false,
    ): CancelablePromise<SalesOrder> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so/{id}/',
            path: {
                'id': id,
            },
            query: {
                'customer_detail': customerDetail,
            },
        });
    }
    /**
     * API endpoint for detail view of a SalesOrder object.
     * @param id
     * @param requestBody
     * @returns SalesOrder
     * @throws ApiError
     */
    public static orderSoUpdate(
        id: number,
        requestBody: SalesOrder,
    ): CancelablePromise<SalesOrder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/so/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrder object.
     * @param id
     * @param requestBody
     * @returns SalesOrder
     * @throws ApiError
     */
    public static orderSoPartialUpdate(
        id: number,
        requestBody?: PatchedSalesOrder,
    ): CancelablePromise<SalesOrder> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/so/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a SalesOrder object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderSoDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/so/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to allocate stock items against a SalesOrder.
     *
     * - The SalesOrder is specified in the URL
     * - See the SalesOrderShipmentAllocationSerializer class
     * @param id
     * @param requestBody
     * @returns SalesOrderShipmentAllocation
     * @throws ApiError
     */
    public static orderSoAllocateCreate(
        id: number,
        requestBody: SalesOrderShipmentAllocation,
    ): CancelablePromise<SalesOrderShipmentAllocation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/{id}/allocate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint to allocation stock items against a SalesOrder, by specifying serial numbers.
     * @param id
     * @param requestBody
     * @returns SalesOrderSerialAllocation
     * @throws ApiError
     */
    public static orderSoAllocateSerialsCreate(
        id: number,
        requestBody: SalesOrderSerialAllocation,
    ): CancelablePromise<SalesOrderSerialAllocation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/{id}/allocate-serials/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Validate parameters and offload auto-allocation to a background task.
     * @param id
     * @param requestBody
     * @returns TaskDetail
     * @throws ApiError
     */
    public static orderSoAutoAllocateCreate(
        id: number,
        requestBody?: SalesOrderAutoAllocation,
    ): CancelablePromise<TaskDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/{id}/auto-allocate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint to cancel a SalesOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderSoCancelCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/{id}/cancel/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for manually marking a SalesOrder as "complete".
     * @param id
     * @param requestBody
     * @returns SalesOrderComplete
     * @throws ApiError
     */
    public static orderSoCompleteCreate(
        id: number,
        requestBody?: SalesOrderComplete,
    ): CancelablePromise<SalesOrderComplete> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/{id}/complete/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint to place a SalesOrder on hold.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderSoHoldCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/{id}/hold/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to issue a SalesOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderSoIssueCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/{id}/issue/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API list endpoint for SalesOrderShipment model.
     * @param limit Number of results to return per page.
     * @param checked checked
     * @param delivered delivered
     * @param offset The initial index from which to return the results.
     * @param order
     * @param orderOutstanding Order Outstanding
     * @param orderStatus Order Status
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: invoice_number, order__reference, reference, tracking_number.
     * @param shipped shipped
     * @param tags Tags
     * @returns PaginatedSalesOrderShipmentList
     * @throws ApiError
     */
    public static orderSoShipmentList(
        limit: number,
        checked?: boolean,
        delivered?: boolean,
        offset?: number,
        order?: number,
        orderOutstanding?: boolean,
        orderStatus?: number,
        ordering?: 'reference' | '-reference' | 'delivery_date' | '-delivery_date' | 'shipment_date' | '-shipment_date' | 'allocated_items' | '-allocated_items',
        search?: string,
        shipped?: boolean,
        tags?: string,
    ): CancelablePromise<PaginatedSalesOrderShipmentList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so/shipment/',
            query: {
                'checked': checked,
                'delivered': delivered,
                'limit': limit,
                'offset': offset,
                'order': order,
                'order_outstanding': orderOutstanding,
                'order_status': orderStatus,
                'ordering': ordering,
                'search': search,
                'shipped': shipped,
                'tags': tags,
            },
        });
    }
    /**
     * API list endpoint for SalesOrderShipment model.
     * @param requestBody
     * @returns SalesOrderShipment
     * @throws ApiError
     */
    public static orderSoShipmentCreate(
        requestBody: SalesOrderShipment,
    ): CancelablePromise<SalesOrderShipment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/shipment/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for SalesOrderShipment model.
     * @param id
     * @returns SalesOrderShipment
     * @throws ApiError
     */
    public static orderSoShipmentRetrieve(
        id: number,
    ): CancelablePromise<SalesOrderShipment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so/shipment/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API detail endpoint for SalesOrderShipment model.
     * @param id
     * @param requestBody
     * @returns SalesOrderShipment
     * @throws ApiError
     */
    public static orderSoShipmentUpdate(
        id: number,
        requestBody: SalesOrderShipment,
    ): CancelablePromise<SalesOrderShipment> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/so/shipment/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for SalesOrderShipment model.
     * @param id
     * @param requestBody
     * @returns SalesOrderShipment
     * @throws ApiError
     */
    public static orderSoShipmentPartialUpdate(
        id: number,
        requestBody?: PatchedSalesOrderShipment,
    ): CancelablePromise<SalesOrderShipment> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/so/shipment/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API detail endpoint for SalesOrderShipment model.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderSoShipmentDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/so/shipment/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the post method to handle shipment completion.
     * @param id
     * @param requestBody
     * @returns TaskDetail
     * @throws ApiError
     */
    public static orderSoShipmentShipCreate(
        id: number,
        requestBody?: SalesOrderShipmentComplete,
    ): CancelablePromise<TaskDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/so/shipment/{id}/ship/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve information about a specific status code
     * @returns GenericStateClass
     * @throws ApiError
     */
    public static orderSoStatusRetrieve(): CancelablePromise<GenericStateClass> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/so/status/',
            errors: {
                400: `Invalid request`,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param assignedTo Responsible
     * @param assignedToMe Assigned to me
     * @param completedAfter Completed After
     * @param completedBefore Completed Before
     * @param createdAfter Created After
     * @param createdBefore Created Before
     * @param createdBy Created By
     * @param hasProjectCode Has Project Code
     * @param hasStartDate Has Start Date
     * @param hasTargetDate Has Target Date
     * @param includeVariants Include Variants
     * @param maxDate Max Date
     * @param minDate Min Date
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param outstanding Outstanding
     * @param overdue overdue
     * @param part
     * @param projectCode Project Code
     * @param reference Order Reference
     * @param search A search term. Searched fields: description, project_code__code, reference.
     * @param startDateAfter Start Date After
     * @param startDateBefore Start Date Before
     * @param status Order Status
     * @param tags Tags
     * @param targetDateAfter Target Date After
     * @param targetDateBefore Target Date Before
     * @param updatedAfter Updated After
     * @param updatedBefore Updated Before
     * @returns PaginatedTransferOrderList
     * @throws ApiError
     */
    public static orderTransferOrderList(
        limit: number,
        assignedTo?: number,
        assignedToMe?: boolean,
        completedAfter?: string,
        completedBefore?: string,
        createdAfter?: string,
        createdBefore?: string,
        createdBy?: number,
        hasProjectCode?: boolean,
        hasStartDate?: boolean,
        hasTargetDate?: boolean,
        includeVariants?: boolean,
        maxDate?: string,
        minDate?: string,
        offset?: number,
        ordering?: 'creation_date' | '-creation_date' | 'created_by' | '-created_by' | 'reference' | '-reference' | 'line_items' | '-line_items' | 'status' | '-status' | 'start_date' | '-start_date' | 'target_date' | '-target_date' | 'complete_date' | '-complete_date' | 'project_code' | '-project_code',
        outstanding?: boolean,
        overdue?: boolean,
        part?: number,
        projectCode?: number,
        reference?: string,
        search?: string,
        startDateAfter?: string,
        startDateBefore?: string,
        status?: number,
        tags?: string,
        targetDateAfter?: string,
        targetDateBefore?: string,
        updatedAfter?: string,
        updatedBefore?: string,
    ): CancelablePromise<PaginatedTransferOrderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/transfer-order/',
            query: {
                'assigned_to': assignedTo,
                'assigned_to_me': assignedToMe,
                'completed_after': completedAfter,
                'completed_before': completedBefore,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'created_by': createdBy,
                'has_project_code': hasProjectCode,
                'has_start_date': hasStartDate,
                'has_target_date': hasTargetDate,
                'include_variants': includeVariants,
                'limit': limit,
                'max_date': maxDate,
                'min_date': minDate,
                'offset': offset,
                'ordering': ordering,
                'outstanding': outstanding,
                'overdue': overdue,
                'part': part,
                'project_code': projectCode,
                'reference': reference,
                'search': search,
                'start_date_after': startDateAfter,
                'start_date_before': startDateBefore,
                'status': status,
                'tags': tags,
                'target_date_after': targetDateAfter,
                'target_date_before': targetDateBefore,
                'updated_after': updatedAfter,
                'updated_before': updatedBefore,
            },
        });
    }
    /**
     * API endpoint for accessing a list of TransferOrder objects.
     * @param requestBody
     * @returns TransferOrder
     * @throws ApiError
     */
    public static orderTransferOrderCreate(
        requestBody: TransferOrder,
    ): CancelablePromise<TransferOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/transfer-order/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for listing TransferOrderAllocation objects.
     * @param limit Number of results to return per page.
     * @param includeVariants Include Variants
     * @param item
     * @param itemDetail Include detailed information about the item in the response
     * @param line
     * @param location Location
     * @param locationDetail Include detailed information about the stock location in the response
     * @param offset The initial index from which to return the results.
     * @param order Order
     * @param orderDetail Include detailed information about the sales order in the response
     * @param ordering Which field to use when ordering the results.
     * @param outstanding Outstanding
     * @param part Part
     * @param partDetail Include detailed information about the related part in the response
     * @param search A search term. Searched fields: item__batch, item__part__IPN, item__part__name, item__serial.
     * @returns PaginatedTransferOrderAllocationList
     * @throws ApiError
     */
    public static orderTransferOrderAllocationList(
        limit: number,
        includeVariants?: boolean,
        item?: number,
        itemDetail: boolean = false,
        line?: number,
        location?: number,
        locationDetail: boolean = false,
        offset?: number,
        order?: number,
        orderDetail: boolean = false,
        ordering?: 'quantity' | '-quantity' | 'part' | '-part' | 'serial' | '-serial' | 'IPN' | '-IPN' | 'batch' | '-batch' | 'location' | '-location' | 'order' | '-order',
        outstanding?: boolean,
        part?: number,
        partDetail: boolean = false,
        search?: string,
    ): CancelablePromise<PaginatedTransferOrderAllocationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/transfer-order-allocation/',
            query: {
                'include_variants': includeVariants,
                'item': item,
                'item_detail': itemDetail,
                'limit': limit,
                'line': line,
                'location': location,
                'location_detail': locationDetail,
                'offset': offset,
                'order': order,
                'order_detail': orderDetail,
                'ordering': ordering,
                'outstanding': outstanding,
                'part': part,
                'part_detail': partDetail,
                'search': search,
            },
        });
    }
    /**
     * Perform a PUT operation against this list endpoint.
     *
     * Simply redirects to the PATCH method.
     * @param requestBody
     * @returns TransferOrderAllocation
     * @throws ApiError
     */
    public static orderTransferOrderAllocationBulkUpdate(
        requestBody: TransferOrderAllocation,
    ): CancelablePromise<TransferOrderAllocation> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/transfer-order-allocation/',
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
     * @returns TransferOrderAllocation
     * @throws ApiError
     */
    public static orderTransferOrderAllocationBulkPartialUpdate(
        requestBody?: PatchedTransferOrderAllocation,
    ): CancelablePromise<TransferOrderAllocation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/transfer-order-allocation/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a TransferOrderAllocation object.
     * @param id
     * @returns TransferOrderAllocation
     * @throws ApiError
     */
    public static orderTransferOrderAllocationRetrieve(
        id: number,
    ): CancelablePromise<TransferOrderAllocation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/transfer-order-allocation/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a TransferOrderAllocation object.
     * @param id
     * @param requestBody
     * @returns TransferOrderAllocation
     * @throws ApiError
     */
    public static orderTransferOrderAllocationUpdate(
        id: number,
        requestBody: TransferOrderAllocation,
    ): CancelablePromise<TransferOrderAllocation> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/transfer-order-allocation/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a TransferOrderAllocation object.
     * @param id
     * @param requestBody
     * @returns TransferOrderAllocation
     * @throws ApiError
     */
    public static orderTransferOrderAllocationPartialUpdate(
        id: number,
        requestBody?: PatchedTransferOrderAllocation,
    ): CancelablePromise<TransferOrderAllocation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/transfer-order-allocation/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a TransferOrderAllocation object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderTransferOrderAllocationDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/transfer-order-allocation/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param allocated Allocated
     * @param completed Completed
     * @param hasPricing Has Pricing
     * @param offset The initial index from which to return the results.
     * @param order Order
     * @param orderComplete Order Complete
     * @param orderDetail Include detailed information about the sales order in the response
     * @param orderOutstanding Order Outstanding
     * @param orderStatus Order Status
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @param partDetail Include detailed information about the related part in the response
     * @param search A search term. Searched fields: part__name, quantity, reference.
     * @returns PaginatedTransferOrderLineItemList
     * @throws ApiError
     */
    public static orderTransferOrderLineList(
        limit: number,
        allocated?: boolean,
        completed?: boolean,
        hasPricing?: boolean,
        offset?: number,
        order?: number,
        orderComplete?: boolean,
        orderDetail: boolean = false,
        orderOutstanding?: boolean,
        orderStatus?: number,
        ordering?: 'order' | '-order' | 'part' | '-part' | 'part__name' | '-part__name' | 'quantity' | '-quantity' | 'allocated' | '-allocated' | 'transferred' | '-transferred' | 'reference' | '-reference' | 'target_date' | '-target_date',
        part?: number,
        partDetail: boolean = false,
        search?: string,
    ): CancelablePromise<PaginatedTransferOrderLineItemList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/transfer-order-line/',
            query: {
                'allocated': allocated,
                'completed': completed,
                'has_pricing': hasPricing,
                'limit': limit,
                'offset': offset,
                'order': order,
                'order_complete': orderComplete,
                'order_detail': orderDetail,
                'order_outstanding': orderOutstanding,
                'order_status': orderStatus,
                'ordering': ordering,
                'part': part,
                'part_detail': partDetail,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for accessing a list of TransferOrderLineItem objects.
     * @param requestBody
     * @returns TransferOrderLineItem
     * @throws ApiError
     */
    public static orderTransferOrderLineCreate(
        requestBody: TransferOrderLineItem,
    ): CancelablePromise<TransferOrderLineItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/transfer-order-line/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a TransferOrderLineItem object.
     * @param id
     * @param orderDetail Include detailed information about the sales order in the response
     * @param partDetail Include detailed information about the related part in the response
     * @returns TransferOrderLineItem
     * @throws ApiError
     */
    public static orderTransferOrderLineRetrieve(
        id: number,
        orderDetail: boolean = false,
        partDetail: boolean = false,
    ): CancelablePromise<TransferOrderLineItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/transfer-order-line/{id}/',
            path: {
                'id': id,
            },
            query: {
                'order_detail': orderDetail,
                'part_detail': partDetail,
            },
        });
    }
    /**
     * API endpoint for detail view of a TransferOrderLineItem object.
     * @param id
     * @param requestBody
     * @returns TransferOrderLineItem
     * @throws ApiError
     */
    public static orderTransferOrderLineUpdate(
        id: number,
        requestBody: TransferOrderLineItem,
    ): CancelablePromise<TransferOrderLineItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/transfer-order-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a TransferOrderLineItem object.
     * @param id
     * @param requestBody
     * @returns TransferOrderLineItem
     * @throws ApiError
     */
    public static orderTransferOrderLinePartialUpdate(
        id: number,
        requestBody?: PatchedTransferOrderLineItem,
    ): CancelablePromise<TransferOrderLineItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/transfer-order-line/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a TransferOrderLineItem object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderTransferOrderLineDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/transfer-order-line/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a single TransferOrder object.
     * @param id
     * @returns TransferOrder
     * @throws ApiError
     */
    public static orderTransferOrderRetrieve(
        id: number,
    ): CancelablePromise<TransferOrder> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/transfer-order/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a single TransferOrder object.
     * @param id
     * @param requestBody
     * @returns TransferOrder
     * @throws ApiError
     */
    public static orderTransferOrderUpdate(
        id: number,
        requestBody: TransferOrder,
    ): CancelablePromise<TransferOrder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/order/transfer-order/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single TransferOrder object.
     * @param id
     * @param requestBody
     * @returns TransferOrder
     * @throws ApiError
     */
    public static orderTransferOrderPartialUpdate(
        id: number,
        requestBody?: PatchedTransferOrder,
    ): CancelablePromise<TransferOrder> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/order/transfer-order/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single TransferOrder object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static orderTransferOrderDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/order/transfer-order/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to allocate stock items against a TransferOrder.
     *
     * - The TransferOrder is specified in the URL
     * - See the TransferOrderAllocationSerializer class
     * @param id
     * @param requestBody
     * @returns TransferOrderLineItemAllocation
     * @throws ApiError
     */
    public static orderTransferOrderAllocateCreate(
        id: number,
        requestBody: TransferOrderLineItemAllocation,
    ): CancelablePromise<TransferOrderLineItemAllocation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/transfer-order/{id}/allocate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint to allocation stock items against a TransferOrder, by specifying serial numbers.
     * @param id
     * @param requestBody
     * @returns TransferOrderSerialAllocation
     * @throws ApiError
     */
    public static orderTransferOrderAllocateSerialsCreate(
        id: number,
        requestBody: TransferOrderSerialAllocation,
    ): CancelablePromise<TransferOrderSerialAllocation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/transfer-order/{id}/allocate-serials/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint to cancel a TransferOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderTransferOrderCancelCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/transfer-order/{id}/cancel/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to complete a TransferOrder.
     * @param id
     * @param requestBody
     * @returns TransferOrderComplete
     * @throws ApiError
     */
    public static orderTransferOrderCompleteCreate(
        id: number,
        requestBody?: TransferOrderComplete,
    ): CancelablePromise<TransferOrderComplete> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/transfer-order/{id}/complete/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint to hold a TransferOrder.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderTransferOrderHoldCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/transfer-order/{id}/hold/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint to issue a Transfer Order.
     * @param id
     * @returns any No response body
     * @throws ApiError
     */
    public static orderTransferOrderIssueCreate(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/transfer-order/{id}/issue/',
            path: {
                'id': id,
            },
        });
    }
}
