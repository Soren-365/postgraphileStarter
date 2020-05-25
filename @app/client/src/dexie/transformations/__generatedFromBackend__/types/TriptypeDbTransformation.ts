import { triptypeDbType as objTriptype } from '../../../dbTypes/__generatedFromBackend__/types/triptypeDbType'

import { Triptype  as gqlTriptype } from '*.graphqls'


export const TriptypeTransform = (raw: gqlTriptype): objTriptype => {
    return {
         id: raw.id, tripTypeName: raw.tripTypeName, atAgency: raw.atAgency, lastModified: raw.lastModified, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual TriptypeClassType instead of the line below
export type TriptypeClassType = objTriptype