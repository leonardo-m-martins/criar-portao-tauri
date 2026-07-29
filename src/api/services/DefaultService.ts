/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InfoApi } from '../models/InfoApi';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Serve current server information.
     * @returns InfoApi InvenTree server information
     * @throws ApiError
     */
    public static rootRetrieve(): CancelablePromise<InfoApi> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/',
        });
    }
}
