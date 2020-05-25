import { guideDbType as objGuide } from '../../../dbTypes/__generatedFromBackend__/types/guideDbType'

import { Guide  as gqlGuide } from '*.graphqls'


export const GuideTransform = (raw: gqlGuide): objGuide => {
    return {
         id: raw.id, name: raw.name, contactId: raw.contactId, hasGuideLicence: raw.hasGuideLicence, guideLicenceUrl: raw.guideLicenceUrl, publisherId: raw.publisherId, createdById: raw.createdById, guideFirstName: raw.guideFirstName, guideLastName: raw.guideLastName, hasOwnCompany: raw.hasOwnCompany, atAgency: raw.atAgency, languageLevelId: raw.languageLevelId, areas: raw.areas, tripTypeName: raw.tripTypeName, guideOfferId: raw.guideOfferId, guideBidId: raw.guideBidId, guideFavoriteId: raw.guideFavoriteId, guideDealId: raw.guideDealId, agencyReviewInIdPool: raw.agencyReviewInIdPool, touristReviewInIdPool: raw.touristReviewInIdPool, agencyReviewOutIdPool: raw.agencyReviewOutIdPool, touristReviewOutIdPool: raw.touristReviewOutIdPool, bookingCalendarId: raw.bookingCalendarId, hostIdPool: raw.hostIdPool, eventIdPool: raw.eventIdPool, accomodationIdPool: raw.accomodationIdPool, transportIdPool: raw.transportIdPool, lastModified: raw.lastModified, timeCreated: raw.timeCreated, isActive: raw.isActive, isPublic: raw.isPublic
    }
}

// if editing the transform, make a manual GuideClassType instead of the line below
export type GuideClassType = objGuide