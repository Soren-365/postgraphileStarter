export const query = `query getConditionalAgencyoffer(, $undefined:  undefined ) {
        __typename
        agencyoffers(condition: {undefined: $undefined ,, })  {
          nodes {
            id tripsOfferesourceIdPool guideResourceIdPool

          }
        }
      }`
      export default `${query}`
        