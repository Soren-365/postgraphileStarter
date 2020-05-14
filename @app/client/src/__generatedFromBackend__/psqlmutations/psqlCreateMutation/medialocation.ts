export const mutation = `mutation createMedialocation(,$mediaLocationPlacement: Medialocationplacement ,$atAgency: Int ,$atResource: Int! ,$uploadLocationOriginal: String ,$uploadLocationThumbnail: String ,$uploadLocationMobile: String ,$uploadLocationTablet: String ,$uploadLocationDesktop: String ,$uploadLocation2K: String ,$signedUrlThumbnail: String ,$signedUrlMobile: String ,$signedUrlTablet: String ,$signedUrlDesktop: String ,$signedUrl2K: String ,$signedUrlsUpdate: Datetime! ,$timeCreated: < , $clientMutationId: String!) {
        __typename
        createMedialocation(input: {clientMutationId: $clientMutationId,medialocation: {,mediaLocationPlacement: $mediaLocationPlacement ,atAgency: $atAgency ,atResource: $atResource ,uploadLocationOriginal: $uploadLocationOriginal ,uploadLocationThumbnail: $uploadLocationThumbnail ,uploadLocationMobile: $uploadLocationMobile ,uploadLocationTablet: $uploadLocationTablet ,uploadLocationDesktop: $uploadLocationDesktop ,uploadLocation2K: $uploadLocation2K ,signedUrlThumbnail: $signedUrlThumbnail ,signedUrlMobile: $signedUrlMobile ,signedUrlTablet: $signedUrlTablet ,signedUrlDesktop: $signedUrlDesktop ,signedUrl2K: $signedUrl2K ,signedUrlsUpdate: $signedUrlsUpdate ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     