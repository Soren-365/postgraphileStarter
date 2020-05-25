import { reviewDbType as objReview } from '../../../dbTypes/__generatedFromBackend__/types/reviewDbType'

import { Review  as gqlReview } from '*.graphqls'


export const ReviewTransform = (raw: gqlReview): objReview => {
    return {
         id: raw.id, publisherId: raw.publisherId, createdById: raw.createdById, halfStars: raw.halfStars, reviewText: raw.reviewText, resourceType: raw.resourceType, resourceId: raw.resourceId, publisherTarget: raw.publisherTarget, startDateTripEvent: raw.startDateTripEvent, byRomanian: raw.byRomanian, isActive: raw.isActive, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual ReviewClassType instead of the line below
export type ReviewClassType = objReview