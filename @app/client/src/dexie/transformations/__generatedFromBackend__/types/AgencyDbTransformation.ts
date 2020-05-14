import { Agency  as gqlAgency } from '*.graphqls'

import { agencyDbType as objAgency } from '../../../dbTypes/__generatedFromBackend__/types/agencyDbType'


export const AgencyTransform = (raw: gqlAgency): objAgency => {
    return {
         id: raw.id, name: raw.name, contactId: raw.contactId, activeInsurance: raw.activeInsurance, insuranceUrl: raw.insuranceUrl, insuranceExpery: raw.insuranceExpery, publisherId: raw.publisherId, createdById: raw.createdById, isActive: raw.isActive, isPublic: raw.isPublic, agencyBidId: raw.agencyBidId, agencyFavoriteId: raw.agencyFavoriteId, agencyOfferId: raw.agencyOfferId, agencyDealId: raw.agencyDealId, trustedPartnerIdPool: raw.trustedPartnerIdPool, extendedNetworkIdPool: raw.extendedNetworkIdPool, guideReviewInIdPool: raw.guideReviewInIdPool, agencyReviewInIdPool: raw.agencyReviewInIdPool, touristReviewInIdPool: raw.touristReviewInIdPool, guideReviewOutIdPool: raw.guideReviewOutIdPool, agencyReviewOutIdPool: raw.agencyReviewOutIdPool, touristReviewOutIdPool: raw.touristReviewOutIdPool, agencyMediaLibraryId: raw.agencyMediaLibraryId, isRomanian: raw.isRomanian, bookingCalendarId: raw.bookingCalendarId, specializedAgency: raw.specializedAgency, lastModified: raw.lastModified
    }
}

// if editing the transform, make a manual AgencyClassType instead of the line below
export type AgencyClassType = objAgency