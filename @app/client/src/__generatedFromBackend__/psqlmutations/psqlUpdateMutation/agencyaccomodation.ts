export const mutation = `mutation updateAgencyaccomodation($agencyId: Int! ,$accomodationId: Int! ,$lastModified: Datetime ,$urlExperyAt: Datetime! ,$presentationPlacements: [String] ,$agencyBucketUrls: [String] ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencyaccomodation(input: {id: $id, patch: {agencyId: $agencyId ,accomodationId: $accomodationId ,lastModified: $lastModified ,urlExperyAt: $urlExperyAt ,presentationPlacements: $presentationPlacements ,agencyBucketUrls: $agencyBucketUrls ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     