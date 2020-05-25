import { accomodationresourceDbType as objAccomodationresource } from '../../../dbTypes/__generatedFromBackend__/types/accomodationresourceDbType'

import { Accomodationresource  as gqlAccomodationresource } from '*.graphqls'


export const AccomodationresourceTransform = (raw: gqlAccomodationresource): objAccomodationresource => {
    return {
         id: raw.id, accomodationName: raw.accomodationName, contactId: raw.contactId, addressId: raw.addressId, locatedIn: raw.locatedIn, locationCalendarId: raw.locationCalendarId, tripTypeName: raw.tripTypeName, publisherId: raw.publisherId, createdById: raw.createdById, isActive: raw.isActive, ownedByAt: raw.ownedByAt, presentationId: raw.presentationId, atAgency: raw.atAgency, atGuide: raw.atGuide, isPublic: raw.isPublic, lastModified: raw.lastModified, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AccomodationresourceClassType instead of the line below
export type AccomodationresourceClassType = objAccomodationresource