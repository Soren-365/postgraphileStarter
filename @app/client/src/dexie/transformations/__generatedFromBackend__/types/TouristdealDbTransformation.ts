import { touristdealDbType as objTouristdeal } from '../../../dbTypes/__generatedFromBackend__/types/touristdealDbType'

import { Touristdeal  as gqlTouristdeal } from '*.graphqls'


export const TouristdealTransform = (raw: gqlTouristdeal): objTouristdeal => {
    return {
         id: raw.id, tripsOfferResourceIdPool: raw.tripsOfferResourceIdPool, guideOfferResourceIdPool: raw.guideOfferResourceIdPool, agenciesRomanianIdPool: raw.agenciesRomanianIdPool, agenciesAbroadIdPool: raw.agenciesAbroadIdPool, eventResourceIdPool: raw.eventResourceIdPool, transportationResourceIdPool: raw.transportationResourceIdPool, accomodationResourceIdPool: raw.accomodationResourceIdPool, hostResourceIdPool: raw.hostResourceIdPool
    }
}

// if editing the transform, make a manual TouristdealClassType instead of the line below
export type TouristdealClassType = objTouristdeal