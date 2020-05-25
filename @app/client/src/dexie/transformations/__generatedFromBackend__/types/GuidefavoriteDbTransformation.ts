import { guidefavoriteDbType as objGuidefavorite } from '../../../dbTypes/__generatedFromBackend__/types/guidefavoriteDbType'

import { Guidefavorite  as gqlGuidefavorite } from '*.graphqls'


export const GuidefavoriteTransform = (raw: gqlGuidefavorite): objGuidefavorite => {
    return {
         id: raw.id
    }
}

// if editing the transform, make a manual GuidefavoriteClassType instead of the line below
export type GuidefavoriteClassType = objGuidefavorite