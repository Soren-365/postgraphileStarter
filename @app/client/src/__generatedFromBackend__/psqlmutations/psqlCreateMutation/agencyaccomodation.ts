export const mutation = `mutation createAgencyaccomodation($agencyId: Int! ,$accomodationId: Int! ,$lastModified: Datetime ,$urlExperyAt: Datetime! ,$presentationPlacements: [String] ,$agencyBucketUrls: [String] ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencyaccomodation(input: {clientMutationId: $clientMutationId,agencyaccomodation: {agencyId: $agencyId ,accomodationId: $accomodationId ,lastModified: $lastModified ,urlExperyAt: $urlExperyAt ,presentationPlacements: $presentationPlacements ,agencyBucketUrls: $agencyBucketUrls ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     