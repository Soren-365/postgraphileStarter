export const query = `query getAgencycommandlogentries($atAgency: Int!, $id: Int) {
        __typename
        commandlogentries(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     