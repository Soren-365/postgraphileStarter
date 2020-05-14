import { Guideresource  as gqlGuideresource } from '*.graphqls'

import { guideresourceDbType as objGuideresource } from '../../../dbTypes/__generatedFromBackend__/types/guideresourceDbType'


export const GuideresourceTransform = (raw: gqlGuideresource): objGuideresource => {
    return {
         id: raw.id, guideResourceName: raw.guideResourceName, publisherId: raw.publisherId, createdById: raw.createdById, atGuide: raw.atGuide, timeRangeId: raw.timeRangeId, priceInfoId: raw.priceInfoId, atAgency: raw.atAgency, multipleTimeRange: raw.multipleTimeRange, bookingCalendarId: raw.bookingCalendarId, isRomanian: raw.isRomanian, isActive: raw.isActive, isPublic: raw.isPublic, lastModified: raw.lastModified
    }
}

// if editing the transform, make a manual GuideresourceClassType instead of the line below
export type GuideresourceClassType = objGuideresource