/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiToken } from '../models/ApiToken';
import type { ExtendedUser } from '../models/ExtendedUser';
import type { GetAuthToken } from '../models/GetAuthToken';
import type { Group } from '../models/Group';
import type { MeUser } from '../models/MeUser';
import type { Owner } from '../models/Owner';
import type { PaginatedApiTokenList } from '../models/PaginatedApiTokenList';
import type { PaginatedGroupList } from '../models/PaginatedGroupList';
import type { PaginatedOwnerList } from '../models/PaginatedOwnerList';
import type { PaginatedRuleSetList } from '../models/PaginatedRuleSetList';
import type { PaginatedUserCreateList } from '../models/PaginatedUserCreateList';
import type { PatchedExtendedUser } from '../models/PatchedExtendedUser';
import type { PatchedGroup } from '../models/PatchedGroup';
import type { PatchedMeUser } from '../models/PatchedMeUser';
import type { PatchedRuleSet } from '../models/PatchedRuleSet';
import type { PatchedUserProfile } from '../models/PatchedUserProfile';
import type { PatchedUserSetPassword } from '../models/PatchedUserSetPassword';
import type { Role } from '../models/Role';
import type { RuleSet } from '../models/RuleSet';
import type { UserCreate } from '../models/UserCreate';
import type { UserProfile } from '../models/UserProfile';
import type { UserSetPassword } from '../models/UserSetPassword';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * List endpoint for detail on all users.
     *
     * Permissions:
     * - Staff users (who also have the 'admin' role) can perform write operations
     * - Otherwise authenticated users have read-only access
     * @param limit Number of results to return per page.
     * @param isActive
     * @param isStaff
     * @param isSuperuser
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: first_name, last_name, username.
     * @returns PaginatedUserCreateList
     * @throws ApiError
     */
    public static userList(
        limit: number,
        isActive?: boolean,
        isStaff?: boolean,
        isSuperuser?: boolean,
        offset?: number,
        ordering?: 'email' | '-email' | 'username' | '-username' | 'first_name' | '-first_name' | 'last_name' | '-last_name' | 'is_staff' | '-is_staff' | 'is_superuser' | '-is_superuser' | 'is_active' | '-is_active',
        search?: string,
    ): CancelablePromise<PaginatedUserCreateList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/',
            query: {
                'is_active': isActive,
                'is_staff': isStaff,
                'is_superuser': isSuperuser,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * List endpoint for detail on all users.
     *
     * Permissions:
     * - Staff users (who also have the 'admin' role) can perform write operations
     * - Otherwise authenticated users have read-only access
     * @param requestBody
     * @returns UserCreate
     * @throws ApiError
     */
    public static userCreate(
        requestBody: UserCreate,
    ): CancelablePromise<UserCreate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single user.
     *
     * Permissions:
     * - Staff users (who also have the 'admin' role) can perform write operations
     * - Otherwise authenticated users have read-only access
     * @param id
     * @returns ExtendedUser
     * @throws ApiError
     */
    public static userRetrieve(
        id: number,
    ): CancelablePromise<ExtendedUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for a single user.
     *
     * Permissions:
     * - Staff users (who also have the 'admin' role) can perform write operations
     * - Otherwise authenticated users have read-only access
     * @param id
     * @param requestBody
     * @returns ExtendedUser
     * @throws ApiError
     */
    public static userUpdate(
        id: number,
        requestBody: ExtendedUser,
    ): CancelablePromise<ExtendedUser> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single user.
     *
     * Permissions:
     * - Staff users (who also have the 'admin' role) can perform write operations
     * - Otherwise authenticated users have read-only access
     * @param id
     * @param requestBody
     * @returns ExtendedUser
     * @throws ApiError
     */
    public static userPartialUpdate(
        id: number,
        requestBody?: PatchedExtendedUser,
    ): CancelablePromise<ExtendedUser> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a single user.
     *
     * Permissions:
     * - Staff users (who also have the 'admin' role) can perform write operations
     * - Otherwise authenticated users have read-only access
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static userDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Allows superusers to set the password for a user.
     * @param id
     * @param requestBody
     * @returns UserSetPassword
     * @throws ApiError
     */
    public static userSetPasswordUpdate(
        id: number,
        requestBody: UserSetPassword,
    ): CancelablePromise<UserSetPassword> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/{id}/set-password/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Allows superusers to set the password for a user.
     * @param id
     * @param requestBody
     * @returns UserSetPassword
     * @throws ApiError
     */
    public static userSetPasswordPartialUpdate(
        id: number,
        requestBody?: PatchedUserSetPassword,
    ): CancelablePromise<UserSetPassword> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/{id}/set-password/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List endpoint for all auth groups.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param permissionDetail Include permission details
     * @param roleDetail Include role details
     * @param search A search term. Searched fields: name.
     * @param userDetail Include user details
     * @returns PaginatedGroupList
     * @throws ApiError
     */
    public static userGroupList(
        limit: number,
        offset?: number,
        ordering?: 'name' | '-name',
        permissionDetail: boolean = false,
        roleDetail: boolean = true,
        search?: string,
        userDetail: boolean = false,
    ): CancelablePromise<PaginatedGroupList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/group/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'permission_detail': permissionDetail,
                'role_detail': roleDetail,
                'search': search,
                'user_detail': userDetail,
            },
        });
    }
    /**
     * List endpoint for all auth groups.
     * @param requestBody
     * @returns Group
     * @throws ApiError
     */
    public static userGroupCreate(
        requestBody: Group,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/group/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a particular auth group.
     * @param id
     * @param permissionDetail Include permission details
     * @param roleDetail Include role details
     * @param userDetail Include user details
     * @returns Group
     * @throws ApiError
     */
    public static userGroupRetrieve(
        id: number,
        permissionDetail: boolean = false,
        roleDetail: boolean = true,
        userDetail: boolean = false,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/group/{id}/',
            path: {
                'id': id,
            },
            query: {
                'permission_detail': permissionDetail,
                'role_detail': roleDetail,
                'user_detail': userDetail,
            },
        });
    }
    /**
     * Detail endpoint for a particular auth group.
     * @param id
     * @param requestBody
     * @returns Group
     * @throws ApiError
     */
    public static userGroupUpdate(
        id: number,
        requestBody: Group,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/group/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a particular auth group.
     * @param id
     * @param requestBody
     * @returns Group
     * @throws ApiError
     */
    public static userGroupPartialUpdate(
        id: number,
        requestBody?: PatchedGroup,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/group/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a particular auth group.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static userGroupDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/group/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for current user.
     *
     * Permissions:
     * - User can edit their own details via this endpoint
     * - Only a subset of fields are available here
     * @returns MeUser
     * @throws ApiError
     */
    public static userMeRetrieve(): CancelablePromise<MeUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/me/',
        });
    }
    /**
     * Detail endpoint for current user.
     *
     * Permissions:
     * - User can edit their own details via this endpoint
     * - Only a subset of fields are available here
     * @param requestBody
     * @returns MeUser
     * @throws ApiError
     */
    public static userMeUpdate(
        requestBody: MeUser,
    ): CancelablePromise<MeUser> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/me/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for current user.
     *
     * Permissions:
     * - User can edit their own details via this endpoint
     * - Only a subset of fields are available here
     * @param requestBody
     * @returns MeUser
     * @throws ApiError
     */
    public static userMePartialUpdate(
        requestBody?: PatchedMeUser,
    ): CancelablePromise<MeUser> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/me/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for current user.
     *
     * Permissions:
     * - User can edit their own details via this endpoint
     * - Only a subset of fields are available here
     * @returns void
     * @throws ApiError
     */
    public static userMeDestroy(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/me/',
        });
    }
    /**
     * Detail endpoint for the user profile.
     *
     * Permissions:
     * - Any authenticated user has write access against this endpoint
     * - The endpoint always returns the profile associated with the current user
     * @returns UserProfile
     * @throws ApiError
     */
    public static userMeProfileRetrieve(): CancelablePromise<UserProfile> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/me/profile/',
        });
    }
    /**
     * Detail endpoint for the user profile.
     *
     * Permissions:
     * - Any authenticated user has write access against this endpoint
     * - The endpoint always returns the profile associated with the current user
     * @param requestBody
     * @returns UserProfile
     * @throws ApiError
     */
    public static userMeProfileUpdate(
        requestBody?: UserProfile,
    ): CancelablePromise<UserProfile> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/me/profile/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for the user profile.
     *
     * Permissions:
     * - Any authenticated user has write access against this endpoint
     * - The endpoint always returns the profile associated with the current user
     * @param requestBody
     * @returns UserProfile
     * @throws ApiError
     */
    public static userMeProfilePartialUpdate(
        requestBody?: PatchedUserProfile,
    ): CancelablePromise<UserProfile> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/me/profile/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API endpoint which lists the available role permissions for the current user.
     * @returns Role
     * @throws ApiError
     */
    public static userMeRolesRetrieve(): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/me/roles/',
        });
    }
    /**
     * Return an API token if the user is authenticated.
     *
     * - If the user already has a matching token, delete it and create a new one
     * - Existing tokens are *never* exposed again via the API
     * - Once the token is provided, it can be used for auth until it expires
     * @param name Name of the token
     * @returns GetAuthToken
     * @throws ApiError
     */
    public static userMeTokenRetrieve(
        name?: string,
    ): CancelablePromise<GetAuthToken> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/me/token/',
            query: {
                'name': name,
            },
        });
    }
    /**
     * List API endpoint for Owner model.
     *
     * Cannot create a new Owner object via the API, but can view existing instances.
     * @param limit Number of results to return per page.
     * @param isActive
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @returns PaginatedOwnerList
     * @throws ApiError
     */
    public static userOwnerList(
        limit: number,
        isActive?: boolean,
        offset?: number,
        ordering?: string,
        search?: string,
    ): CancelablePromise<PaginatedOwnerList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/owner/',
            query: {
                'is_active': isActive,
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * Detail API endpoint for Owner model.
     *
     * Cannot edit or delete
     * @param id
     * @returns Owner
     * @throws ApiError
     */
    public static userOwnerRetrieve(
        id: number,
    ): CancelablePromise<Owner> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/owner/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List endpoint for all RuleSet instances.
     * @param limit Number of results to return per page.
     * @param group
     * @param name Permission set
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
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term. Searched fields: name.
     * @returns PaginatedRuleSetList
     * @throws ApiError
     */
    public static userRulesetList(
        limit: number,
        group?: number,
        name?: 'admin' | 'bom' | 'build' | 'part' | 'part_category' | 'purchase_order' | 'return_order' | 'sales_order' | 'stock' | 'stock_location' | 'transfer_order',
        offset?: number,
        ordering?: 'name' | '-name',
        search?: string,
    ): CancelablePromise<PaginatedRuleSetList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/ruleset/',
            query: {
                'group': group,
                'limit': limit,
                'name': name,
                'offset': offset,
                'ordering': ordering,
                'search': search,
            },
        });
    }
    /**
     * Detail endpoint for a particular RuleSet instance.
     * @param id
     * @returns RuleSet
     * @throws ApiError
     */
    public static userRulesetRetrieve(
        id: number,
    ): CancelablePromise<RuleSet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/ruleset/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Detail endpoint for a particular RuleSet instance.
     * @param id
     * @param requestBody
     * @returns RuleSet
     * @throws ApiError
     */
    public static userRulesetUpdate(
        id: number,
        requestBody?: RuleSet,
    ): CancelablePromise<RuleSet> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/ruleset/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a particular RuleSet instance.
     * @param id
     * @param requestBody
     * @returns RuleSet
     * @throws ApiError
     */
    public static userRulesetPartialUpdate(
        id: number,
        requestBody?: PatchedRuleSet,
    ): CancelablePromise<RuleSet> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/ruleset/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Detail endpoint for a particular RuleSet instance.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static userRulesetDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/ruleset/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * List of user tokens for current user.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param revoked
     * @param search A search term. Searched fields: key, name.
     * @param user
     * @returns PaginatedApiTokenList
     * @throws ApiError
     */
    public static userTokensList(
        limit: number,
        offset?: number,
        ordering?: 'created' | '-created' | 'expiry' | '-expiry' | 'last_seen' | '-last_seen' | 'user' | '-user' | 'name' | '-name' | 'revoked' | '-revoked',
        revoked?: boolean,
        search?: string,
        user?: number,
    ): CancelablePromise<PaginatedApiTokenList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/tokens/',
            query: {
                'limit': limit,
                'offset': offset,
                'ordering': ordering,
                'revoked': revoked,
                'search': search,
                'user': user,
            },
        });
    }
    /**
     * List of user tokens for current user.
     * @param requestBody
     * @returns ApiToken
     * @throws ApiError
     */
    public static userTokensCreate(
        requestBody?: ApiToken,
    ): CancelablePromise<ApiToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/tokens/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Details for a user token.
     * @param id
     * @param allUsers Display tokens for all users (superuser only)
     * @returns ApiToken
     * @throws ApiError
     */
    public static userTokensRetrieve(
        id: number,
        allUsers?: boolean,
    ): CancelablePromise<ApiToken> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/tokens/{id}/',
            path: {
                'id': id,
            },
            query: {
                'all_users': allUsers,
            },
        });
    }
    /**
     * Details for a user token.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static userTokensDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/tokens/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
