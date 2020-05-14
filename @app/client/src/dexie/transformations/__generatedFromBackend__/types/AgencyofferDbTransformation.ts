import { Agencyoffer  as gqlAgencyoffer } from '*.graphqls'

import { agencyofferDbType as objAgencyoffer } from '../../../dbTypes/__generatedFromBackend__/types/agencyofferDbType'


export const AgencyofferTransform = (raw: gqlAgencyoffer): objAgencyoffer => {
    return {
         id: raw.id, tripsOfferesourceIdPool: raw.tripsOfferesourceIdPool
    }
}

// if editing the transform, make a manual AgencyofferClassType instead of the line below
export type AgencyofferClassType = objAgencyoffer