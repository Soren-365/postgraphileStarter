import { Touristfavorite  as gqlTouristfavorite } from '*.graphqls'

import { touristfavoriteDbType as objTouristfavorite } from '../../../dbTypes/__generatedFromBackend__/types/touristfavoriteDbType'


export const TouristfavoriteTransform = (raw: gqlTouristfavorite): objTouristfavorite => {
    return {
         id: raw.id, agenciesRomanianIdPool: raw.agenciesRomanianIdPool, agenciesAbroadIdPool: raw.agenciesAbroadIdPool, travelGroupResourceIdPool: raw.travelGroupResourceIdPool, tripsOfferResourceIdPool: raw.tripsOfferResourceIdPool, guideResourceIdPool: raw.guideResourceIdPool, eventResourceIdPool: raw.eventResourceIdPool, transportationResourceIdPool: raw.transportationResourceIdPool, accomodationResourceIdPool: raw.accomodationResourceIdPool
    }
}

// if editing the transform, make a manual TouristfavoriteClassType instead of the line below
export type TouristfavoriteClassType = objTouristfavorite