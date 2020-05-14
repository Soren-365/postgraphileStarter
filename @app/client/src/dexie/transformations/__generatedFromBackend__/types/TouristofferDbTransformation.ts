import { Touristoffer  as gqlTouristoffer } from '*.graphqls'

import { touristofferDbType as objTouristoffer } from '../../../dbTypes/__generatedFromBackend__/types/touristofferDbType'


export const TouristofferTransform = (raw: gqlTouristoffer): objTouristoffer => {
    return {
         id: raw.id
    }
}

// if editing the transform, make a manual TouristofferClassType instead of the line below
export type TouristofferClassType = objTouristoffer