/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetSimpleLogin } from '../models/GetSimpleLogin';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmailService {
    /**
     * Get the token for the current user or fail.
     * @param requestBody
     * @returns GetSimpleLogin
     * @throws ApiError
     */
    public static emailGenerateCreate(
        requestBody: GetSimpleLogin,
    ): CancelablePromise<GetSimpleLogin> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/email/generate/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
