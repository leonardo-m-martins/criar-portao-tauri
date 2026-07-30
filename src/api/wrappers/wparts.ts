import { OpenAPI } from '../core/OpenAPI';
import type { Part } from '../models/Part'; // Adjust relative path as needed

export interface PaginatedPartList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Part[];
}

export interface PartListOptions {
  limit: number; // The only required field
  ipn?: string;
  ipnRegex?: string;
  active?: boolean;
  ancestor?: number;
  assembly?: boolean;
  bomValid?: boolean;
  cascade?: boolean;
  category?: number;
  categoryDetail?: boolean;
  component?: boolean;
  convertFrom?: number;
  createdAfter?: string;
  createdBefore?: string;
  defaultLocation?: number;
  depletedStock?: boolean;
  excludeId?: number[];
  excludeRelated?: number;
  excludeTree?: number;
  hasIpn?: boolean;
  hasPricing?: boolean;
  hasRevisions?: boolean;
  hasStock?: boolean;
  hasUnits?: boolean;
  highStock?: boolean;
  inBomFor?: number;
  isRevision?: boolean;
  isTemplate?: boolean;
  isVariant?: boolean;
  locationDetail?: boolean;
  locked?: boolean;
  lowStock?: boolean;
  nameRegex?: string;
  offset?: number;
  ordering?:
    | 'id' | '-id'
    | 'name' | '-name'
    | 'creation_date' | '-creation_date'
    | 'IPN' | '-IPN'
    | 'in_stock' | '-in_stock'
    | 'total_in_stock' | '-total_in_stock'
    | 'unallocated_stock' | '-unallocated_stock'
    | 'category' | '-category'
    | 'default_location' | '-default_location'
    | 'units' | '-units'
    | 'pricing_min' | '-pricing_min'
    | 'pricing_max' | '-pricing_max'
    | 'pricing_updated' | '-pricing_updated'
    | 'revision' | '-revision'
    | 'revision_count' | '-revision_count';
  parameters?: boolean;
  pathDetail?: boolean;
  priceBreaks?: boolean;
  purchaseable?: boolean;
  related?: number;
  revisionOf?: number;
  salable?: boolean;
  search?: string;
  starred?: boolean;
  stockToBuild?: boolean;
  tags?: boolean;
  testable?: boolean;
  trackable?: boolean;
  unallocatedStock?: boolean;
  variantOf?: number;
  virtual?: boolean;
}

/**
 * Maps JS camelCase options to exact InvenTree DRF backend query key names.
 * Strips undefined/null fields automatically so DRF defaults apply naturally.
 */
export async function getPartList(options: PartListOptions): Promise<PaginatedPartList> {
  const url = new URL('/api/part/', OpenAPI.BASE);

  // Direct mapping dictionary from TS camelCase -> InvenTree DRF Query Key
  const paramMap: Record<string, keyof PartListOptions> = {
    'limit': 'limit',
    'IPN': 'ipn',                 // <--- Crucial: Uppercase 'IPN' for InvenTree DRF
    'IPN_regex': 'ipnRegex',       // <--- Crucial: Exact DRF param key
    'active': 'active',
    'ancestor': 'ancestor',
    'assembly': 'assembly',
    'bom_valid': 'bomValid',
    'cascade': 'cascade',
    'category': 'category',
    'category_detail': 'categoryDetail',
    'component': 'component',
    'convert_from': 'convertFrom',
    'created_after': 'createdAfter',
    'created_before': 'createdBefore',
    'default_location': 'defaultLocation',
    'depleted_stock': 'depletedStock',
    'exclude_id': 'excludeId',
    'exclude_related': 'excludeRelated',
    'exclude_tree': 'excludeTree',
    'has_ipn': 'hasIpn',
    'has_pricing': 'hasPricing',
    'has_revisions': 'hasRevisions',
    'has_stock': 'hasStock',
    'has_units': 'hasUnits',
    'high_stock': 'highStock',
    'in_bom_for': 'inBomFor',
    'is_revision': 'isRevision',
    'is_template': 'isTemplate',
    'is_variant': 'isVariant',
    'location_detail': 'locationDetail',
    'locked': 'locked',
    'low_stock': 'lowStock',
    'name_regex': 'nameRegex',
    'offset': 'offset',
    'ordering': 'ordering',
    'parameters': 'parameters',
    'path_detail': 'pathDetail',
    'price_breaks': 'priceBreaks',
    'purchaseable': 'purchaseable',
    'related': 'related',
    'revision_of': 'revisionOf',
    'salable': 'salable',
    'search': 'search',
    'starred': 'starred',
    'stock_to_build': 'stockToBuild',
    'tags': 'tags',
    'testable': 'testable',
    'trackable': 'trackable',
    'unallocated_stock': 'unallocatedStock',
    'variant_of': 'variantOf',
    'virtual': 'virtual',
  };

  for (const [drfKey, optionKey] of Object.entries(paramMap)) {
    const value = options[optionKey];
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        url.searchParams.append(drfKey, value.join(','));
      } else {
        url.searchParams.append(drfKey, String(value));
      }
    }
  }

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      ...OpenAPI.HEADERS,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`InvenTree API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}