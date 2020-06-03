export const mutation = `mutation createAgencymedialibrary(,$atAgency: Int! ,$uploadLocations: [String] ,$locationSignedUrls: [String] ,$signedUrlsUpdate: [Datetime] ,$lastModifiedBy: Int! ,$timeCreated: Datetime ,$lastModified: Datetime , $id: String!) {
        __typename
        createAgencymedialibrary(input: {id: $id,agencymedialibrary: {,atAgency: $atAgency ,uploadLocations: $uploadLocations ,locationSignedUrls: $locationSignedUrls ,signedUrlsUpdate: $signedUrlsUpdate ,lastModifiedBy: $lastModifiedBy ,timeCreated: $timeCreated ,lastModified: $lastModified }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     