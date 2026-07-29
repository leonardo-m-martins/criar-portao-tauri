/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenerateBatchCode } from '../models/GenerateBatchCode';
import type { GenerateSerialNumber } from '../models/GenerateSerialNumber';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GenerateService {
    /**
     * Generate a new batch code.
     * @param requestBody
     * @returns GenerateBatchCode
     * @throws ApiError
     */
    public static generateBatchCodeCreate(
        requestBody?: GenerateBatchCode,
    ): CancelablePromise<GenerateBatchCode> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/generate/batch-code/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Generate a new serial number.
     * @param requestBody
     * @returns GenerateSerialNumber
     * @throws ApiError
     */
    public static generateSerialNumberCreate(
        requestBody?: GenerateSerialNumber,
    ): CancelablePromise<GenerateSerialNumber> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/generate/serial-number/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
