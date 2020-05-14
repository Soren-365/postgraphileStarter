export const query = `query getAgencysimilarbytriptypehosts($atAgency: Int!) {
        __typename
        similarbytriptypehosts(condition: {atAgency: $atAgency }) {
          nodes {
            hostIds,tripTypeName,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     