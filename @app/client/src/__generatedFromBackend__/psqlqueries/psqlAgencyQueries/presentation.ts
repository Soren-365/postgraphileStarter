export const query = `query getAgencypresentations($atAgency: Int!, $id: Int) {
        __typename
        presentations(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id headline publisherId createdById resourceType resourceTypeId isActive lastModified

          }
        }
      }`
      export default `${query}`
     