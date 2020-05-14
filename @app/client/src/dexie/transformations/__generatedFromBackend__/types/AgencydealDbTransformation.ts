import { Agencydeal  as gqlAgencydeal } from '*.graphqls'

import { agencydealDbType as objAgencydeal } from '../../../dbTypes/__generatedFromBackend__/types/agencydealDbType'


export const AgencydealTransform = (raw: gqlAgencydeal): objAgencydeal => {
    return {
         id: raw.id, tripOfferResourceIdPool: raw.tripOfferResourceIdPool, guideResourceIdPool: raw.guideResourceIdPool, touristResouceIdPool: raw.touristResouceIdPool, eventResourceIdPool: raw.eventResourceIdPool, transportationResourceIdPool: raw.transportationResourceIdPool, accomodationResourceIdPool: raw.accomodationResourceIdPool
    }
}

// if editing the transform, make a manual AgencydealClassType instead of the line below
export type AgencydealClassType = objAgencydeal