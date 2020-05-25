import { similarbytriptypeeventDbType as objSimilarbytriptypeevent } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypeeventDbType'

import { Similarbytriptypeevent  as gqlSimilarbytriptypeevent } from '*.graphqls'


export const SimilarbytriptypeeventTransform = (raw: gqlSimilarbytriptypeevent): objSimilarbytriptypeevent => {
    return {
         eventIds: raw.eventIds, --: raw.--, resource: raw.resource, eventres,: raw.eventres,, accomodationres,: raw.accomodationres,, hostres,: raw.hostres,, transportres,: raw.transportres,, app_public.guideres,: raw.app_public.guideres,, app_public.tourist?,: raw.app_public.tourist?,, travelgroup?]
: raw.travelgroup?]
, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypeeventClassType instead of the line below
export type SimilarbytriptypeeventClassType = objSimilarbytriptypeevent