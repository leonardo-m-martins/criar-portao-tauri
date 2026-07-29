/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkRequest } from '../models/BulkRequest';
import type { Category } from '../models/Category';
import type { CategoryParameterTemplate } from '../models/CategoryParameterTemplate';
import type { PaginatedCategoryList } from '../models/PaginatedCategoryList';
import type { PaginatedCategoryParameterTemplateList } from '../models/PaginatedCategoryParameterTemplateList';
import type { PaginatedCategoryTreeList } from '../models/PaginatedCategoryTreeList';
import type { PaginatedPartInternalPriceList } from '../models/PaginatedPartInternalPriceList';
import type { PaginatedPartList } from '../models/PaginatedPartList';
import type { PaginatedPartRelationList } from '../models/PaginatedPartRelationList';
import type { PaginatedPartSalePriceList } from '../models/PaginatedPartSalePriceList';
import type { PaginatedPartStocktakeList } from '../models/PaginatedPartStocktakeList';
import type { PaginatedPartTestTemplateList } from '../models/PaginatedPartTestTemplateList';
import type { PaginatedPartThumbList } from '../models/PaginatedPartThumbList';
import type { Part } from '../models/Part';
import type { PartBomValidate } from '../models/PartBomValidate';
import type { PartCopyBOM } from '../models/PartCopyBOM';
import type { PartInternalPrice } from '../models/PartInternalPrice';
import type { PartPricing } from '../models/PartPricing';
import type { PartRelation } from '../models/PartRelation';
import type { PartRequirements } from '../models/PartRequirements';
import type { PartSalePrice } from '../models/PartSalePrice';
import type { PartSerialNumber } from '../models/PartSerialNumber';
import type { PartStocktake } from '../models/PartStocktake';
import type { PartStocktakeGenerate } from '../models/PartStocktakeGenerate';
import type { PartTestTemplate } from '../models/PartTestTemplate';
import type { PartThumbSerializerUpdate } from '../models/PartThumbSerializerUpdate';
import type { PatchedCategory } from '../models/PatchedCategory';
import type { PatchedCategoryParameterTemplate } from '../models/PatchedCategoryParameterTemplate';
import type { PatchedPart } from '../models/PatchedPart';
import type { PatchedPartBomValidate } from '../models/PatchedPartBomValidate';
import type { PatchedPartInternalPrice } from '../models/PatchedPartInternalPrice';
import type { PatchedPartPricing } from '../models/PatchedPartPricing';
import type { PatchedPartRelation } from '../models/PatchedPartRelation';
import type { PatchedPartSalePrice } from '../models/PatchedPartSalePrice';
import type { PatchedPartStocktake } from '../models/PatchedPartStocktake';
import type { PatchedPartTestTemplate } from '../models/PatchedPartTestTemplate';
import type { PatchedPartThumbSerializerUpdate } from '../models/PatchedPartThumbSerializerUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PartService {
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param ipn Filter by exact IPN (internal part number)
     * @param ipnRegex Filter by regex on IPN (internal part number)
     * @param active
     * @param ancestor
     * @param assembly
     * @param bomValid BOM Valid
     * @param cascade If true, include items in child categories of the given category
     * @param category Filter by numeric category ID or the literal 'null'
     * @param categoryDetail
     * @param component
     * @param convertFrom
     * @param createdAfter Updated after
     * @param createdBefore Updated before
     * @param defaultLocation Default Location
     * @param depletedStock Depleted Stock
     * @param excludeId Exclude parts with these IDs (comma-separated)
     * @param excludeRelated Exclude parts related to this part ID
     * @param excludeTree
     * @param hasIpn Has IPN
     * @param hasPricing Has Pricing
     * @param hasRevisions Has Revisions
     * @param hasStock Has stock
     * @param hasUnits Has units
     * @param highStock High stock
     * @param inBomFor
     * @param isRevision Is Revision
     * @param isTemplate
     * @param isVariant Is Variant
     * @param locationDetail Include detailed information about the stock location in the response
     * @param locked
     * @param lowStock Low stock
     * @param nameRegex Filter by name (regex)
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param parameters Include part parameters in response
     * @param pathDetail
     * @param priceBreaks
     * @param purchaseable
     * @param related Show parts related to this part ID
     * @param revisionOf
     * @param salable
     * @param search A search term. Searched fields: IPN, category__name, description, keywords, manufacturer_parts__MPN, name, revision, supplier_parts__SKU, tags__name, tags__slug.
     * @param starred Starred
     * @param stockToBuild Required for Build Order
     * @param tags
     * @param testable
     * @param trackable
     * @param unallocatedStock Unallocated stock
     * @param variantOf Variant Of
     * @param virtual
     * @returns PaginatedPartList
     * @throws ApiError
     */
    public static partList(
        limit: number,
        ipn?: string,
        ipnRegex?: string,
        active?: boolean,
        ancestor?: number,
        assembly?: boolean,
        bomValid?: boolean,
        cascade?: boolean,
        category?: number,
        categoryDetail: boolean = false,
        component?: boolean,
        convertFrom?: number,
        createdAfter?: string,
        createdBefore?: string,
        defaultLocation?: number,
        depletedStock?: boolean,
        excludeId?: Array<number>,
        excludeRelated?: number,
        excludeTree?: number,
        hasIpn?: boolean,
        hasPricing?: boolean,
        hasRevisions?: boolean,
        hasStock?: boolean,
        hasUnits?: boolean,
        highStock?: boolean,
        inBomFor?: number,
        isRevision?: boolean,
        isTemplate?: boolean,
        isVariant?: boolean,
        locationDetail: boolean = false,
        locked?: boolean,
        lowStock?: boolean,
        nameRegex?: string,
        offset?: number,
        ordering?: 'id' | '-id' | 'name' | '-name' | 'creation_date' | '-creation_date' | 'IPN' | '-IPN' | 'in_stock' | '-in_stock' | 'total_in_stock' | '-total_in_stock' | 'unallocated_stock' | '-unallocated_stock' | 'category' | '-category' | 'default_location' | '-default_location' | 'units' | '-units' | 'pricing_min' | '-pricing_min' | 'pricing_max' | '-pricing_max' | 'pricing_updated' | '-pricing_updated' | 'revision' | '-revision' | 'revision_count' | '-revision_count',
        parameters: boolean = false,
        pathDetail: boolean = false,
        priceBreaks: boolean = false,
        purchaseable?: boolean,
        related?: number,
        revisionOf?: number,
        salable?: boolean,
        search?: string,
        starred?: boolean,
        stockToBuild?: boolean,
        tags: boolean = false,
        testable?: boolean,
        trackable?: boolean,
        unallocatedStock?: boolean,
        variantOf?: number,
        virtual?: boolean,
    ): CancelablePromise<PaginatedPartList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/',
            query: {
                'IPN': ipn,
                'IPN_regex': ipnRegex,
                'active': active,
                'ancestor': ancestor,
                'assembly': assembly,
                'bom_valid': bomValid,
                'cascade': cascade,
                'category': category,
                'category_detail': categoryDetail,
                'component': component,
                'convert_from': convertFrom,
                'created_after': createdAfter,
                'created_before': createdBefore,
                'default_location': defaultLocation,
                'depleted_stock': depletedStock,
                'exclude_id': excludeId,
                'exclude_related': excludeRelated,
                'exclude_tree': excludeTree,
                'has_ipn': hasIpn,
                'has_pricing': hasPricing,
                'has_revisions': hasRevisions,
                'has_stock': hasStock,
                'has_units': hasUnits,
                'high_stock': highStock,
                'in_bom_for': inBomFor,
                'is_revision': isRevision,
                'is_template': isTemplate,
                'is_variant': isVariant,
                'limit': limit,
                'location_detail': locationDetail,
                'locked': locked,
                'low_stock': lowStock,
                'name_regex': nameRegex,
                'offset': offset,
                'ordering': ordering,
                'parameters': parameters,
                'path_detail': pathDetail,
                'price_breaks': priceBreaks,
                'purchaseable': purchaseable,
                'related': related,
                'revision_of': revisionOf,
                'salable': salable,
                'search': search,
                'starred': starred,
                'stock_to_build': stockToBuild,
                'tags': tags,
                'testable': testable,
                'trackable': trackable,
                'unallocated_stock': unallocatedStock,
                'variant_of': variantOf,
                'virtual': virtual,
            },
        });
    }
    /**
     * API endpoint for accessing a list of Part objects, or creating a new Part instance.
     * @param requestBody
     * @returns Part
     * @throws ApiError
     */
    public static partCreate(
        requestBody: Part,
    ): CancelablePromise<Part> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a PUT operation against this list endpoint.
     *
     * Simply redirects to the PATCH method.
     * @param requestBody
     * @returns Part
     * @throws ApiError
     */
    public static partBulkUpdate(
        requestBody: Part,
    ): CancelablePromise<Part> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/',
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
     * @returns Part
     * @throws ApiError
     */
    public static partBulkPartialUpdate(
        requestBody?: PatchedPart,
    ): CancelablePromise<Part> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single Part object.
     * @param id
     * @param categoryDetail
     * @param locationDetail Include detailed information about the stock location in the response
     * @param parameters Include part parameters in response
     * @param pathDetail
     * @param priceBreaks
     * @param tags
     * @returns Part
     * @throws ApiError
     */
    public static partRetrieve(
        id: number,
        categoryDetail: boolean = false,
        locationDetail: boolean = false,
        parameters: boolean = false,
        pathDetail: boolean = false,
        priceBreaks: boolean = false,
        tags: boolean = false,
    ): CancelablePromise<Part> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/{id}/',
            path: {
                'id': id,
            },
            query: {
                'category_detail': categoryDetail,
                'location_detail': locationDetail,
                'parameters': parameters,
                'path_detail': pathDetail,
                'price_breaks': priceBreaks,
                'tags': tags,
            },
        });
    }
    /**
     * API endpoint for detail view of a single Part object.
     * @param id
     * @param requestBody
     * @returns Part
     * @throws ApiError
     */
    public static partUpdate(
        id: number,
        requestBody: Part,
    ): CancelablePromise<Part> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single Part object.
     * @param id
     * @param requestBody
     * @returns Part
     * @throws ApiError
     */
    public static partPartialUpdate(
        id: number,
        requestBody?: PatchedPart,
    ): CancelablePromise<Part> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of a single Part object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static partDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/part/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for duplicating a BOM.
     * @param id
     * @param requestBody
     * @returns PartCopyBOM
     * @throws ApiError
     */
    public static partBomCopyCreate(
        id: number,
        requestBody: PartCopyBOM,
    ): CancelablePromise<PartCopyBOM> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/{id}/bom-copy/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for 'validating' the BOM for a given Part.
     * @param id
     * @returns PartBomValidate
     * @throws ApiError
     */
    public static partBomValidateRetrieve(
        id: number,
    ): CancelablePromise<PartBomValidate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/{id}/bom-validate/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for 'validating' the BOM for a given Part.
     * @param id
     * @param requestBody
     * @returns PartBomValidate
     * @throws ApiError
     */
    public static partBomValidateUpdate(
        id: number,
        requestBody?: PartBomValidate,
    ): CancelablePromise<PartBomValidate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/{id}/bom-validate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for 'validating' the BOM for a given Part.
     * @param id
     * @param requestBody
     * @returns PartBomValidate
     * @throws ApiError
     */
    public static partBomValidatePartialUpdate(
        id: number,
        requestBody?: PatchedPartBomValidate,
    ): CancelablePromise<PartBomValidate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/{id}/bom-validate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for viewing part pricing data.
     * @param id
     * @returns PartPricing
     * @throws ApiError
     */
    public static partPricingRetrieve(
        id: number,
    ): CancelablePromise<PartPricing> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/{id}/pricing/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for viewing part pricing data.
     * @param id
     * @param requestBody
     * @returns PartPricing
     * @throws ApiError
     */
    public static partPricingUpdate(
        id: number,
        requestBody?: PartPricing,
    ): CancelablePromise<PartPricing> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/{id}/pricing/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for viewing part pricing data.
     * @param id
     * @param requestBody
     * @returns PartPricing
     * @throws ApiError
     */
    public static partPricingPartialUpdate(
        id: number,
        requestBody?: PatchedPartPricing,
    ): CancelablePromise<PartPricing> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/{id}/pricing/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint detailing 'requirements' information for a particular part.
     *
     * This endpoint returns information on upcoming requirements for:
     *
     * - Sales Orders
     * - Build Orders
     * - Total requirements
     * - How many of this part can be assembled with available stock
     *
     * As this data is somewhat complex to calculate, is it not included in the default API
     * @param id
     * @returns PartRequirements
     * @throws ApiError
     */
    public static partRequirementsRetrieve(
        id: number,
    ): CancelablePromise<PartRequirements> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/{id}/requirements/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for returning extra serial number information about a particular part.
     * @param id
     * @returns PartSerialNumber
     * @throws ApiError
     */
    public static partSerialNumbersRetrieve(
        id: number,
    ): CancelablePromise<PartSerialNumber> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/{id}/serial-numbers/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param cascade Include sub-categories in filtered results
     * @param depth Filter by category depth
     * @param excludeTree
     * @param name
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param parent Filter by parent category
     * @param pathDetail
     * @param search A search term. Searched fields: description, name, pathstring.
     * @param starred Filter by starred categories
     * @param structural
     * @param topLevel Filter by top-level categories
     * @returns PaginatedCategoryList
     * @throws ApiError
     */
    public static partCategoryList(
        limit: number,
        cascade?: boolean,
        depth?: number,
        excludeTree?: number,
        name?: string,
        offset?: number,
        ordering?: 'name' | '-name' | 'pathstring' | '-pathstring' | 'level' | '-level' | 'tree_id' | '-tree_id' | 'lft' | '-lft' | 'part_count' | '-part_count',
        parent?: number,
        pathDetail: boolean = false,
        search?: string,
        starred?: boolean,
        structural?: boolean,
        topLevel?: boolean,
    ): CancelablePromise<PaginatedCategoryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/category/',
            query: {
                'cascade': cascade,
                'depth': depth,
                'exclude_tree': excludeTree,
                'limit': limit,
                'name': name,
                'offset': offset,
                'ordering': ordering,
                'parent': parent,
                'path_detail': pathDetail,
                'search': search,
                'starred': starred,
                'structural': structural,
                'top_level': topLevel,
            },
        });
    }
    /**
     * API endpoint for accessing a list of PartCategory objects.
     *
     * - GET: Return a list of PartCategory objects
     * - POST: Create a new PartCategory object
     * @param requestBody
     * @returns Category
     * @throws ApiError
     */
    public static partCategoryCreate(
        requestBody: Category,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/category/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Perform a PUT operation against this list endpoint.
     *
     * Simply redirects to the PATCH method.
     * @param requestBody
     * @returns Category
     * @throws ApiError
     */
    public static partCategoryBulkUpdate(
        requestBody: Category,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/category/',
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
     * @returns Category
     * @throws ApiError
     */
    public static partCategoryBulkPartialUpdate(
        requestBody?: PatchedCategory,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/category/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Custom get method to pass kwargs.
     * @param id
     * @param pathDetail
     * @returns Category
     * @throws ApiError
     */
    public static partCategoryRetrieve(
        id: number,
        pathDetail: boolean = false,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/category/{id}/',
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
     * @returns Category
     * @throws ApiError
     */
    public static partCategoryUpdate(
        id: number,
        requestBody: Category,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/category/{id}/',
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
     * @returns Category
     * @throws ApiError
     */
    public static partCategoryPartialUpdate(
        id: number,
        requestBody?: PatchedCategory,
    ): CancelablePromise<Category> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/category/{id}/',
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
    public static partCategoryDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/part/category/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedCategoryParameterTemplateList
     * @throws ApiError
     */
    public static partCategoryParametersList(
        limit: number,
        offset?: number,
    ): CancelablePromise<PaginatedCategoryParameterTemplateList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/category/parameters/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * API endpoint for accessing a list of PartCategoryParameterTemplate objects.
     *
     * - GET: Return a list of PartCategoryParameterTemplate objects
     * @param requestBody
     * @returns CategoryParameterTemplate
     * @throws ApiError
     */
    public static partCategoryParametersCreate(
        requestBody: CategoryParameterTemplate,
    ): CancelablePromise<CategoryParameterTemplate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/category/parameters/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for the PartCategoryParameterTemplate model.
     * @param id
     * @returns CategoryParameterTemplate
     * @throws ApiError
     */
    public static partCategoryParametersRetrieve(
        id: number,
    ): CancelablePromise<CategoryParameterTemplate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/category/parameters/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for the PartCategoryParameterTemplate model.
     * @param id
     * @param requestBody
     * @returns CategoryParameterTemplate
     * @throws ApiError
     */
    public static partCategoryParametersUpdate(
        id: number,
        requestBody: CategoryParameterTemplate,
    ): CancelablePromise<CategoryParameterTemplate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/category/parameters/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for the PartCategoryParameterTemplate model.
     * @param id
     * @param requestBody
     * @returns CategoryParameterTemplate
     * @throws ApiError
     */
    public static partCategoryParametersPartialUpdate(
        id: number,
        requestBody?: PatchedCategoryParameterTemplate,
    ): CancelablePromise<CategoryParameterTemplate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/category/parameters/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for the PartCategoryParameterTemplate model.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static partCategoryParametersDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/part/category/parameters/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for accessing a list of PartCategory objects ready for rendering a tree.
     * @param limit Number of results to return per page.
     * @param level
     * @param maxLevel Limit the depth of the category tree
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param parent
     * @param search A search term. Searched fields: description, name.
     * @param treeId
     * @returns PaginatedCategoryTreeList
     * @throws ApiError
     */
    public static partCategoryTreeList(
        limit: number,
        level?: number,
        maxLevel?: number,
        offset?: number,
        ordering?: 'level' | '-level' | 'name' | '-name' | 'subcategories' | '-subcategories',
        parent?: number,
        search?: string,
        treeId?: number,
    ): CancelablePromise<PaginatedCategoryTreeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/category/tree/',
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
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @param search A search term.
     * @returns PaginatedPartInternalPriceList
     * @throws ApiError
     */
    public static partInternalPriceList(
        limit: number,
        offset?: number,
        ordering?: 'quantity' | '-quantity' | 'price' | '-price',
        part?: number,
        search?: string,
    ): CancelablePromise<PaginatedPartInternalPriceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/internal-price/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for list view of PartInternalPriceBreak model.
     * @param requestBody
     * @returns PartInternalPrice
     * @throws ApiError
     */
    public static partInternalPriceCreate(
        requestBody: PartInternalPrice,
    ): CancelablePromise<PartInternalPrice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/internal-price/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for PartInternalPriceBreak model.
     * @param id
     * @returns PartInternalPrice
     * @throws ApiError
     */
    public static partInternalPriceRetrieve(
        id: number,
    ): CancelablePromise<PartInternalPrice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/internal-price/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for PartInternalPriceBreak model.
     * @param id
     * @param requestBody
     * @returns PartInternalPrice
     * @throws ApiError
     */
    public static partInternalPriceUpdate(
        id: number,
        requestBody: PartInternalPrice,
    ): CancelablePromise<PartInternalPrice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/internal-price/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for PartInternalPriceBreak model.
     * @param id
     * @param requestBody
     * @returns PartInternalPrice
     * @throws ApiError
     */
    public static partInternalPricePartialUpdate(
        id: number,
        requestBody?: PatchedPartInternalPrice,
    ): CancelablePromise<PartInternalPrice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/internal-price/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for PartInternalPriceBreak model.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static partInternalPriceDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/part/internal-price/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for accessing a list of PartRelated objects.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part Part
     * @param part1
     * @param part2
     * @param search A search term. Searched fields: part_1__name, part_2__name.
     * @returns PaginatedPartRelationList
     * @throws ApiError
     */
    public static partRelatedList(
        limit: number,
        offset?: number,
        ordering?: string,
        part?: number,
        part1?: number,
        part2?: number,
        search?: string,
    ): CancelablePromise<PaginatedPartRelationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/related/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'part_1': part1,
                'part_2': part2,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for accessing a list of PartRelated objects.
     * @param requestBody
     * @returns PartRelation
     * @throws ApiError
     */
    public static partRelatedCreate(
        requestBody: PartRelation,
    ): CancelablePromise<PartRelation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/related/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for accessing detail view of a PartRelated object.
     * @param id
     * @returns PartRelation
     * @throws ApiError
     */
    public static partRelatedRetrieve(
        id: number,
    ): CancelablePromise<PartRelation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/related/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for accessing detail view of a PartRelated object.
     * @param id
     * @param requestBody
     * @returns PartRelation
     * @throws ApiError
     */
    public static partRelatedUpdate(
        id: number,
        requestBody: PartRelation,
    ): CancelablePromise<PartRelation> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/related/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for accessing detail view of a PartRelated object.
     * @param id
     * @param requestBody
     * @returns PartRelation
     * @throws ApiError
     */
    public static partRelatedPartialUpdate(
        id: number,
        requestBody?: PatchedPartRelation,
    ): CancelablePromise<PartRelation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/related/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for accessing detail view of a PartRelated object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static partRelatedDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/part/related/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @param search A search term.
     * @returns PaginatedPartSalePriceList
     * @throws ApiError
     */
    public static partSalePriceList(
        limit: number,
        offset?: number,
        ordering?: 'quantity' | '-quantity' | 'price' | '-price',
        part?: number,
        search?: string,
    ): CancelablePromise<PaginatedPartSalePriceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/sale-price/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for list view of PartSalePriceBreak model.
     * @param requestBody
     * @returns PartSalePrice
     * @throws ApiError
     */
    public static partSalePriceCreate(
        requestBody: PartSalePrice,
    ): CancelablePromise<PartSalePrice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/sale-price/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for PartSellPriceBreak model.
     * @param id
     * @returns PartSalePrice
     * @throws ApiError
     */
    public static partSalePriceRetrieve(
        id: number,
    ): CancelablePromise<PartSalePrice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/sale-price/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for PartSellPriceBreak model.
     * @param id
     * @param requestBody
     * @returns PartSalePrice
     * @throws ApiError
     */
    public static partSalePriceUpdate(
        id: number,
        requestBody: PartSalePrice,
    ): CancelablePromise<PartSalePrice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/sale-price/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for PartSellPriceBreak model.
     * @param id
     * @param requestBody
     * @returns PartSalePrice
     * @throws ApiError
     */
    public static partSalePricePartialUpdate(
        id: number,
        requestBody?: PatchedPartSalePrice,
    ): CancelablePromise<PartSalePrice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/sale-price/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for PartSellPriceBreak model.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static partSalePriceDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/part/sale-price/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @returns PaginatedPartStocktakeList
     * @throws ApiError
     */
    public static partStocktakeList(
        limit: number,
        offset?: number,
        ordering?: 'part' | '-part' | 'item_count' | '-item_count' | 'quantity' | '-quantity' | 'date' | '-date' | 'user' | '-user' | 'pk' | '-pk',
        part?: number,
    ): CancelablePromise<PaginatedPartStocktakeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/stocktake/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'part': part,
            },
        });
    }
    /**
     * API endpoint for listing part stocktake information.
     * @param requestBody
     * @returns PartStocktake
     * @throws ApiError
     */
    public static partStocktakeCreate(
        requestBody: PartStocktake,
    ): CancelablePromise<PartStocktake> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/stocktake/',
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
    public static partStocktakeBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/part/stocktake/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for a single PartStocktake instance.
     *
     * Note: Only staff (admin) users can access this endpoint.
     * @param id
     * @returns PartStocktake
     * @throws ApiError
     */
    public static partStocktakeRetrieve(
        id: number,
    ): CancelablePromise<PartStocktake> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/stocktake/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail API endpoint for a single PartStocktake instance.
     *
     * Note: Only staff (admin) users can access this endpoint.
     * @param id
     * @param requestBody
     * @returns PartStocktake
     * @throws ApiError
     */
    public static partStocktakeUpdate(
        id: number,
        requestBody: PartStocktake,
    ): CancelablePromise<PartStocktake> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/stocktake/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for a single PartStocktake instance.
     *
     * Note: Only staff (admin) users can access this endpoint.
     * @param id
     * @param requestBody
     * @returns PartStocktake
     * @throws ApiError
     */
    public static partStocktakePartialUpdate(
        id: number,
        requestBody?: PatchedPartStocktake,
    ): CancelablePromise<PartStocktake> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/stocktake/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail API endpoint for a single PartStocktake instance.
     *
     * Note: Only staff (admin) users can access this endpoint.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static partStocktakeDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/part/stocktake/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Perform stocktake generation on POST request.
     * @param requestBody
     * @returns PartStocktakeGenerate
     * @throws ApiError
     */
    public static partStocktakeGenerateCreate(
        requestBody?: PartStocktakeGenerate,
    ): CancelablePromise<PartStocktakeGenerate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/stocktake/generate/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param enabled
     * @param hasResults Has Results
     * @param key
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part Part
     * @param required
     * @param requiresAttachment
     * @param requiresValue
     * @param search A search term. Searched fields: description, test_name.
     * @returns PaginatedPartTestTemplateList
     * @throws ApiError
     */
    public static partTestTemplateList(
        limit: number,
        enabled?: boolean,
        hasResults?: boolean,
        key?: string,
        offset?: number,
        ordering?: 'enabled' | '-enabled' | 'required' | '-required' | 'requires_value' | '-requires_value' | 'requires_attachment' | '-requires_attachment' | 'results' | '-results' | 'test_name' | '-test_name',
        part?: number,
        required?: boolean,
        requiresAttachment?: boolean,
        requiresValue?: boolean,
        search?: string,
    ): CancelablePromise<PaginatedPartTestTemplateList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/test-template/',
            query: {
                'enabled': enabled,
                'has_results': hasResults,
                'key': key,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'required': required,
                'requires_attachment': requiresAttachment,
                'requires_value': requiresValue,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for listing (and creating) a PartTestTemplate.
     * @param requestBody
     * @returns PartTestTemplate
     * @throws ApiError
     */
    public static partTestTemplateCreate(
        requestBody: PartTestTemplate,
    ): CancelablePromise<PartTestTemplate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/part/test-template/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for PartTestTemplate model.
     * @param id
     * @returns PartTestTemplate
     * @throws ApiError
     */
    public static partTestTemplateRetrieve(
        id: number,
    ): CancelablePromise<PartTestTemplate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/test-template/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for PartTestTemplate model.
     * @param id
     * @param requestBody
     * @returns PartTestTemplate
     * @throws ApiError
     */
    public static partTestTemplateUpdate(
        id: number,
        requestBody: PartTestTemplate,
    ): CancelablePromise<PartTestTemplate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/test-template/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for PartTestTemplate model.
     * @param id
     * @param requestBody
     * @returns PartTestTemplate
     * @throws ApiError
     */
    public static partTestTemplatePartialUpdate(
        id: number,
        requestBody?: PatchedPartTestTemplate,
    ): CancelablePromise<PartTestTemplate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/test-template/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for PartTestTemplate model.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static partTestTemplateDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/part/test-template/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for retrieving information on available Part thumbnails.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term. Searched fields: IPN, category__name, description, keywords, name, revision.
     * @returns PaginatedPartThumbList
     * @throws ApiError
     */
    public static partThumbsList(
        limit: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedPartThumbList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/thumbs/',
            query: {
                'limit': limit,
                'offset': offset,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for updating Part thumbnails.
     * @param id
     * @returns PartThumbSerializerUpdate
     * @throws ApiError
     */
    public static partThumbsRetrieve(
        id: number,
    ): CancelablePromise<PartThumbSerializerUpdate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/part/thumbs/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for updating Part thumbnails.
     * @param id
     * @param requestBody
     * @returns PartThumbSerializerUpdate
     * @throws ApiError
     */
    public static partThumbsUpdate(
        id: number,
        requestBody: PartThumbSerializerUpdate,
    ): CancelablePromise<PartThumbSerializerUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/part/thumbs/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for updating Part thumbnails.
     * @param id
     * @param requestBody
     * @returns PartThumbSerializerUpdate
     * @throws ApiError
     */
    public static partThumbsPartialUpdate(
        id: number,
        requestBody?: PatchedPartThumbSerializerUpdate,
    ): CancelablePromise<PartThumbSerializerUpdate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/part/thumbs/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
