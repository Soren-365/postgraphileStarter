export const query = `query getAgencyguidefavorites($atAgency: Int!) {
        __typename
        guidefavorites(condition: {atAgency: $atAgency }) {
          nodes {
            id,agenciesRomanianIdPool,agenciesAbroadIdPool

          }
        }
      }`
      export default `${query}`
     