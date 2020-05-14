import { Touristresource  as gqlTouristresource } from '*.graphqls'

import { touristresourceDbType as objTouristresource } from '../../../dbTypes/__generatedFromBackend__/types/touristresourceDbType'


export const TouristresourceTransform = (raw: gqlTouristresource): objTouristresource => {
    return {
         id: raw.id, name: raw.name, contactId: raw.contactId, publisherId: raw.publisherId, createdById: raw.createdById, atTravelGroup: raw.atTravelGroup, atAgency: raw.atAgency, atGuide: raw.atGuide, isSigned: raw.isSigned, priceInfoId: raw.priceInfoId, travellingCalendarId: raw.travellingCalendarId, isRomanian: raw.isRomanian, isActive: raw.isActive, isPublic: raw.isPublic, lastModified: raw.lastModified
    }
}

// if editing the transform, make a manual TouristresourceClassType instead of the line below
export type TouristresourceClassType = objTouristresource