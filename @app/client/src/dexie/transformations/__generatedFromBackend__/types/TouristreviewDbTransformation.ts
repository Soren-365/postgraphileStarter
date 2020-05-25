import { touristreviewDbType as objTouristreview } from '../../../dbTypes/__generatedFromBackend__/types/touristreviewDbType'

import { Touristreview  as gqlTouristreview } from '*.graphqls'


export const TouristreviewTransform = (raw: gqlTouristreview): objTouristreview => {
    return {
         id: raw.id, publisherId: raw.publisherId, createdById: raw.createdById, isActive: raw.isActive, halfStars: raw.halfStars, reviewText: raw.reviewText, touristIdTarget: raw.touristIdTarget, startDateTripEvent: raw.startDateTripEvent, byRomanian: raw.byRomanian, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual TouristreviewClassType instead of the line below
export type TouristreviewClassType = objTouristreview