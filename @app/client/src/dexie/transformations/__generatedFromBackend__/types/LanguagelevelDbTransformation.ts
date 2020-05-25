import { languagelevelDbType as objLanguagelevel } from '../../../dbTypes/__generatedFromBackend__/types/languagelevelDbType'

import { Languagelevel  as gqlLanguagelevel } from '*.graphqls'


export const LanguagelevelTransform = (raw: gqlLanguagelevel): objLanguagelevel => {
    return {
         id: raw.id, langauges: raw.langauges, langaugesSkill: raw.langaugesSkill, isActive: raw.isActive, createdById: raw.createdById, publisherId: raw.publisherId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual LanguagelevelClassType instead of the line below
export type LanguagelevelClassType = objLanguagelevel