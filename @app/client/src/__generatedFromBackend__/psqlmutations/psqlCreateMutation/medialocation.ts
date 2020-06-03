export const mutation = `mutation createMedialocation(,$mediaLocationPlacement: App_public.medialocationplacement ,$atAgency: Int ,$atResource: Int! ,$uploadLocationOriginal: String ,$uploadLocationThumbnail: String ,$uploadLocationMobile: String ,$uploadLocationTablet: String ,$uploadLocationDesktop: String ,$uploadLocation2K: String ,$signedUrlThumbnail: String ,$signedUrlMobile: String ,$signedUrlTablet: String ,$signedUrlDesktop: String ,$signedUrl2K: String ,$signedUrlsUpdate: Datetime! ,$timeCreated: Datetime , $id: String!) {
        __typename
        createMedialocation(input: {id: $id,medialocation: {,mediaLocationPlacement: $mediaLocationPlacement ,atAgency: $atAgency ,atResource: $atResource ,uploadLocationOriginal: $uploadLocationOriginal ,uploadLocationThumbnail: $uploadLocationThumbnail ,uploadLocationMobile: $uploadLocationMobile ,uploadLocationTablet: $uploadLocationTablet ,uploadLocationDesktop: $uploadLocationDesktop ,uploadLocation2K: $uploadLocation2K ,signedUrlThumbnail: $signedUrlThumbnail ,signedUrlMobile: $signedUrlMobile ,signedUrlTablet: $signedUrlTablet ,signedUrlDesktop: $signedUrlDesktop ,signedUrl2K: $signedUrl2K ,signedUrlsUpdate: $signedUrlsUpdate ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     