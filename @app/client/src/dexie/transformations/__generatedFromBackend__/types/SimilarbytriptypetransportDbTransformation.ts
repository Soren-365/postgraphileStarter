import { similarbytriptypetransportDbType as objSimilarbytriptypetransport } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypetransportDbType'

import { Similarbytriptypetransport  as gqlSimilarbytriptypetransport } from '*.graphqls'


export const SimilarbytriptypetransportTransform = (raw: gqlSimilarbytriptypetransport): objSimilarbytriptypetransport => {
    return {
         transportIds: raw.transportIds, tripTypeName: raw.tripTypeName, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypetransportClassType instead of the line below
export type SimilarbytriptypetransportClassType = objSimilarbytriptypetransport