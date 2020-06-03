export const query = `query getConditionalAgencydeal(, $undefined:  undefined ) {
        __typename
        agencydeals(condition: {undefined: $undefined ,,,,,,, })  {
          nodes {
            id tripOfferResourceIdPool guideResourceIdPool touristResouceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool

          }
        }
      }`
      export default `${query}`
        