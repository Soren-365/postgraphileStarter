import { assocaccomodationDbType as objAssocaccomodation } from '../../../dbTypes/__generatedFromBackend__/types/assocaccomodationDbType'

import { Assocaccomodation  as gqlAssocaccomodation } from '*.graphqls'


export const AssocaccomodationTransform = (raw: gqlAssocaccomodation): objAssocaccomodation => {
    return {
         assocAccomodationId: raw.assocAccomodationId, accomodationId: raw.accomodationId, atAgency: raw.atAgency, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AssocaccomodationClassType instead of the line below
export type AssocaccomodationClassType = objAssocaccomodation