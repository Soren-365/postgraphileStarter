import { usertablDbType as objUsertabl } from '../../../dbTypes/__generatedFromBackend__/types/usertablDbType'

import { Usertabl  as gqlUsertabl } from '*.graphqls'


export const UsertablTransform = (raw: gqlUsertabl): objUsertabl => {
    return {
         id: raw.id, firstName: raw.firstName, lastName: raw.lastName, userEmail: raw.userEmail, atAgency: raw.atAgency, isAdmin: raw.isAdmin, atGuide: raw.atGuide, atTourist: raw.atTourist, timeCreated: raw.timeCreated, isActive: raw.isActive, isRomanian: raw.isRomanian
    }
}

// if editing the transform, make a manual UsertablClassType instead of the line below
export type UsertablClassType = objUsertabl