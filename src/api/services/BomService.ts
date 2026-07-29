/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BomItem } from '../models/BomItem';
import type { BomItemSubstitute } from '../models/BomItemSubstitute';
import type { BomItemValidation } from '../models/BomItemValidation';
import type { BulkRequest } from '../models/BulkRequest';
import type { PaginatedBomItemList } from '../models/PaginatedBomItemList';
import type { PaginatedBomItemSubstituteList } from '../models/PaginatedBomItemSubstituteList';
import type { PatchedBomItem } from '../models/PatchedBomItem';
import type { PatchedBomItemSubstitute } from '../models/PatchedBomItemSubstitute';
import type { PatchedBomItemValidation } from '../models/PatchedBomItemValidation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BomService {
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param allowVariants
     * @param availableStock Has available stock
     * @param canBuild
     * @param category
     * @param consumable
     * @param hasPricing Has Pricing
     * @param inherited
     * @param offset The initial index from which to return the results.
     * @param onOrder On order
     * @param optional
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @param partActive Assembly part is active
     * @param partDetail Include detailed information about the related part in the response
     * @param partLocked Assembly part is locked
     * @param partTestable Assembly part is testable
     * @param partTrackable Assembly part is trackable
     * @param pricing
     * @param search A search term. Searched fields: part__IPN, part__description, part__keywords, part__name, part__revision, reference, sub_part__IPN, sub_part__category__name, sub_part__description, sub_part__keywords, sub_part__name, sub_part__revision.
     * @param subPartActive Component part is active
     * @param subPartAssembly Component part is an assembly
     * @param subPartDetail
     * @param subPartTestable Component part is testable
     * @param subPartTrackable Component part is trackable
     * @param subPartVirtual Component part is virtual
     * @param substitutes
     * @param uses
     * @param validated
     * @returns PaginatedBomItemList
     * @throws ApiError
     */
    public static bomList(
        limit: number,
        allowVariants?: boolean,
        availableStock?: boolean,
        canBuild: boolean = true,
        category?: number,
        consumable?: boolean,
        hasPricing?: boolean,
        inherited?: boolean,
        offset?: number,
        onOrder?: boolean,
        optional?: boolean,
        ordering?: 'can_build' | '-can_build' | 'category' | '-category' | 'quantity' | '-quantity' | 'setup_quantity' | '-setup_quantity' | 'attrition' | '-attrition' | 'rounding_multiple' | '-rounding_multiple' | 'sub_part' | '-sub_part' | 'IPN' | '-IPN' | 'available_stock' | '-available_stock' | 'allow_variants' | '-allow_variants' | 'inherited' | '-inherited' | 'optional' | '-optional' | 'consumable' | '-consumable' | 'reference' | '-reference' | 'validated' | '-validated' | 'pricing_min' | '-pricing_min' | 'pricing_max' | '-pricing_max' | 'pricing_min_total' | '-pricing_min_total' | 'pricing_max_total' | '-pricing_max_total' | 'pricing_updated' | '-pricing_updated',
        part?: number,
        partActive?: boolean,
        partDetail: boolean = false,
        partLocked?: boolean,
        partTestable?: boolean,
        partTrackable?: boolean,
        pricing: boolean = false,
        search?: string,
        subPartActive?: boolean,
        subPartAssembly?: boolean,
        subPartDetail: boolean = false,
        subPartTestable?: boolean,
        subPartTrackable?: boolean,
        subPartVirtual?: boolean,
        substitutes: boolean = false,
        uses?: number,
        validated?: boolean,
    ): CancelablePromise<PaginatedBomItemList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/bom/',
            query: {
                'allow_variants': allowVariants,
                'available_stock': availableStock,
                'can_build': canBuild,
                'category': category,
                'consumable': consumable,
                'has_pricing': hasPricing,
                'inherited': inherited,
                'limit': limit,
                'offset': offset,
                'on_order': onOrder,
                'optional': optional,
                'ordering': ordering,
                'part': part,
                'part_active': partActive,
                'part_detail': partDetail,
                'part_locked': partLocked,
                'part_testable': partTestable,
                'part_trackable': partTrackable,
                'pricing': pricing,
                'search': search,
                'sub_part_active': subPartActive,
                'sub_part_assembly': subPartAssembly,
                'sub_part_detail': subPartDetail,
                'sub_part_testable': subPartTestable,
                'sub_part_trackable': subPartTrackable,
                'sub_part_virtual': subPartVirtual,
                'substitutes': substitutes,
                'uses': uses,
                'validated': validated,
            },
        });
    }
    /**
     * API endpoint for accessing a list of BomItem objects.
     *
     * - GET: Return list of BomItem objects
     * - POST: Create a new BomItem object
     * @param requestBody
     * @returns BomItem
     * @throws ApiError
     */
    public static bomCreate(
        requestBody: BomItem,
    ): CancelablePromise<BomItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/bom/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a PUT operation against this list endpoint.
     *
     * Simply redirects to the PATCH method.
     * @param requestBody
     * @returns BomItem
     * @throws ApiError
     */
    public static bomBulkUpdate(
        requestBody: BomItem,
    ): CancelablePromise<BomItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/bom/',
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
     * @returns BomItem
     * @throws ApiError
     */
    public static bomBulkPartialUpdate(
        requestBody?: PatchedBomItem,
    ): CancelablePromise<BomItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/bom/',
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
    public static bomBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/bom/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single BomItem object.
     * @param id
     * @param canBuild
     * @param partDetail Include detailed information about the related part in the response
     * @param pricing
     * @param subPartDetail
     * @param substitutes
     * @returns BomItem
     * @throws ApiError
     */
    public static bomRetrieve(
        id: number,
        canBuild: boolean = true,
        partDetail: boolean = false,
        pricing: boolean = false,
        subPartDetail: boolean = false,
        substitutes: boolean = false,
    ): CancelablePromise<BomItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/bom/{id}/',
            path: {
                'id': id,
            },
            query: {
                'can_build': canBuild,
                'part_detail': partDetail,
                'pricing': pricing,
                'sub_part_detail': subPartDetail,
                'substitutes': substitutes,
            },
        });
    }
    /**
     * API endpoint for detail view of a single BomItem object.
     * @param id
     * @param requestBody
     * @returns BomItem
     * @throws ApiError
     */
    public static bomUpdate(
        id: number,
        requestBody: BomItem,
    ): CancelablePromise<BomItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/bom/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single BomItem object.
     * @param id
     * @param requestBody
     * @returns BomItem
     * @throws ApiError
     */
    public static bomPartialUpdate(
        id: number,
        requestBody?: PatchedBomItem,
    ): CancelablePromise<BomItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/bom/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single BomItem object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static bomDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/bom/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for validating a BomItem.
     * @param id
     * @param requestBody
     * @returns BomItemValidation
     * @throws ApiError
     */
    public static bomValidateUpdate(
        id: number,
        requestBody?: BomItemValidation,
    ): CancelablePromise<BomItemValidation> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/bom/{id}/validate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for validating a BomItem.
     * @param id
     * @param requestBody
     * @returns BomItemValidation
     * @throws ApiError
     */
    public static bomValidatePartialUpdate(
        id: number,
        requestBody?: PatchedBomItemValidation,
    ): CancelablePromise<BomItemValidation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/bom/{id}/validate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for accessing a list of BomItemSubstitute objects.
     * @param limit Number of results to return per page.
     * @param bomItem
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @param search A search term.
     * @returns PaginatedBomItemSubstituteList
     * @throws ApiError
     */
    public static bomSubstituteList(
        limit: number,
        bomItem?: number,
        offset?: number,
        ordering?: string,
        part?: number,
        search?: string,
    ): CancelablePromise<PaginatedBomItemSubstituteList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/bom/substitute/',
            query: {
                'bom_item': bomItem,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for accessing a list of BomItemSubstitute objects.
     * @param requestBody
     * @returns BomItemSubstitute
     * @throws ApiError
     */
    public static bomSubstituteCreate(
        requestBody: BomItemSubstitute,
    ): CancelablePromise<BomItemSubstitute> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/bom/substitute/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single BomItemSubstitute object.
     * @param id
     * @returns BomItemSubstitute
     * @throws ApiError
     */
    public static bomSubstituteRetrieve(
        id: number,
    ): CancelablePromise<BomItemSubstitute> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/bom/substitute/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of a single BomItemSubstitute object.
     * @param id
     * @param requestBody
     * @returns BomItemSubstitute
     * @throws ApiError
     */
    public static bomSubstituteUpdate(
        id: number,
        requestBody: BomItemSubstitute,
    ): CancelablePromise<BomItemSubstitute> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/bom/substitute/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single BomItemSubstitute object.
     * @param id
     * @param requestBody
     * @returns BomItemSubstitute
     * @throws ApiError
     */
    public static bomSubstitutePartialUpdate(
        id: number,
        requestBody?: PatchedBomItemSubstitute,
    ): CancelablePromise<BomItemSubstitute> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/bom/substitute/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single BomItemSubstitute object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static bomSubstituteDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/bom/substitute/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
