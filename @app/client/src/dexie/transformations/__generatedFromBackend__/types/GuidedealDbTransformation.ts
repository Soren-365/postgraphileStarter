import { guidedealDbType as objGuidedeal } from '../../../dbTypes/__generatedFromBackend__/types/guidedealDbType'

import { Guidedeal  as gqlGuidedeal } from '*.graphqls'


export const GuidedealTransform = (raw: gqlGuidedeal): objGuidedeal => {
    return {
         id: raw.id
    }
}

// if editing the transform, make a manual GuidedealClassType instead of the line below
export type GuidedealClassType = objGuidedeal