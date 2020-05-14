import { Agencytransport  as gqlAgencytransport } from '*.graphqls'

import { agencytransportDbType as objAgencytransport } from '../../../dbTypes/__generatedFromBackend__/types/agencytransportDbType'


export const AgencytransportTransform = (raw: gqlAgencytransport): objAgencytransport => {
    return {
         agencyId: raw.agencyId, transportId: raw.transportId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencytransportClassType instead of the line below
export type AgencytransportClassType = objAgencytransport