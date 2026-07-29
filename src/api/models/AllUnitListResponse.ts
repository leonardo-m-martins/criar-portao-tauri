/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Unit } from './Unit';
/**
 * Serializer for the AllUnitList.
 */
export type AllUnitListResponse = {
    default_system: string;
    available_systems: Array<string>;
    available_units: Record<string, Unit>;
};

