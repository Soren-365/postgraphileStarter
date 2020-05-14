import { Agencyaccomodation  as gqlAgencyaccomodation } from '*.graphqls'

import { agencyaccomodationDbType as objAgencyaccomodation } from '../../../dbTypes/__generatedFromBackend__/types/agencyaccomodationDbType'


export const AgencyaccomodationTransform = (raw: gqlAgencyaccomodation): objAgencyaccomodation => {
    return {
         agencyId: raw.agencyId, accomodationId: raw.accomodationId, lastModified: raw.lastModified, urlExperyAt: raw.urlExperyAt, presentationPlacements: raw.presentationPlacements, agencyBucketUrls: raw.agencyBucketUrls, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencyaccomodationClassType instead of the line below
export type AgencyaccomodationClassType = objAgencyaccomodation