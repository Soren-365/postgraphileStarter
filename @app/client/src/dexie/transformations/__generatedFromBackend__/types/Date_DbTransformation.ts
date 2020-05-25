import { date_DbType as objDate_ } from '../../../dbTypes/__generatedFromBackend__/types/date_DbType'

import { Date_  as gqlDate_ } from '*.graphqls'


export const Date_Transform = (raw: gqlDate_): objDate_ => {
    return {
         useTimeStamp: raw.useTimeStamp
    }
}

// if editing the transform, make a manual Date_ClassType instead of the line below
export type Date_ClassType = objDate_