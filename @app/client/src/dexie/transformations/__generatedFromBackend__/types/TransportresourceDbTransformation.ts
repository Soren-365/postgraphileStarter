import { Transportresource  as gqlTransportresource } from '*.graphqls'

import { transportresourceDbType as objTransportresource } from '../../../dbTypes/__generatedFromBackend__/types/transportresourceDbType'


export const TransportresourceTransform = (raw: gqlTransportresource): objTransportresource => {
    return {
         id: raw.id, transportName: raw.transportName, contactId: raw.contactId, publisherId: raw.publisherId, createdById: raw.createdById, locatedIn: raw.locatedIn, addressInfoId: raw.addressInfoId, atAgency: raw.atAgency, atGuide: raw.atGuide, ownedByAt: raw.ownedByAt, presentationId: raw.presentationId, isBus: raw.isBus, numberOfPlaces: raw.numberOfPlaces, bookingCalendarId: raw.bookingCalendarId, isActive: raw.isActive, isPublic: raw.isPublic, lastModified: raw.lastModified
    }
}

// if editing the transform, make a manual TransportresourceClassType instead of the line below
export type TransportresourceClassType = objTransportresource