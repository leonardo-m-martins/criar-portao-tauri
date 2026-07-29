/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the PartTestTemplate class.
 */
export type PatchedPartTestTemplate = {
    readonly pk?: number;
    readonly key?: string;
    part?: number;
    /**
     * Enter a name for the test
     */
    test_name?: string;
    /**
     * Enter description for this test
     */
    description?: string | null;
    /**
     * Is this test enabled?
     */
    enabled?: boolean;
    /**
     * Is this test required to pass?
     */
    required?: boolean;
    /**
     * Does this test require a value when adding a test result?
     */
    requires_value?: boolean;
    /**
     * Does this test require a file attachment when adding a test result?
     */
    requires_attachment?: boolean;
    /**
     * Number of results recorded against this template
     */
    readonly results?: number;
    /**
     * Valid choices for this test (comma-separated)
     */
    choices?: string;
};

