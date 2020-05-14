export const query = `query getAgencysimilarbytriptypetransports($atAgency: Int!) {
        __typename
        similarbytriptypetransports(condition: {atAgency: $atAgency }) {
          nodes {
            transportIds,tripTypeName,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     