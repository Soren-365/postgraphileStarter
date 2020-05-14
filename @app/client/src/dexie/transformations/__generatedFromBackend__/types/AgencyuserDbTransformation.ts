import { Agencyuser  as gqlAgencyuser } from '*.graphqls'

import { agencyuserDbType as objAgencyuser } from '../../../dbTypes/__generatedFromBackend__/types/agencyuserDbType'


export const AgencyuserTransform = (raw: gqlAgencyuser): objAgencyuser => {
    return {
         agencyId: raw.agencyId, userId: raw.userId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencyuserClassType instead of the line below
export type AgencyuserClassType = objAgencyuser