export const mutation = `mutation updateAgencymedialibrary($id: Int ,$atAgency: Int! ,$uploadLocations: [String] ,$locationSignedUrls: [String] ,$signedUrlsUpdate: [Datetime] ,$lastModifiedBy: Int! ,$timeCreated: Datetime ,$lastModified: Datetime , $id: String!) {
        __typename
        updateAgencymedialibrary(input: {id: $id, patch: {,atAgency: $atAgency ,uploadLocations: $uploadLocations ,locationSignedUrls: $locationSignedUrls ,signedUrlsUpdate: $signedUrlsUpdate ,lastModifiedBy: $lastModifiedBy ,timeCreated: $timeCreated ,lastModified: $lastModified }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     