import { similarbytriptypehostDbType as objSimilarbytriptypehost } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypehostDbType'

import { Similarbytriptypehost  as gqlSimilarbytriptypehost } from '*.graphqls'


export const SimilarbytriptypehostTransform = (raw: gqlSimilarbytriptypehost): objSimilarbytriptypehost => {
    return {
         hostIds: raw.hostIds, --: raw.--, resource: raw.resource, eventres,: raw.eventres,, accomodationres,: raw.accomodationres,, hostres,: raw.hostres,, transportres,: raw.transportres,, app_public.guideres,: raw.app_public.guideres,, app_public.tourist?,: raw.app_public.tourist?,, travelgroup?]
: raw.travelgroup?]
, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypehostClassType instead of the line below
export type SimilarbytriptypehostClassType = objSimilarbytriptypehost