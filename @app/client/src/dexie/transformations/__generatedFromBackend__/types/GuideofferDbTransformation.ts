import { guideofferDbType as objGuideoffer } from '../../../dbTypes/__generatedFromBackend__/types/guideofferDbType'

import { Guideoffer  as gqlGuideoffer } from '*.graphqls'


export const GuideofferTransform = (raw: gqlGuideoffer): objGuideoffer => {
    return {
         id: raw.id, guideResourceIdPool: raw.guideResourceIdPool, transportResourceIdPool: raw.transportResourceIdPool, hostResourceIdPool: raw.hostResourceIdPool, accomodationResourceIdPool: raw.accomodationResourceIdPool
    }
}

// if editing the transform, make a manual GuideofferClassType instead of the line below
export type GuideofferClassType = objGuideoffer