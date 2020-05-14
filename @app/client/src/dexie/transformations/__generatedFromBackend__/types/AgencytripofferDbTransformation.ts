import { Agencytripoffer  as gqlAgencytripoffer } from '*.graphqls'

import { agencytripofferDbType as objAgencytripoffer } from '../../../dbTypes/__generatedFromBackend__/types/agencytripofferDbType'


export const AgencytripofferTransform = (raw: gqlAgencytripoffer): objAgencytripoffer => {
    return {
         agencyId: raw.agencyId, tripOfferId: raw.tripOfferId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencytripofferClassType instead of the line below
export type AgencytripofferClassType = objAgencytripoffer