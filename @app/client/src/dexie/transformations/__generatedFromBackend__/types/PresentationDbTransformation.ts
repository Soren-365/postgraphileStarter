import { presentationDbType as objPresentation } from '../../../dbTypes/__generatedFromBackend__/types/presentationDbType'

import { Presentation  as gqlPresentation } from '*.graphqls'


export const PresentationTransform = (raw: gqlPresentation): objPresentation => {
    return {
         id: raw.id, headline: raw.headline, publisherId: raw.publisherId, createdById: raw.createdById, resourceType: raw.resourceType, resourceTypeId: raw.resourceTypeId, isActive: raw.isActive, lastModified: raw.lastModified, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual PresentationClassType instead of the line below
export type PresentationClassType = objPresentation