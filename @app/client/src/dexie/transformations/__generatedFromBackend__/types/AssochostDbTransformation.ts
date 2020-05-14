import { Assochost  as gqlAssochost } from '*.graphqls'

import { assochostDbType as objAssochost } from '../../../dbTypes/__generatedFromBackend__/types/assochostDbType'


export const AssochostTransform = (raw: gqlAssochost): objAssochost => {
    return {
         assocHostId: raw.assocHostId, hostId: raw.hostId, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AssochostClassType instead of the line below
export type AssochostClassType = objAssochost