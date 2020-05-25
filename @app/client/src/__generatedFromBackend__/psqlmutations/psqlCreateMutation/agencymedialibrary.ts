export const mutation = `mutation createAgencymedialibrary(,$atAgency: Int! ,$uploadLocations: [String] ,$locationSignedUrls: [String] ,$signedUrlsUpdate: [Datetime] ,$lastModifiedBy: Int! ,$timeCreated: Datetime ,$lastModified: Datetime , $clientMutationId: String!) {
        __typename
        createAgencymedialibrary(input: {clientMutationId: $clientMutationId,agencymedialibrary: {,atAgency: $atAgency ,uploadLocations: $uploadLocations ,locationSignedUrls: $locationSignedUrls ,signedUrlsUpdate: $signedUrlsUpdate ,lastModifiedBy: $lastModifiedBy ,timeCreated: $timeCreated ,lastModified: $lastModified }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     