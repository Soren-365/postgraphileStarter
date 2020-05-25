import { destinationresourceDbType as objDestinationresource } from '../../../dbTypes/__generatedFromBackend__/types/destinationresourceDbType'

import { Destinationresource  as gqlDestinationresource } from '*.graphqls'


export const DestinationresourceTransform = (raw: gqlDestinationresource): objDestinationresource => {
    return {
         id: raw.id, destinationName: raw.destinationName, publishedById: raw.publishedById, createdById: raw.createdById, area: raw.area, judet: raw.judet, tripTypeName: raw.tripTypeName, isActive: raw.isActive, priceInfoId: raw.priceInfoId, activeAtPeriodsId: raw.activeAtPeriodsId, presentationId: raw.presentationId, atAgency: raw.atAgency, geoCodingId: raw.geoCodingId, isPublic: raw.isPublic, lastModified: raw.lastModified, lastModifiedBy: raw.lastModifiedBy, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual DestinationresourceClassType instead of the line below
export type DestinationresourceClassType = objDestinationresource