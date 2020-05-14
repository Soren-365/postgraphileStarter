export const query = `query getAgencytimeranges($atAgency: Int!) {
        __typename
        timeranges(condition: {atAgency: $atAgency }) {
          nodes {
            id,fromTimestamp,toTimestamp,timeCreated

          }
        }
      }`
      export default `${query}`
     