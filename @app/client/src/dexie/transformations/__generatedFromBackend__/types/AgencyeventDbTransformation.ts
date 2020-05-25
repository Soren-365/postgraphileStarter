import { agencyeventDbType as objAgencyevent } from '../../../dbTypes/__generatedFromBackend__/types/agencyeventDbType'

import { Agencyevent  as gqlAgencyevent } from '*.graphqls'


export const AgencyeventTransform = (raw: gqlAgencyevent): objAgencyevent => {
    return {
         agencyId: raw.agencyId, eventId: raw.eventId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencyeventClassType instead of the line below
export type AgencyeventClassType = objAgencyevent