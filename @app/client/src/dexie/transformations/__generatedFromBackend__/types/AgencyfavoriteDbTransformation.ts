import { agencyfavoriteDbType as objAgencyfavorite } from '../../../dbTypes/__generatedFromBackend__/types/agencyfavoriteDbType'

import { Agencyfavorite  as gqlAgencyfavorite } from '*.graphqls'


export const AgencyfavoriteTransform = (raw: gqlAgencyfavorite): objAgencyfavorite => {
    return {
         resourceId: raw.resourceId
    }
}

// if editing the transform, make a manual AgencyfavoriteClassType instead of the line below
export type AgencyfavoriteClassType = objAgencyfavorite