import { Assocdestination  as gqlAssocdestination } from '*.graphqls'

import { assocdestinationDbType as objAssocdestination } from '../../../dbTypes/__generatedFromBackend__/types/assocdestinationDbType'


export const AssocdestinationTransform = (raw: gqlAssocdestination): objAssocdestination => {
    return {
         assocDestinationId: raw.assocDestinationId, destinationId: raw.destinationId, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AssocdestinationClassType instead of the line below
export type AssocdestinationClassType = objAssocdestination