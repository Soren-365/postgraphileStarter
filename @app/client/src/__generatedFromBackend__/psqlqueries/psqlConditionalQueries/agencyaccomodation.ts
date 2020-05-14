export const query = `query getConditionalAgencyaccomodation(, $agencyId:  number , $accomodationId:  number , $lastModified:  string , $urlExperyAt:  string , $timeCreated:  string ) {
        __typename
        agencyaccomodations(condition: {agencyId: $agencyId ,accomodationId: $accomodationId ,lastModified: $lastModified ,urlExperyAt: $urlExperyAt ,,,timeCreated: $timeCreated  })  {
          nodes {
            agencyId accomodationId lastModified urlExperyAt presentationPlacements agencyBucketUrls timeCreated
 
          }
        }
      }`
      export default `${query}`
        