import { similarbytriptypedestinationDbType as objSimilarbytriptypedestination } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypedestinationDbType'

import { Similarbytriptypedestination  as gqlSimilarbytriptypedestination } from '*.graphqls'


export const SimilarbytriptypedestinationTransform = (raw: gqlSimilarbytriptypedestination): objSimilarbytriptypedestination => {
    return {
         destinationIds: raw.destinationIds, --: raw.--, resource: raw.resource, eventres,: raw.eventres,, accomodationres,: raw.accomodationres,, hostres,: raw.hostres,, transportres,: raw.transportres,, app_public.guideres,: raw.app_public.guideres,, app_public.tourist?,: raw.app_public.tourist?,, travelgroup?]
: raw.travelgroup?]
, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypedestinationClassType instead of the line below
export type SimilarbytriptypedestinationClassType = objSimilarbytriptypedestination