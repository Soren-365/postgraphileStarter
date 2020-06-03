import { bidDbType as objBid } from '../../../dbTypes/__generatedFromBackend__/types/bidDbType'

import { Bid  as gqlBid } from '*.graphqls'


export const BidTransform = (raw: gqlBid): objBid => {
    return {
         id: raw.id, publisherId: raw.publisherId, createdById: raw.createdById, bidAmount: raw.bidAmount, isActive: raw.isActive, timeCreated: raw.timeCreated
    }
}

// if editing the transform, make a manual BidClassType instead of the line below
export type BidClassType = objBid