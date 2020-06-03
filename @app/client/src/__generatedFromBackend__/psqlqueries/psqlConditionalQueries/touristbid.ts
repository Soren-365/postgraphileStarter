export const query = `query getConditionalTouristbid(, $undefined:  undefined ) {
        __typename
        touristbids(condition: {undefined: $undefined ,,,,, })  {
          nodes {
            id tripOfferResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool hostResourceIdPool

          }
        }
      }`
      export default `${query}`
        