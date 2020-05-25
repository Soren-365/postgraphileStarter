import { guidereviewDbType as objGuidereview } from '../../../dbTypes/__generatedFromBackend__/types/guidereviewDbType'

import { Guidereview  as gqlGuidereview } from '*.graphqls'


export const GuidereviewTransform = (raw: gqlGuidereview): objGuidereview => {
    return {
         id: raw.id, publisherId: raw.publisherId, createdById: raw.createdById, isActive: raw.isActive, halfStars: raw.halfStars, reviewText: raw.reviewText, guideIdTarget: raw.guideIdTarget, startDateTripEvent: raw.startDateTripEvent, byRomanian: raw.byRomanian, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual GuidereviewClassType instead of the line below
export type GuidereviewClassType = objGuidereview