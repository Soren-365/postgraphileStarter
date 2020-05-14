import { Agencymedialibrary  as gqlAgencymedialibrary } from '*.graphqls'

import { agencymedialibraryDbType as objAgencymedialibrary } from '../../../dbTypes/__generatedFromBackend__/types/agencymedialibraryDbType'


export const AgencymedialibraryTransform = (raw: gqlAgencymedialibrary): objAgencymedialibrary => {
    return {
         id: raw.id, atAgency: raw.atAgency, uploadLocations: raw.uploadLocations, locationSignedUrls: raw.locationSignedUrls, signedUrlsUpdate: raw.signedUrlsUpdate, lastModifiedBy: raw.lastModifiedBy, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual AgencymedialibraryClassType instead of the line below
export type AgencymedialibraryClassType = objAgencymedialibrary