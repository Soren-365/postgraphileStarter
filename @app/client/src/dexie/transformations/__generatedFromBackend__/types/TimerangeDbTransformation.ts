import { timerangeDbType as objTimerange } from '../../../dbTypes/__generatedFromBackend__/types/timerangeDbType'

import { Timerange  as gqlTimerange } from '*.graphqls'


export const TimerangeTransform = (raw: gqlTimerange): objTimerange => {
    return {
         id: raw.id
    }
}

// if editing the transform, make a manual TimerangeClassType instead of the line below
export type TimerangeClassType = objTimerange