import { Calendarentry  as gqlCalendarentry } from '*.graphqls'

import { calendarentryDbType as objCalendarentry } from '../../../dbTypes/__generatedFromBackend__/types/calendarentryDbType'


export const CalendarentryTransform = (raw: gqlCalendarentry): objCalendarentry => {
    return {
         id: raw.id, fromTimestamp: raw.fromTimestamp, toTimestamp: raw.toTimestamp, resourceType: raw.resourceType, comment: raw.comment, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual CalendarentryClassType instead of the line below
export type CalendarentryClassType = objCalendarentry