import { Assoctravelgroup  as gqlAssoctravelgroup } from '*.graphqls'

import { assoctravelgroupDbType as objAssoctravelgroup } from '../../../dbTypes/__generatedFromBackend__/types/assoctravelgroupDbType'


export const AssoctravelgroupTransform = (raw: gqlAssoctravelgroup): objAssoctravelgroup => {
    return {
         assocTravelGroupId: raw.assocTravelGroupId, travelGroupId: raw.travelGroupId, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AssoctravelgroupClassType instead of the line below
export type AssoctravelgroupClassType = objAssoctravelgroup