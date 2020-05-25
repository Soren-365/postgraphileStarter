import { touristfavoriteDbType as objTouristfavorite } from '../../../dbTypes/__generatedFromBackend__/types/touristfavoriteDbType'

import { Touristfavorite  as gqlTouristfavorite } from '*.graphqls'


export const TouristfavoriteTransform = (raw: gqlTouristfavorite): objTouristfavorite => {
    return {
         id: raw.id
    }
}

// if editing the transform, make a manual TouristfavoriteClassType instead of the line below
export type TouristfavoriteClassType = objTouristfavorite