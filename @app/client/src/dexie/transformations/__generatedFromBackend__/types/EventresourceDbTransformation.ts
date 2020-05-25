import { eventresourceDbType as objEventresource } from '../../../dbTypes/__generatedFromBackend__/types/eventresourceDbType'

import { Eventresource  as gqlEventresource } from '*.graphqls'


export const EventresourceTransform = (raw: gqlEventresource): objEventresource => {
    return {
         id: raw.id, eventName: raw.eventName, agencyName: raw.agencyName, contactId: raw.contactId, publisherId: raw.publisherId, createdById: raw.createdById, locatedIn: raw.locatedIn, locationAddressId: raw.locationAddressId, tripTypeName: raw.tripTypeName, activeAtPeriodsId: raw.activeAtPeriodsId, ownedByAt: raw.ownedByAt, atAgency: raw.atAgency, atGuide: raw.atGuide, presentationId: raw.presentationId, isActive: raw.isActive, isPublic: raw.isPublic, lastModified: raw.lastModified, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual EventresourceClassType instead of the line below
export type EventresourceClassType = objEventresource