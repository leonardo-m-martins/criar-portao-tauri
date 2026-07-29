/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionPlugin } from '../models/ActionPlugin';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActionService {
    /**
     * This function checks if all required info was submitted and then performs a plugin_action or returns an error.
     * @param requestBody
     * @returns ActionPlugin
     * @throws ApiError
     */
    public static actionCreate(
        requestBody: ActionPlugin,
    ): CancelablePromise<ActionPlugin> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/action/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `No action specified`,
                404: `No matching action found`,
            },
        });
    }
}
