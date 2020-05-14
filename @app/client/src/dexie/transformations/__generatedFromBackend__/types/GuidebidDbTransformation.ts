import { Guidebid  as gqlGuidebid } from '*.graphqls'

import { guidebidDbType as objGuidebid } from '../../../dbTypes/__generatedFromBackend__/types/guidebidDbType'


export const GuidebidTransform = (raw: gqlGuidebid): objGuidebid => {
    return {
         id: raw.id
    }
}

// if editing the transform, make a manual GuidebidClassType instead of the line below
export type GuidebidClassType = objGuidebid