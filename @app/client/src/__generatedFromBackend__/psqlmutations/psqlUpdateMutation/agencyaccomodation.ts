export const mutation = `mutation updateAgencyaccomodation($agencyId: Int! ,$accomodationId: Int! ,$lastModified: Datetime ,$urlExperyAt: Datetime! ,$presentationPlacements: [String] ,$agencyBucketUrls: [String] ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencyaccomodation(input: {clientMutationId: $clientMutationId, patch: {agencyId: $agencyId ,accomodationId: $accomodationId ,lastModified: $lastModified ,urlExperyAt: $urlExperyAt ,presentationPlacements: $presentationPlacements ,agencyBucketUrls: $agencyBucketUrls ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     