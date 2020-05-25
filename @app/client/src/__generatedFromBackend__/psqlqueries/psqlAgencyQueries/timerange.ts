export const query = `query getAgencytimeranges($atAgency: Int!, $id: Int) {
        __typename
        timeranges(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     