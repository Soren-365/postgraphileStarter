import { Mediadestinationresource  as gqlMediadestinationresource } from '*.graphqls'

import { mediadestinationresourceDbType as objMediadestinationresource } from '../../../dbTypes/__generatedFromBackend__/types/mediadestinationresourceDbType'


export const MediadestinationresourceTransform = (raw: gqlMediadestinationresource): objMediadestinationresource => {
    return {
         id: raw.id, atAgency: raw.atAgency, atDestination: raw.atDestination, lastModified: raw.lastModified, lastModifiedBy: raw.lastModifiedBy, mainImage: raw.mainImage, mainImageSignedUrl: raw.mainImageSignedUrl, guideImage: raw.guideImage, guideSignedUrl: raw.guideSignedUrl, mapImage: raw.mapImage, mapImageSignedUrl: raw.mapImageSignedUrl, thumbnailImage: raw.thumbnailImage, thumbnailImageSignedUrl: raw.thumbnailImageSignedUrl, imageGallery1: raw.imageGallery1, imageGallery1SignedUrl: raw.imageGallery1SignedUrl, imageGallery2: raw.imageGallery2, imageGallery2SignedUrl: raw.imageGallery2SignedUrl, imageGallery3: raw.imageGallery3, imageGallery3SignedUrl: raw.imageGallery3SignedUrl, imageGallery4: raw.imageGallery4, imageGallery4SignedUrl: raw.imageGallery4SignedUrl, imageGallery5: raw.imageGallery5, imageGallery5SignedUrl: raw.imageGallery5SignedUrl, imageGallery6: raw.imageGallery6, imageGallery6SignedUrl: raw.imageGallery6SignedUrl, imageGallery7: raw.imageGallery7, imageGallery7SignedUrl: raw.imageGallery7SignedUrl, imageGallery8: raw.imageGallery8, imageGallery8SignedUrl: raw.imageGallery8SignedUrl, imageGallery9: raw.imageGallery9, imageGallery9SignedUrl: raw.imageGallery9SignedUrl, imageGallery10: raw.imageGallery10, imageGallery10SignedUrl: raw.imageGallery10SignedUrl, signedUrlsUpdate: raw.signedUrlsUpdate
    }
}

// if editing the transform, make a manual MediadestinationresourceClassType instead of the line below
export type MediadestinationresourceClassType = objMediadestinationresource