import { Contact  as gqlContact } from '*.graphqls'

import { contactDbType as objContact } from '../../../dbTypes/__generatedFromBackend__/types/contactDbType'


export const ContactTransform = (raw: gqlContact): objContact => {
    return {
         id: raw.id, firstName: raw.firstName, lastName: raw.lastName, associatedCompany: raw.associatedCompany, street: raw.street, city: raw.city, postCode: raw.postCode, country: raw.country, telephone: raw.telephone, email: raw.email, isCompany: raw.isCompany, createdById: raw.createdById, belongsToType: raw.belongsToType, belongsToId: raw.belongsToId
    }
}

// if editing the transform, make a manual ContactClassType instead of the line below
export type ContactClassType = objContact