import { similarbytriptypehostDbType as objSimilarbytriptypehost } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypehostDbType'

import { Similarbytriptypehost  as gqlSimilarbytriptypehost } from '*.graphqls'


export const SimilarbytriptypehostTransform = (raw: gqlSimilarbytriptypehost): objSimilarbytriptypehost => {
    return {
         hostIds: raw.hostIds, tripTypeName: raw.tripTypeName, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypehostClassType instead of the line below
export type SimilarbytriptypehostClassType = objSimilarbytriptypehost