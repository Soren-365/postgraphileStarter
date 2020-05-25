import { usertablDbType as objUsertabl } from '../../../dbTypes/__generatedFromBackend__/types/usertablDbType'

import { Usertabl  as gqlUsertabl } from '*.graphqls'


export const UsertablTransform = (raw: gqlUsertabl): objUsertabl => {
    return {
         id: raw.id
    }
}

// if editing the transform, make a manual UsertablClassType instead of the line below
export type UsertablClassType = objUsertabl