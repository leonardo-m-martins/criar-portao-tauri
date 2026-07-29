/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Customize } from './Customize';
import type { Settings } from './Settings';
/**
 * InvenTree server information - some information might be blanked if called without elevated credentials.
 */
export type InfoApi = {
    readonly server: string;
    readonly id?: string | null;
    readonly version: string;
    readonly instance: string;
    readonly apiVersion: number;
    readonly worker_running: boolean;
    readonly worker_count: number;
    readonly worker_pending_tasks: number;
    readonly plugins_enabled: boolean;
    readonly plugins_install_disabled: boolean;
    readonly active_plugins: any;
    readonly email_configured: boolean;
    readonly debug_mode: boolean;
    readonly docker_mode: boolean;
    readonly default_locale: string;
    readonly customize: Customize;
    readonly system_health: boolean;
    readonly database: string;
    readonly platform: string;
    readonly installer: string;
    readonly target?: string | null;
    readonly django_admin: string;
    readonly settings: Settings;
};

