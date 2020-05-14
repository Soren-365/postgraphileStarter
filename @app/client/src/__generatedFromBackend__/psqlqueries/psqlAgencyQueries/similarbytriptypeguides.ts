export const query = `query getAgencysimilarbytriptypeguides($atAgency: Int!) {
        __typename
        similarbytriptypeguides(condition: {atAgency: $atAgency }) {
          nodes {
            guideIds,tripTypeName,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     