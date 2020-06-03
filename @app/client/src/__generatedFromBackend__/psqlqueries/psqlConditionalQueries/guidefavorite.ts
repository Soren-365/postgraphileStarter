export const query = `query getConditionalGuidefavorite(, $undefined:  undefined ) {
        __typename
        guidefavorites(condition: {undefined: $undefined ,,, })  {
          nodes {
            id agenciesRomanianIdPool agenciesAbroadIdPool travelGroupResourceIdPool

          }
        }
      }`
      export default `${query}`
        