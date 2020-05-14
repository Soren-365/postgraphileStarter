export const query = `query getAgencycontacts($atAgency: Int!, $id: Int) {
        __typename
        contacts(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id firstName lastName associatedCompany street city postCode country telephone email isCompany createdById belongsToType belongsToId

          }
        }
      }`
      export default `${query}`
     