import { similarbytriptypetravelgroupDbType as objSimilarbytriptypetravelgroup } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypetravelgroupDbType'

import { Similarbytriptypetravelgroup  as gqlSimilarbytriptypetravelgroup } from '*.graphqls'


export const SimilarbytriptypetravelgroupTransform = (raw: gqlSimilarbytriptypetravelgroup): objSimilarbytriptypetravelgroup => {
    return {
         travelGroupIds: raw.travelGroupIds, --: raw.--, resource: raw.resource, eventres,: raw.eventres,, accomodationres,: raw.accomodationres,, hostres,: raw.hostres,, transportres,: raw.transportres,, app_public.guideres,: raw.app_public.guideres,, app_public.tourist?,: raw.app_public.tourist?,, travelgroup?]
: raw.travelgroup?]
, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypetravelgroupClassType instead of the line below
export type SimilarbytriptypetravelgroupClassType = objSimilarbytriptypetravelgroup