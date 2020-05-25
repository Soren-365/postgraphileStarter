import { similarbytriptypeguideDbType as objSimilarbytriptypeguide } from '../../../dbTypes/__generatedFromBackend__/types/similarbytriptypeguideDbType'

import { Similarbytriptypeguide  as gqlSimilarbytriptypeguide } from '*.graphqls'


export const SimilarbytriptypeguideTransform = (raw: gqlSimilarbytriptypeguide): objSimilarbytriptypeguide => {
    return {
         guideIds: raw.guideIds, --: raw.--, resource: raw.resource, eventres,: raw.eventres,, accomodationres,: raw.accomodationres,, hostres,: raw.hostres,, transportres,: raw.transportres,, app_public.guideres,: raw.app_public.guideres,, app_public.tourist?,: raw.app_public.tourist?,, travelgroup?]
: raw.travelgroup?]
, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual SimilarbytriptypeguideClassType instead of the line below
export type SimilarbytriptypeguideClassType = objSimilarbytriptypeguide