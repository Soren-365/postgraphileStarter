import { Date_  as gqlDate_ } from '*.graphqls'

import { date_DbType as objDate_ } from '../../../dbTypes/__generatedFromBackend__/types/date_DbType'


export const Date_Transform = (raw: gqlDate_): objDate_ => {
    return {
         useTimeStamp: raw.useTimeStamp, timeStamp: raw.timeStamp, year: raw.year, month: raw.month, day: raw.day, allDayEvent: raw.allDayEvent, hour: raw.hour, minute: raw.minute, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual Date_ClassType instead of the line below
export type Date_ClassType = objDate_