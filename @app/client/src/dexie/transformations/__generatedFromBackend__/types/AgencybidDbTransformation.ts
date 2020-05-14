import { Agencybid  as gqlAgencybid } from '*.graphqls'

import { agencybidDbType as objAgencybid } from '../../../dbTypes/__generatedFromBackend__/types/agencybidDbType'


export const AgencybidTransform = (raw: gqlAgencybid): objAgencybid => {
    return {
         id: raw.id, agencyId: raw.agencyId
    }
}

// if editing the transform, make a manual AgencybidClassType instead of the line below
export type AgencybidClassType = objAgencybid