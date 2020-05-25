import { agencyguideDbType as objAgencyguide } from '../../../dbTypes/__generatedFromBackend__/types/agencyguideDbType'

import { Agencyguide  as gqlAgencyguide } from '*.graphqls'


export const AgencyguideTransform = (raw: gqlAgencyguide): objAgencyguide => {
    return {
         agencyId: raw.agencyId, guideId: raw.guideId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencyguideClassType instead of the line below
export type AgencyguideClassType = objAgencyguide