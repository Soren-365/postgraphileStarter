export const query = `query getAgencyguidefavorites($atAgency: Int!, $id: Int) {
        __typename
        guidefavorites(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     