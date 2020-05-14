export const query = `query getAgencyagencyaccomodations($atAgency: Int!) {
        __typename
        agencyaccomodations(condition: {atAgency: $atAgency }) {
          nodes {
            agencyId,accomodationId,lastModified,urlExperyAt,presentationPlacements,agencyBucketUrls,timeCreated

          }
        }
      }`
      export default `${query}`
     