export const query = `query getAgencysimilarbytriptypeaccomodations($atAgency: Int!) {
        __typename
        similarbytriptypeaccomodations(condition: {atAgency: $atAgency }) {
          nodes {
            accomodationIds,tripTypeName,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     