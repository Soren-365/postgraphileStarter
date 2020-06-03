export const query = `query getConditionalAgencyaccomodation(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencyaccomodations(condition: {undefined: $undefined ,undefined: $undefined ,,,,, })  {
          nodes {
            agencyId accomodationId lastModified urlExperyAt presentationPlacements agencyBucketUrls timeCreated

          }
        }
      }`
      export default `${query}`
        