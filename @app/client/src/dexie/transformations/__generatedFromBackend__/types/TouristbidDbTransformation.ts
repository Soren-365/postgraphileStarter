import { touristbidDbType as objTouristbid } from '../../../dbTypes/__generatedFromBackend__/types/touristbidDbType'

import { Touristbid  as gqlTouristbid } from '*.graphqls'


export const TouristbidTransform = (raw: gqlTouristbid): objTouristbid => {
    return {
         id: raw.id, tripOfferResourceIdPool: raw.tripOfferResourceIdPool, eventResourceIdPool: raw.eventResourceIdPool, transportationResourceIdPool: raw.transportationResourceIdPool, accomodationResourceIdPool: raw.accomodationResourceIdPool, hostResourceIdPool: raw.hostResourceIdPool
    }
}

// if editing the transform, make a manual TouristbidClassType instead of the line below
export type TouristbidClassType = objTouristbid