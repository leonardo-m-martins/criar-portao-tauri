/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScheduleTypeEnum } from './ScheduleTypeEnum';
/**
 * Serializer for an individual scheduled task object.
 */
export type ScheduledTask = {
    readonly pk: number;
    /**
     * Optional label to identify this schedule in the admin.
     */
    name?: string | null;
    /**
     * e.g. module.tasks.function
     */
    func: string;
    /**
     * e.g. 1, 2, 'John'
     */
    args?: string | null;
    /**
     * e.g. x=1, y=2, name='John'
     */
    kwargs?: string | null;
    /**
     * How often this task should be enqueued.
     *
     * * `O` - Once
     * * `I` - Minutes
     * * `H` - Hourly
     * * `D` - Daily
     * * `W` - Weekly
     * * `BW` - Biweekly
     * * `M` - Monthly
     * * `BM` - Bimonthly
     * * `Q` - Quarterly
     * * `Y` - Yearly
     * * `C` - Cron
     */
    schedule_type?: ScheduleTypeEnum;
    /**
     * n = n times, -1 = forever
     */
    repeats?: number;
    last_run: string;
    /**
     * When this schedule runs next (stored in UTC).
     */
    next_run?: string | null;
    success: boolean;
    /**
     * Id of the last task spawned from this schedule (read-only).
     */
    readonly task?: string | null;
};

