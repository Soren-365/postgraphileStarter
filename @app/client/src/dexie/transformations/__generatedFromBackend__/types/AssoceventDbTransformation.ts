import { assoceventDbType as objAssocevent } from '../../../dbTypes/__generatedFromBackend__/types/assoceventDbType'

import { Assocevent  as gqlAssocevent } from '*.graphqls'


export const AssoceventTransform = (raw: gqlAssocevent): objAssocevent => {
    return {
         assocEventId: raw.assocEventId, eventId: raw.eventId, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AssoceventClassType instead of the line below
export type AssoceventClassType = objAssocevent