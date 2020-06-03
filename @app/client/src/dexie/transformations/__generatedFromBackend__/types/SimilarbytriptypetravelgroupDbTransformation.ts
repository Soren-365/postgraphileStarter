import { similarbytriptypetravelgroupDbType as objSimilarbytriptypetravelgroup } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypetravelgroupDbType'

import { Similarbytriptypetravelgroup  as gqlSimilarbytriptypetravelgroup } from '*.graphqls'


export const SimilarbytriptypetravelgroupTransform = (raw: gqlSimilarbytriptypetravelgroup): objSimilarbytriptypetravelgroup => {
    return {
         travelGroupIds: raw.travelGroupIds, tripTypeName: raw.tripTypeName, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypetravelgroupClassType instead of the line below
export type SimilarbytriptypetravelgroupClassType = objSimilarbytriptypetravelgroup