import { agencyhostDbType as objAgencyhost } from '../../../dbTypes/__generatedFromBackend__/types/agencyhostDbType'

import { Agencyhost  as gqlAgencyhost } from '*.graphqls'


export const AgencyhostTransform = (raw: gqlAgencyhost): objAgencyhost => {
    return {
         agencyId: raw.agencyId, hostId: raw.hostId, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencyhostClassType instead of the line below
export type AgencyhostClassType = objAgencyhost