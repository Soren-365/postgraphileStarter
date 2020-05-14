import { Similarbytriptypeaccomodation  as gqlSimilarbytriptypeaccomodation } from '*.graphqls'

import { similarbytriptypeaccomodationDbType as objSimilarbytriptypeaccomodation } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypeaccomodationDbType'


export const SimilarbytriptypeaccomodationTransform = (raw: gqlSimilarbytriptypeaccomodation): objSimilarbytriptypeaccomodation => {
    return {
         accomodationIds: raw.accomodationIds, tripTypeName: raw.tripTypeName, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypeaccomodationClassType instead of the line below
export type SimilarbytriptypeaccomodationClassType = objSimilarbytriptypeaccomodation