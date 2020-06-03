export const query = `query getConditionalGuidebid(, $undefined:  undefined ) {
        __typename
        guidebids(condition: {undefined: $undefined , })  {
          nodes {
            id tripOfferIdPool

          }
        }
      }`
      export default `${query}`
        