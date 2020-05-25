import { agencytravelgroupDbType as objAgencytravelgroup } from '../../../dbTypes/__generatedFromBackend__/types/agencytravelgroupDbType'

import { Agencytravelgroup  as gqlAgencytravelgroup } from '*.graphqls'


export const AgencytravelgroupTransform = (raw: gqlAgencytravelgroup): objAgencytravelgroup => {
    return {
         agencyId: raw.agencyId, travelGroupId: raw.travelGroupId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencytravelgroupClassType instead of the line below
export type AgencytravelgroupClassType = objAgencytravelgroup