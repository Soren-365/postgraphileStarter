export const mutation = `mutation createAgencyaccomodation($agencyId: Int! ,$accomodationId: Int! ,$lastModified: Datetime ,$urlExperyAt: Datetime! ,$presentationPlacements: [String] ,$agencyBucketUrls: [String] ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAgencyaccomodation(input: {id: $id,agencyaccomodation: {agencyId: $agencyId ,accomodationId: $accomodationId ,lastModified: $lastModified ,urlExperyAt: $urlExperyAt ,presentationPlacements: $presentationPlacements ,agencyBucketUrls: $agencyBucketUrls ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     