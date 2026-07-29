/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyExchange } from '../models/CurrencyExchange';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CurrencyService {
    /**
     * Return information on available currency conversions.
     * @returns CurrencyExchange
     * @throws ApiError
     */
    public static currencyExchangeRetrieve(): CancelablePromise<CurrencyExchange> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/currency/exchange/',
        });
    }
    /**
     * Performing a POST request will update currency exchange rates.
     * @returns any No response body
     * @throws ApiError
     */
    public static currencyRefreshCreate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/currency/refresh/',
        });
    }
}
