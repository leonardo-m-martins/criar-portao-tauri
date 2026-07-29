/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * * `updated` - Oldest stock first (FIFO)
 * * `-updated` - Newest stock first (LIFO)
 * * `quantity` - Smallest quantity first
 * * `-quantity` - Largest quantity first
 * * `expiry_date` - Soonest expiry date first
 */
export enum StockSortByEnum {
    UPDATED = 'updated',
    _UPDATED = '-updated',
    QUANTITY = 'quantity',
    _QUANTITY = '-quantity',
    EXPIRY_DATE = 'expiry_date',
}
