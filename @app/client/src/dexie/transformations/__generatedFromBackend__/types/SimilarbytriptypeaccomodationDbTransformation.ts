import { similarbytriptypeaccomodationDbType as objSimilarbytriptypeaccomodation } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypeaccomodationDbType'

import { Similarbytriptypeaccomodation  as gqlSimilarbytriptypeaccomodation } from '*.graphqls'


export const SimilarbytriptypeaccomodationTransform = (raw: gqlSimilarbytriptypeaccomodation): objSimilarbytriptypeaccomodation => {
    return {
         accomodationIds: raw.accomodationIds, --: raw.--, triptypes: raw.triptypes, tripTypeName: raw.tripTypeName, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypeaccomodationClassType instead of the line below
export type SimilarbytriptypeaccomodationClassType = objSimilarbytriptypeaccomodation