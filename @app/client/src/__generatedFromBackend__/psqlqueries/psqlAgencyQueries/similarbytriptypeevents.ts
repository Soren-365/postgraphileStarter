export const query = `query getAgencysimilarbytriptypeevents($atAgency: Int!) {
        __typename
        similarbytriptypeevents(condition: {atAgency: $atAgency }) {
          nodes {
            eventIds,tripTypeName,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     