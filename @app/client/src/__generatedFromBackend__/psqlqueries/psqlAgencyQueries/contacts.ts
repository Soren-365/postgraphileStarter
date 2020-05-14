export const query = `query getAgencycontacts($atAgency: Int!) {
        __typename
        contacts(condition: {atAgency: $atAgency }) {
          nodes {
            id,firstName,lastName,associatedCompany,street,city,postCode,country,telephone,email,isCompany,createdById,belongsToType,belongsToId

          }
        }
      }`
      export default `${query}`
     