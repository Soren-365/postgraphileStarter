import { assoctransportDbType as objAssoctransport } from '../../../dbTypes/__generatedFromBackend__/types/assoctransportDbType'

import { Assoctransport  as gqlAssoctransport } from '*.graphqls'


export const AssoctransportTransform = (raw: gqlAssoctransport): objAssoctransport => {
    return {
         assocTransportId: raw.assocTransportId, transportId: raw.transportId, atAgency: raw.atAgency
    }
}

// if editing the transform, make a manual AssoctransportClassType instead of the line below
export type AssoctransportClassType = objAssoctransport