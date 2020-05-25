import { calendarentryDbType as objCalendarentry } from '../../../dbTypes/__generatedFromBackend__/types/calendarentryDbType'

import { Calendarentry  as gqlCalendarentry } from '*.graphqls'


export const CalendarentryTransform = (raw: gqlCalendarentry): objCalendarentry => {
    return {
         id: raw.id
    }
}

// if editing the transform, make a manual CalendarentryClassType instead of the line below
export type CalendarentryClassType = objCalendarentry