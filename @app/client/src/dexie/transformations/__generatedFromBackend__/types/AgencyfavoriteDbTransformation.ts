import { Agencyfavorite  as gqlAgencyfavorite } from '*.graphqls'

import { agencyfavoriteDbType as objAgencyfavorite } from '../../../dbTypes/__generatedFromBackend__/types/agencyfavoriteDbType'


export const AgencyfavoriteTransform = (raw: gqlAgencyfavorite): objAgencyfavorite => {
    return {
         resourceId: raw.resourceId, resourceType: raw.resourceType, atAgency: raw.atAgency
    }
}

// if editing the transform, make a manual AgencyfavoriteClassType instead of the line below
export type AgencyfavoriteClassType = objAgencyfavorite