export const query = `query getAgencysimilarbytriptypedestinations($atAgency: Int!) {
        __typename
        similarbytriptypedestinations(condition: {atAgency: $atAgency }) {
          nodes {
            destinationIds,tripTypeName,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     