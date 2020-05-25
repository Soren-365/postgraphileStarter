import { similarbytriptypetransportDbType as objSimilarbytriptypetransport } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypetransportDbType'

import { Similarbytriptypetransport  as gqlSimilarbytriptypetransport } from '*.graphqls'


export const SimilarbytriptypetransportTransform = (raw: gqlSimilarbytriptypetransport): objSimilarbytriptypetransport => {
    return {
         transportIds: raw.transportIds, --: raw.--, resource: raw.resource, eventres,: raw.eventres,, accomodationres,: raw.accomodationres,, hostres,: raw.hostres,, transportres,: raw.transportres,, app_public.guideres,: raw.app_public.guideres,, app_public.tourist?,: raw.app_public.tourist?,, travelgroup?]
: raw.travelgroup?]
, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypetransportClassType instead of the line below
export type SimilarbytriptypetransportClassType = objSimilarbytriptypetransport