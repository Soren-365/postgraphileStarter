export const mutation = `mutation createAgencymedialibrary(,$atAgency: Int! ,$uploadLocations: [String] ,$locationSignedUrls: [String] ,$signedUrlsUpdate: [Datetime] ,$lastModifiedBy: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencymedialibrary(input: {clientMutationId: $clientMutationId,agencymedialibrary: {,atAgency: $atAgency ,uploadLocations: $uploadLocations ,locationSignedUrls: $locationSignedUrls ,signedUrlsUpdate: $signedUrlsUpdate ,lastModifiedBy: $lastModifiedBy ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     