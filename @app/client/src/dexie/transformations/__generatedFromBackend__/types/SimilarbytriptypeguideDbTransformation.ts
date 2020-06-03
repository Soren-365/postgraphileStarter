import { similarbytriptypeguideDbType as objSimilarbytriptypeguide } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypeguideDbType'

import { Similarbytriptypeguide  as gqlSimilarbytriptypeguide } from '*.graphqls'


export const SimilarbytriptypeguideTransform = (raw: gqlSimilarbytriptypeguide): objSimilarbytriptypeguide => {
    return {
         guideIds: raw.guideIds, tripTypeName: raw.tripTypeName, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypeguideClassType instead of the line below
export type SimilarbytriptypeguideClassType = objSimilarbytriptypeguide