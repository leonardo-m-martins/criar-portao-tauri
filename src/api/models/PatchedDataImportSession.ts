/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataImportColumnMap } from './DataImportColumnMap';
import type { DataImportSessionModelTypeEnum } from './DataImportSessionModelTypeEnum';
import type { DataImportSessionStatusEnum } from './DataImportSessionStatusEnum';
import type { User } from './User';
/**
 * Serializer for the DataImportSession model.
 */
export type PatchedDataImportSession = {
    readonly pk?: number;
    readonly timestamp?: string;
    data_file?: string;
    /**
     * If enabled, existing records will be updated with new data
     */
    update_records?: boolean;
    model_type?: DataImportSessionModelTypeEnum;
    readonly available_fields?: any;
    /**
     * Import status
     *
     * * `0` - Initializing
     * * `10` - Mapping Columns
     * * `20` - Importing Data
     * * `30` - Processing Data
     * * `40` - Complete
     */
    readonly status?: DataImportSessionStatusEnum;
    readonly user?: number | null;
    readonly user_detail?: User;
    readonly columns?: any;
    readonly column_mappings?: Array<DataImportColumnMap>;
    field_defaults?: any;
    field_overrides?: any;
    field_filters?: any;
    readonly row_count?: number;
    readonly completed_row_count?: number;
    completed_row_count_history?: number | null;
    row_count_history?: number | null;
};

