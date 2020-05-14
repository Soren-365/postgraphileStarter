import { Agencyreview  as gqlAgencyreview } from '*.graphqls'

import { agencyreviewDbType as objAgencyreview } from '../../../dbTypes/__generatedFromBackend__/types/agencyreviewDbType'


export const AgencyreviewTransform = (raw: gqlAgencyreview): objAgencyreview => {
    return {
         id: raw.id, publisherId: raw.publisherId, createdById: raw.createdById, isActive: raw.isActive, halfStars: raw.halfStars, reviewText: raw.reviewText, agencyIdTarget: raw.agencyIdTarget, startDateTripEvent: raw.startDateTripEvent, byRomanian: raw.byRomanian
    }
}

// if editing the transform, make a manual AgencyreviewClassType instead of the line below
export type AgencyreviewClassType = objAgencyreview