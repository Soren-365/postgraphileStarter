export const mutation = `mutation updateMediadestinationresource($id: Int ,$atAgency: Int! ,$atDestination: Int! ,$lastModified: Datetime ,$lastModifiedBy: Int ,$mainImage: Int ,$mainImageSignedUrl: String ,$guideImage: Int ,$guideSignedUrl: String ,$mapImage: Int ,$mapImageSignedUrl: String ,$thumbnailImage: Int ,$thumbnailImageSignedUrl: String ,$imageGallery1: Int ,$imageGallery1SignedUrl: String ,$imageGallery2: Int ,$imageGallery2SignedUrl: String ,$imageGallery3: Int ,$imageGallery3SignedUrl: String ,$imageGallery4: Int ,$imageGallery4SignedUrl: String ,$imageGallery5: Int ,$imageGallery5SignedUrl: String ,$imageGallery6: Int ,$imageGallery6SignedUrl: String ,$imageGallery7: Int ,$imageGallery7SignedUrl: String ,$imageGallery8: Int ,$imageGallery8SignedUrl: String ,$imageGallery9: Int ,$imageGallery9SignedUrl: String ,$imageGallery10: Int ,$imageGallery10SignedUrl: String ,$signedUrlsUpdate: Datetime! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateMediadestinationresource(input: {clientMutationId: $clientMutationId, patch: {,atAgency: $atAgency ,atDestination: $atDestination ,lastModified: $lastModified ,lastModifiedBy: $lastModifiedBy ,mainImage: $mainImage ,mainImageSignedUrl: $mainImageSignedUrl ,guideImage: $guideImage ,guideSignedUrl: $guideSignedUrl ,mapImage: $mapImage ,mapImageSignedUrl: $mapImageSignedUrl ,thumbnailImage: $thumbnailImage ,thumbnailImageSignedUrl: $thumbnailImageSignedUrl ,imageGallery1: $imageGallery1 ,imageGallery1SignedUrl: $imageGallery1SignedUrl ,imageGallery2: $imageGallery2 ,imageGallery2SignedUrl: $imageGallery2SignedUrl ,imageGallery3: $imageGallery3 ,imageGallery3SignedUrl: $imageGallery3SignedUrl ,imageGallery4: $imageGallery4 ,imageGallery4SignedUrl: $imageGallery4SignedUrl ,imageGallery5: $imageGallery5 ,imageGallery5SignedUrl: $imageGallery5SignedUrl ,imageGallery6: $imageGallery6 ,imageGallery6SignedUrl: $imageGallery6SignedUrl ,imageGallery7: $imageGallery7 ,imageGallery7SignedUrl: $imageGallery7SignedUrl ,imageGallery8: $imageGallery8 ,imageGallery8SignedUrl: $imageGallery8SignedUrl ,imageGallery9: $imageGallery9 ,imageGallery9SignedUrl: $imageGallery9SignedUrl ,imageGallery10: $imageGallery10 ,imageGallery10SignedUrl: $imageGallery10SignedUrl ,signedUrlsUpdate: $signedUrlsUpdate ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     