import { usertableDbType as objUsertable } from '../../../dbTypes/__generatedFromBackend__/types/usertableDbType'

import { Usertable  as gqlUsertable } from '*.graphqls'


export const UsertableTransform = (raw: gqlUsertable): objUsertable => {
    return {
         id: raw.id, firstName: raw.firstName, lastName: raw.lastName, userEmail: raw.userEmail, atAgency: raw.atAgency, isAdmin: raw.isAdmin, atGuide: raw.atGuide, atTourist: raw.atTourist, timeCreated: raw.timeCreated, isActive: raw.isActive, isRomanian: raw.isRomanian
    }
}

// if editing the transform, make a manual UsertableClassType instead of the line below
export type UsertableClassType = objUsertable