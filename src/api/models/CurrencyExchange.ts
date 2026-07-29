/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for a Currency Exchange request.
 *
 * It's only purpose is describing the results correctly in the API schema right now.
 */
export type CurrencyExchange = {
    readonly base_currency: string;
    exchange_rates: Record<string, number>;
    readonly updated: string;
};

