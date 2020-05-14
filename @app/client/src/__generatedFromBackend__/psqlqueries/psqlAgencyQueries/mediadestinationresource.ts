export const query = `query getAgencymediadestinationresources($atAgency: Int!, $id: Int) {
        __typename
        mediadestinationresources(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id atAgency atDestination lastModified lastModifiedBy mainImage mainImageSignedUrl guideImage guideSignedUrl mapImage mapImageSignedUrl thumbnailImage thumbnailImageSignedUrl imageGallery1 imageGallery1SignedUrl imageGallery2 imageGallery2SignedUrl imageGallery3 imageGallery3SignedUrl imageGallery4 imageGallery4SignedUrl imageGallery5 imageGallery5SignedUrl imageGallery6 imageGallery6SignedUrl imageGallery7 imageGallery7SignedUrl imageGallery8 imageGallery8SignedUrl imageGallery9 imageGallery9SignedUrl imageGallery10 imageGallery10SignedUrl signedUrlsUpdate

          }
        }
      }`
      export default `${query}`
     