export const query = `query getAgencyagencyaccomodations($atAgency: Int!, $id: Int) {
        __typename
        agencyaccomodations(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            agencyId accomodationId lastModified urlExperyAt presentationPlacements agencyBucketUrls timeCreated

          }
        }
      }`
      export default `${query}`
     