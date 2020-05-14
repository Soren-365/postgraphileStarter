export const mutation = `mutation updateAgencymedialibrary($id: Int ,$atAgency: Int! ,$uploadLocations: [String] ,$locationSignedUrls: [String] ,$signedUrlsUpdate: [Datetime] ,$lastModifiedBy: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencymedialibrary(input: {clientMutationId: $clientMutationId, patch: {,atAgency: $atAgency ,uploadLocations: $uploadLocations ,locationSignedUrls: $locationSignedUrls ,signedUrlsUpdate: $signedUrlsUpdate ,lastModifiedBy: $lastModifiedBy ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     