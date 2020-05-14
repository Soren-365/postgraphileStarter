import { Agencytourist  as gqlAgencytourist } from '*.graphqls'

import { agencytouristDbType as objAgencytourist } from '../../../dbTypes/__generatedFromBackend__/types/agencytouristDbType'


export const AgencytouristTransform = (raw: gqlAgencytourist): objAgencytourist => {
    return {
         agencyId: raw.agencyId, touristId: raw.touristId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencytouristClassType instead of the line below
export type AgencytouristClassType = objAgencytourist