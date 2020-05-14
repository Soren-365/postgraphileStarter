import { Tourist  as gqlTourist } from '*.graphqls'

import { touristDbType as objTourist } from '../../../dbTypes/__generatedFromBackend__/types/touristDbType'


export const TouristTransform = (raw: gqlTourist): objTourist => {
    return {
         id: raw.id, touristFirstName: raw.touristFirstName, touristLastName: raw.touristLastName, contactId: raw.contactId, publisherId: raw.publisherId, createdById: raw.createdById, nativeLanguage: raw.nativeLanguage, alternativeLanguage: raw.alternativeLanguage, touristOfferId: raw.touristOfferId, touristFavoriteId: raw.touristFavoriteId, touristBidId: raw.touristBidId, touristDealId: raw.touristDealId, guideReviewInIdPool: raw.guideReviewInIdPool, agencyReviewInIdPool: raw.agencyReviewInIdPool, guideReviewOutIdPool: raw.guideReviewOutIdPool, agencyReviewOutIdPool: raw.agencyReviewOutIdPool, timeCreated: raw.timeCreated, atTravelGroup: raw.atTravelGroup, isActive: raw.isActive
    }
}

// if editing the transform, make a manual TouristClassType instead of the line below
export type TouristClassType = objTourist