/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from '../models/Address';
import type { BulkRequest } from '../models/BulkRequest';
import type { Company } from '../models/Company';
import type { Contact } from '../models/Contact';
import type { ManufacturerPart } from '../models/ManufacturerPart';
import type { PaginatedAddressList } from '../models/PaginatedAddressList';
import type { PaginatedCompanyList } from '../models/PaginatedCompanyList';
import type { PaginatedContactList } from '../models/PaginatedContactList';
import type { PaginatedManufacturerPartList } from '../models/PaginatedManufacturerPartList';
import type { PaginatedSupplierPartList } from '../models/PaginatedSupplierPartList';
import type { PaginatedSupplierPriceBreakList } from '../models/PaginatedSupplierPriceBreakList';
import type { PatchedAddress } from '../models/PatchedAddress';
import type { PatchedCompany } from '../models/PatchedCompany';
import type { PatchedContact } from '../models/PatchedContact';
import type { PatchedManufacturerPart } from '../models/PatchedManufacturerPart';
import type { PatchedSupplierPart } from '../models/PatchedSupplierPart';
import type { PatchedSupplierPriceBreak } from '../models/PatchedSupplierPriceBreak';
import type { SupplierPart } from '../models/SupplierPart';
import type { SupplierPriceBreak } from '../models/SupplierPriceBreak';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyService {
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param active
     * @param isCustomer
     * @param isManufacturer
     * @param isSupplier
     * @param name
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: description, name, tax_id, website.
     * @param tags Tags
     * @returns PaginatedCompanyList
     * @throws ApiError
     */
    public static companyList(
        limit: number,
        active?: boolean,
        isCustomer?: boolean,
        isManufacturer?: boolean,
        isSupplier?: boolean,
        name?: string,
        offset?: number,
        ordering?: 'active' | '-active' | 'name' | '-name' | 'parts_supplied' | '-parts_supplied' | 'parts_manufactured' | '-parts_manufactured',
        search?: string,
        tags?: string,
    ): CancelablePromise<PaginatedCompanyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/',
            query: {
                'active': active,
                'is_customer': isCustomer,
                'is_manufacturer': isManufacturer,
                'is_supplier': isSupplier,
                'limit': limit,
                'name': name,
                'offset': offset,
                'ordering': ordering,
                'search': search,
                'tags': tags,
            },
        });
    }
    /**
     * API endpoint for accessing a list of Company objects.
     *
     * Provides two methods:
     *
     * - GET: Return list of objects
     * - POST: Create a new Company object
     * @param requestBody
     * @returns Company
     * @throws ApiError
     */
    public static companyCreate(
        requestBody: Company,
    ): CancelablePromise<Company> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/company/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail of a single Company object.
     * @param id
     * @returns Company
     * @throws ApiError
     */
    public static companyRetrieve(
        id: number,
    ): CancelablePromise<Company> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail of a single Company object.
     * @param id
     * @param requestBody
     * @returns Company
     * @throws ApiError
     */
    public static companyUpdate(
        id: number,
        requestBody: Company,
    ): CancelablePromise<Company> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/company/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail of a single Company object.
     * @param id
     * @param requestBody
     * @returns Company
     * @throws ApiError
     */
    public static companyPartialUpdate(
        id: number,
        requestBody?: PatchedCompany,
    ): CancelablePromise<Company> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/company/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail of a single Company object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static companyDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param company
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @returns PaginatedAddressList
     * @throws ApiError
     */
    public static companyAddressList(
        limit: number,
        company?: number,
        offset?: number,
        ordering?: 'title' | '-title',
        search?: string,
    ): CancelablePromise<PaginatedAddressList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/address/',
            query: {
                'company': company,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for list view of Address model.
     * @param requestBody
     * @returns Address
     * @throws ApiError
     */
    public static companyAddressCreate(
        requestBody: Address,
    ): CancelablePromise<Address> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/company/address/',
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
    public static companyAddressBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/address/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a single Address object.
     * @param id
     * @returns Address
     * @throws ApiError
     */
    public static companyAddressRetrieve(
        id: number,
    ): CancelablePromise<Address> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/address/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for a single Address object.
     * @param id
     * @param requestBody
     * @returns Address
     * @throws ApiError
     */
    public static companyAddressUpdate(
        id: number,
        requestBody: Address,
    ): CancelablePromise<Address> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/company/address/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a single Address object.
     * @param id
     * @param requestBody
     * @returns Address
     * @throws ApiError
     */
    public static companyAddressPartialUpdate(
        id: number,
        requestBody?: PatchedAddress,
    ): CancelablePromise<Address> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/company/address/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for a single Address object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static companyAddressDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/address/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param company
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: company__name, name.
     * @returns PaginatedContactList
     * @throws ApiError
     */
    public static companyContactList(
        limit: number,
        company?: number,
        offset?: number,
        ordering?: 'name' | '-name',
        search?: string,
    ): CancelablePromise<PaginatedContactList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/contact/',
            query: {
                'company': company,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * API endpoint for list view of Company model.
     * @param requestBody
     * @returns Contact
     * @throws ApiError
     */
    public static companyContactCreate(
        requestBody: Contact,
    ): CancelablePromise<Contact> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/company/contact/',
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
    public static companyContactBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/contact/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for Company model.
     * @param id
     * @returns Contact
     * @throws ApiError
     */
    public static companyContactRetrieve(
        id: number,
    ): CancelablePromise<Contact> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/contact/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for Company model.
     * @param id
     * @param requestBody
     * @returns Contact
     * @throws ApiError
     */
    public static companyContactUpdate(
        id: number,
        requestBody: Contact,
    ): CancelablePromise<Contact> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/company/contact/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for Company model.
     * @param id
     * @param requestBody
     * @returns Contact
     * @throws ApiError
     */
    public static companyContactPartialUpdate(
        id: number,
        requestBody?: PatchedContact,
    ): CancelablePromise<Contact> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/company/contact/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for Company model.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static companyContactDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/contact/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param mpn Manufacturer Part Number
     * @param sku
     * @param active Supplier Part is Active
     * @param company Company
     * @param hasStock Has Stock
     * @param manufacturer Manufacturer
     * @param manufacturerDetail Include detailed information about the Manufacturer in the response
     * @param manufacturerPart
     * @param manufacturerPartDetail Include detailed information about the linked ManufacturerPart in the response
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @param partActive Internal Part is Active
     * @param partDetail Include detailed information about the linked Part in the response
     * @param pretty Format the output with a more readable (pretty) name
     * @param primary Primary Supplier Part
     * @param search A search term. Searched fields: SKU, description, manufacturer_part__MPN, manufacturer_part__manufacturer__name, part__IPN, part__description, part__keywords, part__name, supplier__name, tags__name, tags__slug.
     * @param supplier
     * @param supplierActive Supplier is Active
     * @param supplierDetail Include detailed information about the Supplier in the response
     * @param tags Tags
     * @param tagsName
     * @param tagsSlug
     * @returns PaginatedSupplierPartList
     * @throws ApiError
     */
    public static companyPartList(
        limit: number,
        mpn?: string,
        sku?: string,
        active?: boolean,
        company?: number,
        hasStock?: boolean,
        manufacturer?: number,
        manufacturerDetail: boolean = false,
        manufacturerPart?: number,
        manufacturerPartDetail: boolean = false,
        offset?: number,
        ordering?: 'part' | '-part' | 'supplier' | '-supplier' | 'manufacturer' | '-manufacturer' | 'active' | '-active' | 'primary' | '-primary' | 'IPN' | '-IPN' | 'MPN' | '-MPN' | 'SKU' | '-SKU' | 'packaging' | '-packaging' | 'pack_quantity' | '-pack_quantity' | 'in_stock' | '-in_stock' | 'updated' | '-updated',
        part?: number,
        partActive?: boolean,
        partDetail: boolean = false,
        pretty: boolean = false,
        primary?: boolean,
        search?: string,
        supplier?: number,
        supplierActive?: boolean,
        supplierDetail: boolean = false,
        tags?: string,
        tagsName?: string,
        tagsSlug?: string,
    ): CancelablePromise<PaginatedSupplierPartList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/part/',
            query: {
                'MPN': mpn,
                'SKU': sku,
                'active': active,
                'company': company,
                'has_stock': hasStock,
                'limit': limit,
                'manufacturer': manufacturer,
                'manufacturer_detail': manufacturerDetail,
                'manufacturer_part': manufacturerPart,
                'manufacturer_part_detail': manufacturerPartDetail,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'part_active': partActive,
                'part_detail': partDetail,
                'pretty': pretty,
                'primary': primary,
                'search': search,
                'supplier': supplier,
                'supplier_active': supplierActive,
                'supplier_detail': supplierDetail,
                'tags': tags,
                'tags__name': tagsName,
                'tags__slug': tagsSlug,
            },
        });
    }
    /**
     * API endpoint for list view of SupplierPart object.
     *
     * - GET: Return list of SupplierPart objects
     * - POST: Create a new SupplierPart object
     * @param requestBody
     * @returns SupplierPart
     * @throws ApiError
     */
    public static companyPartCreate(
        requestBody: SupplierPart,
    ): CancelablePromise<SupplierPart> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/company/part/',
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
    public static companyPartBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/part/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of SupplierPart object.
     *
     * - GET: Retrieve detail view
     * - PATCH: Update object
     * - DELETE: Delete object
     * @param id
     * @param manufacturerDetail Include detailed information about the Manufacturer in the response
     * @param manufacturerPartDetail Include detailed information about the linked ManufacturerPart in the response
     * @param partDetail Include detailed information about the linked Part in the response
     * @param pretty Format the output with a more readable (pretty) name
     * @param supplierDetail Include detailed information about the Supplier in the response
     * @returns SupplierPart
     * @throws ApiError
     */
    public static companyPartRetrieve(
        id: number,
        manufacturerDetail: boolean = false,
        manufacturerPartDetail: boolean = false,
        partDetail: boolean = false,
        pretty: boolean = false,
        supplierDetail: boolean = false,
    ): CancelablePromise<SupplierPart> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/part/{id}/',
            path: {
                'id': id,
            },
            query: {
                'manufacturer_detail': manufacturerDetail,
                'manufacturer_part_detail': manufacturerPartDetail,
                'part_detail': partDetail,
                'pretty': pretty,
                'supplier_detail': supplierDetail,
            },
        });
    }
    /**
     * API endpoint for detail view of SupplierPart object.
     *
     * - GET: Retrieve detail view
     * - PATCH: Update object
     * - DELETE: Delete object
     * @param id
     * @param requestBody
     * @returns SupplierPart
     * @throws ApiError
     */
    public static companyPartUpdate(
        id: number,
        requestBody: SupplierPart,
    ): CancelablePromise<SupplierPart> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/company/part/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of SupplierPart object.
     *
     * - GET: Retrieve detail view
     * - PATCH: Update object
     * - DELETE: Delete object
     * @param id
     * @param requestBody
     * @returns SupplierPart
     * @throws ApiError
     */
    public static companyPartPartialUpdate(
        id: number,
        requestBody?: PatchedSupplierPart,
    ): CancelablePromise<SupplierPart> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/company/part/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of SupplierPart object.
     *
     * - GET: Retrieve detail view
     * - PATCH: Update object
     * - DELETE: Delete object
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static companyPartDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/part/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param mpn
     * @param manufacturer
     * @param manufacturerActive Manufacturer is Active
     * @param manufacturerDetail Include detailed information about the Manufacturer in the response
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @param partActive Part is Active
     * @param partDetail Include detailed information about the linked Part in the response
     * @param pretty Format the output with a more readable (pretty) name
     * @param search A search term. Searched fields: MPN, description, manufacturer__name, part__IPN, part__description, part__name, tags__name, tags__slug.
     * @param tags Tags
     * @param tagsName
     * @param tagsSlug
     * @returns PaginatedManufacturerPartList
     * @throws ApiError
     */
    public static companyPartManufacturerList(
        limit: number,
        mpn?: string,
        manufacturer?: number,
        manufacturerActive?: boolean,
        manufacturerDetail: boolean = false,
        offset?: number,
        ordering?: 'part' | '-part' | 'IPN' | '-IPN' | 'MPN' | '-MPN' | 'manufacturer' | '-manufacturer',
        part?: number,
        partActive?: boolean,
        partDetail: boolean = false,
        pretty: boolean = false,
        search?: string,
        tags?: string,
        tagsName?: string,
        tagsSlug?: string,
    ): CancelablePromise<PaginatedManufacturerPartList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/part/manufacturer/',
            query: {
                'MPN': mpn,
                'limit': limit,
                'manufacturer': manufacturer,
                'manufacturer_active': manufacturerActive,
                'manufacturer_detail': manufacturerDetail,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'part_active': partActive,
                'part_detail': partDetail,
                'pretty': pretty,
                'search': search,
                'tags': tags,
                'tags__name': tagsName,
                'tags__slug': tagsSlug,
            },
        });
    }
    /**
     * API endpoint for list view of ManufacturerPart object.
     *
     * - GET: Return list of ManufacturerPart objects
     * - POST: Create a new ManufacturerPart object
     * @param requestBody
     * @returns ManufacturerPart
     * @throws ApiError
     */
    public static companyPartManufacturerCreate(
        requestBody: ManufacturerPart,
    ): CancelablePromise<ManufacturerPart> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/company/part/manufacturer/',
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
    public static companyPartManufacturerBulkDestroy(
        requestBody: BulkRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/part/manufacturer/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of ManufacturerPart object.
     *
     * - GET: Retrieve detail view
     * - PATCH: Update object
     * - DELETE: Delete object
     * @param id
     * @returns ManufacturerPart
     * @throws ApiError
     */
    public static companyPartManufacturerRetrieve(
        id: number,
    ): CancelablePromise<ManufacturerPart> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/part/manufacturer/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * API endpoint for detail view of ManufacturerPart object.
     *
     * - GET: Retrieve detail view
     * - PATCH: Update object
     * - DELETE: Delete object
     * @param id
     * @param requestBody
     * @returns ManufacturerPart
     * @throws ApiError
     */
    public static companyPartManufacturerUpdate(
        id: number,
        requestBody: ManufacturerPart,
    ): CancelablePromise<ManufacturerPart> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/company/part/manufacturer/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of ManufacturerPart object.
     *
     * - GET: Retrieve detail view
     * - PATCH: Update object
     * - DELETE: Delete object
     * @param id
     * @param requestBody
     * @returns ManufacturerPart
     * @throws ApiError
     */
    public static companyPartManufacturerPartialUpdate(
        id: number,
        requestBody?: PatchedManufacturerPart,
    ): CancelablePromise<ManufacturerPart> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/company/part/manufacturer/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint for detail view of ManufacturerPart object.
     *
     * - GET: Retrieve detail view
     * - PATCH: Update object
     * - DELETE: Delete object
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static companyPartManufacturerDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/part/manufacturer/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Override the GET method to determine export options.
     * @param limit Number of results to return per page.
     * @param basePart Base Part
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param part
     * @param partDetail Include detailed information about the linked Part in the response
     * @param quantity
     * @param search A search term. Searched fields: part__SKU, part__supplier__name.
     * @param supplier Supplier
     * @param supplierDetail Include detailed information about the Supplier in the response
     * @returns PaginatedSupplierPriceBreakList
     * @throws ApiError
     */
    public static companyPriceBreakList(
        limit: number,
        basePart?: number,
        offset?: number,
        ordering?: 'quantity' | '-quantity' | 'supplier' | '-supplier' | 'SKU' | '-SKU' | 'price' | '-price',
        part?: number,
        partDetail: boolean = false,
        quantity?: number,
        search?: string,
        supplier?: number,
        supplierDetail: boolean = false,
    ): CancelablePromise<PaginatedSupplierPriceBreakList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/price-break/',
            query: {
                'base_part': basePart,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'part': part,
                'part_detail': partDetail,
                'quantity': quantity,
                'search': search,
                'supplier': supplier,
                'supplier_detail': supplierDetail,
            },
        });
    }
    /**
     * API endpoint for list view of SupplierPriceBreak object.
     *
     * - GET: Retrieve list of SupplierPriceBreak objects
     * - POST: Create a new SupplierPriceBreak object
     * @param requestBody
     * @returns SupplierPriceBreak
     * @throws ApiError
     */
    public static companyPriceBreakCreate(
        requestBody: SupplierPriceBreak,
    ): CancelablePromise<SupplierPriceBreak> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/company/price-break/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for SupplierPriceBreak object.
     * @param id
     * @returns SupplierPriceBreak
     * @throws ApiError
     */
    public static companyPriceBreakRetrieve(
        id: number,
    ): CancelablePromise<SupplierPriceBreak> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/company/price-break/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for SupplierPriceBreak object.
     * @param id
     * @param requestBody
     * @returns SupplierPriceBreak
     * @throws ApiError
     */
    public static companyPriceBreakUpdate(
        id: number,
        requestBody: SupplierPriceBreak,
    ): CancelablePromise<SupplierPriceBreak> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/company/price-break/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for SupplierPriceBreak object.
     * @param id
     * @param requestBody
     * @returns SupplierPriceBreak
     * @throws ApiError
     */
    public static companyPriceBreakPartialUpdate(
        id: number,
        requestBody?: PatchedSupplierPriceBreak,
    ): CancelablePromise<SupplierPriceBreak> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/company/price-break/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for SupplierPriceBreak object.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static companyPriceBreakDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/company/price-break/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
