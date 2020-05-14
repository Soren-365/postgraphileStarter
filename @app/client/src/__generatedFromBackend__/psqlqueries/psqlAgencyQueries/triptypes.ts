export const query = `query getAgencytriptypes($atAgency: Int!) {
        __typename
        triptypes(condition: {atAgency: $atAgency }) {
          nodes {
            id,tripTypeName,atAgency,lastModified,timeCreated

          }
        }
      }`
      export default `${query}`
     