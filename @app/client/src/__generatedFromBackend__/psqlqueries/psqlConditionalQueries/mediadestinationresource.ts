export const query = `query getConditionalMediadestinationresource(, $atAgency:  number , $atDestination:  number , $lastModified:  string , $lastModifiedBy:  number , $mainImage:  number , $guideImage:  number , $mapImage:  number , $thumbnailImage:  number , $imageGallery1:  number , $imageGallery2:  number , $imageGallery3:  number , $imageGallery4:  number , $imageGallery5:  number , $imageGallery6:  number , $imageGallery7:  number , $imageGallery8:  number , $imageGallery9:  number , $imageGallery10:  number , $signedUrlsUpdate:  string , $timeCreated:  string ) {
        __typename
        mediadestinationresources(condition: {,atAgency: $atAgency ,atDestination: $atDestination ,lastModified: $lastModified ,lastModifiedBy: $lastModifiedBy ,mainImage: $mainImage ,,guideImage: $guideImage ,,mapImage: $mapImage ,,thumbnailImage: $thumbnailImage ,,imageGallery1: $imageGallery1 ,,imageGallery2: $imageGallery2 ,,imageGallery3: $imageGallery3 ,,imageGallery4: $imageGallery4 ,,imageGallery5: $imageGallery5 ,,imageGallery6: $imageGallery6 ,,imageGallery7: $imageGallery7 ,,imageGallery8: $imageGallery8 ,,imageGallery9: $imageGallery9 ,,imageGallery10: $imageGallery10 ,,signedUrlsUpdate: $signedUrlsUpdate ,timeCreated: $timeCreated  })  {
          nodes {
            id atAgency atDestination lastModified lastModifiedBy mainImage mainImageSignedUrl guideImage guideSignedUrl mapImage mapImageSignedUrl thumbnailImage thumbnailImageSignedUrl imageGallery1 imageGallery1SignedUrl imageGallery2 imageGallery2SignedUrl imageGallery3 imageGallery3SignedUrl imageGallery4 imageGallery4SignedUrl imageGallery5 imageGallery5SignedUrl imageGallery6 imageGallery6SignedUrl imageGallery7 imageGallery7SignedUrl imageGallery8 imageGallery8SignedUrl imageGallery9 imageGallery9SignedUrl imageGallery10 imageGallery10SignedUrl signedUrlsUpdate timeCreated

          }
        }
      }`
      export default `${query}`
        