import { Assocguide  as gqlAssocguide } from '*.graphqls'

import { assocguideDbType as objAssocguide } from '../../../dbTypes/__generatedFromBackend__/types/assocguideDbType'


export const AssocguideTransform = (raw: gqlAssocguide): objAssocguide => {
    return {
         assocGuideId: raw.assocGuideId, guideId: raw.guideId, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AssocguideClassType instead of the line below
export type AssocguideClassType = objAssocguide