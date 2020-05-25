import { hostresourceDbType as objHostresource } from '../../../dbTypes/__generatedFromBackend__/types/hostresourceDbType'

import { Hostresource  as gqlHostresource } from '*.graphqls'


export const HostresourceTransform = (raw: gqlHostresource): objHostresource => {
    return {
         id: raw.id, hostResourceName: raw.hostResourceName, contactId: raw.contactId, publisherId: raw.publisherId, createdById: raw.createdById, withAccomodation: raw.withAccomodation, atAccomodation: raw.atAccomodation, atAgency: raw.atAgency, atGuide: raw.atGuide, tripTypeName: raw.tripTypeName, locatedIn: raw.locatedIn, addressInfoId: raw.addressInfoId, ownedByAt: raw.ownedByAt, presentationId: raw.presentationId, bookingCalendarId: raw.bookingCalendarId, isRomanian: raw.isRomanian, isActive: raw.isActive, isPublic: raw.isPublic, lastModified: raw.lastModified, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual HostresourceClassType instead of the line below
export type HostresourceClassType = objHostresource