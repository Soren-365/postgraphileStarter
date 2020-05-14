import { Similarbytriptypedestination  as gqlSimilarbytriptypedestination } from '*.graphqls'

import { similarbytriptypedestinationDbType as objSimilarbytriptypedestination } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypedestinationDbType'


export const SimilarbytriptypedestinationTransform = (raw: gqlSimilarbytriptypedestination): objSimilarbytriptypedestination => {
    return {
         destinationIds: raw.destinationIds, tripTypeName: raw.tripTypeName, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypedestinationClassType instead of the line below
export type SimilarbytriptypedestinationClassType = objSimilarbytriptypedestination