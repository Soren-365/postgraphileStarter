export const query = `query getAgencypresentations($atAgency: Int!) {
        __typename
        presentations(condition: {atAgency: $atAgency }) {
          nodes {
            id,headline,publisherId,createdById,resourceType,resourceTypeId,isActive,lastModified

          }
        }
      }`
      export default `${query}`
     