/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SalesOrder } from './SalesOrder';
export type PaginatedSalesOrderList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<SalesOrder>;
};

