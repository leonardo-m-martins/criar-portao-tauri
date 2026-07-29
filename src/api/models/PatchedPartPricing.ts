/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for Part pricing information.
 */
export type PatchedPartPricing = {
    readonly currency?: string | null;
    readonly updated?: string | null;
    readonly scheduled_for_update?: boolean;
    readonly bom_cost_min?: string | null;
    readonly bom_cost_max?: string | null;
    readonly purchase_cost_min?: string | null;
    readonly purchase_cost_max?: string | null;
    readonly internal_cost_min?: string | null;
    readonly internal_cost_max?: string | null;
    readonly supplier_price_min?: string | null;
    readonly supplier_price_max?: string | null;
    readonly variant_cost_min?: string | null;
    readonly variant_cost_max?: string | null;
    /**
     * Override calculated value for minimum price
     */
    override_min?: string | null;
    /**
     * Select currency from available options
     *
     * * `AUD` - AUD - Australian Dollar
     * * `CAD` - CAD - Canadian Dollar
     * * `CNY` - CNY - Chinese Yuan
     * * `EUR` - EUR - Euro
     * * `GBP` - GBP - British Pound
     * * `JPY` - JPY - Japanese Yen
     * * `NZD` - NZD - New Zealand Dollar
     * * `USD` - USD - US Dollar
     *
     * Other valid currencies may be found in the 'CURRENCY_CODES' global setting.
     */
    override_min_currency?: string;
    /**
     * Override calculated value for maximum price
     */
    override_max?: string | null;
    /**
     * Select currency from available options
     *
     * * `AUD` - AUD - Australian Dollar
     * * `CAD` - CAD - Canadian Dollar
     * * `CNY` - CNY - Chinese Yuan
     * * `EUR` - EUR - Euro
     * * `GBP` - GBP - British Pound
     * * `JPY` - JPY - Japanese Yen
     * * `NZD` - NZD - New Zealand Dollar
     * * `USD` - USD - US Dollar
     *
     * Other valid currencies may be found in the 'CURRENCY_CODES' global setting.
     */
    override_max_currency?: string;
    readonly overall_min?: string | null;
    readonly overall_max?: string | null;
    readonly sale_price_min?: string | null;
    readonly sale_price_max?: string | null;
    readonly sale_history_min?: string | null;
    readonly sale_history_max?: string | null;
    /**
     * Update pricing for this part
     */
    update?: boolean | null;
};

