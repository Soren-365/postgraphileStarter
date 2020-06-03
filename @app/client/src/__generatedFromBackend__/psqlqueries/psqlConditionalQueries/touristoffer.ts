export const query = `query getConditionalTouristoffer(, $undefined:  undefined ) {
        __typename
        touristoffers(condition: {undefined: $undefined , })  {
          nodes {
            id touristResourceIdPool

          }
        }
      }`
      export default `${query}`
        