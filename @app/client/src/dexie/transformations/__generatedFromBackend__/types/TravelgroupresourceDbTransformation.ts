import { travelgroupresourceDbType as objTravelgroupresource } from '../../../dbTypes/__generatedFromBackend__/types/travelgroupresourceDbType'

import { Travelgroupresource  as gqlTravelgroupresource } from '*.graphqls'


export const TravelgroupresourceTransform = (raw: gqlTravelgroupresource): objTravelgroupresource => {
    return {
         id: raw.id, travelGroupName: raw.travelGroupName, contactId: raw.contactId, publisherId: raw.publisherId, createdById: raw.createdById, numberOfAdults: raw.numberOfAdults, numberOfChildren: raw.numberOfChildren, customInfo: raw.customInfo, bookingCalendarId: raw.bookingCalendarId, atAgency: raw.atAgency, atGuide: raw.atGuide, language: raw.language, atTripOfferResource: raw.atTripOfferResource, atTouristResource: raw.atTouristResource, isRomanian: raw.isRomanian, isActive: raw.isActive, lastModified: raw.lastModified, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual TravelgroupresourceClassType instead of the line below
export type TravelgroupresourceClassType = objTravelgroupresource