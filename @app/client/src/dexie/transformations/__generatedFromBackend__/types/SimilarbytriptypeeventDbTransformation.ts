import { similarbytriptypeeventDbType as objSimilarbytriptypeevent } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypeeventDbType'

import { Similarbytriptypeevent  as gqlSimilarbytriptypeevent } from '*.graphqls'


export const SimilarbytriptypeeventTransform = (raw: gqlSimilarbytriptypeevent): objSimilarbytriptypeevent => {
    return {
         eventIds: raw.eventIds, tripTypeName: raw.tripTypeName, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypeeventClassType instead of the line below
export type SimilarbytriptypeeventClassType = objSimilarbytriptypeevent