import { medialocationDbType as objMedialocation } from '../../../dbTypes/__generatedFromBackend__/types/medialocationDbType'

import { Medialocation  as gqlMedialocation } from '*.graphqls'


export const MedialocationTransform = (raw: gqlMedialocation): objMedialocation => {
    return {
         id: raw.id, mediaLocationPlacement: raw.mediaLocationPlacement, atAgency: raw.atAgency, atResource: raw.atResource, uploadLocationOriginal: raw.uploadLocationOriginal, uploadLocationThumbnail: raw.uploadLocationThumbnail, uploadLocationMobile: raw.uploadLocationMobile, uploadLocationTablet: raw.uploadLocationTablet, uploadLocationDesktop: raw.uploadLocationDesktop, uploadLocation2K: raw.uploadLocation2K, signedUrlThumbnail: raw.signedUrlThumbnail, signedUrlMobile: raw.signedUrlMobile, signedUrlTablet: raw.signedUrlTablet, signedUrlDesktop: raw.signedUrlDesktop, signedUrl2K: raw.signedUrl2K, signedUrlsUpdate: raw.signedUrlsUpdate, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual MedialocationClassType instead of the line below
export type MedialocationClassType = objMedialocation