import { Guidedeal  as gqlGuidedeal } from '*.graphqls'

import { guidedealDbType as objGuidedeal } from '../../../dbTypes/__generatedFromBackend__/types/guidedealDbType'


export const GuidedealTransform = (raw: gqlGuidedeal): objGuidedeal => {
    return {
         id: raw.id, tripsOfferResourceIdPool: raw.tripsOfferResourceIdPool, agenciesRomanianIdPool: raw.agenciesRomanianIdPool, agenciesAbroadIdPool: raw.agenciesAbroadIdPool
    }
}

// if editing the transform, make a manual GuidedealClassType instead of the line below
export type GuidedealClassType = objGuidedeal