import { tripofferresourceDbType as objTripofferresource } from '../../../dbTypes/__generatedFromBackend__/types/tripofferresourceDbType'

import { Tripofferresource  as gqlTripofferresource } from '*.graphqls'


export const TripofferresourceTransform = (raw: gqlTripofferresource): objTripofferresource => {
    return {
         id: raw.id, tripOfferName: raw.tripOfferName, publisherId: raw.publisherId, createdById: raw.createdById, availableAtCalendarId: raw.availableAtCalendarId, guideResponsibleId: raw.guideResponsibleId, guideSecondaryId: raw.guideSecondaryId, atAgency: raw.atAgency, priceInfoId: raw.priceInfoId, destinationId: raw.destinationId, isSigned: raw.isSigned, atGuide: raw.atGuide, isActive: raw.isActive, isPublic: raw.isPublic, lastModified: raw.lastModified, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual TripofferresourceClassType instead of the line below
export type TripofferresourceClassType = objTripofferresource