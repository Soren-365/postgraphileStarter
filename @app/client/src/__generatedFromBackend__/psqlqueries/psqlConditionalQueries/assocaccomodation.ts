export const query = `query getConditionalAssocaccomodation(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        assocaccomodations(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            assocAccomodationId accomodationId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        