import { agencybidDbType as objAgencybid } from '../../../dbTypes/__generatedFromBackend__/types/agencybidDbType'

import { Agencybid  as gqlAgencybid } from '*.graphqls'


export const AgencybidTransform = (raw: gqlAgencybid): objAgencybid => {
    return {
         id: raw.id, agencyId: raw.agencyId, touristResourceIdPool: raw.touristResourceIdPool
    }
}

// if editing the transform, make a manual AgencybidClassType instead of the line below
export type AgencybidClassType = objAgencybid