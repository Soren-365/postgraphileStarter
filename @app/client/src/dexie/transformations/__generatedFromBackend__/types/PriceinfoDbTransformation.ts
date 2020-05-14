import { Priceinfo  as gqlPriceinfo } from '*.graphqls'

import { priceinfoDbType as objPriceinfo } from '../../../dbTypes/__generatedFromBackend__/types/priceinfoDbType'


export const PriceinfoTransform = (raw: gqlPriceinfo): objPriceinfo => {
    return {
         id: raw.id, publisherId: raw.publisherId, createdById: raw.createdById, advertisedPrice: raw.advertisedPrice, currentHighBId: raw.currentHighBId, bidId: raw.bidId, acceptsOffers: raw.acceptsOffers, auctionExpiry: raw.auctionExpiry, isAuction: raw.isAuction, isActive: raw.isActive, atResourceType: raw.atResourceType, belongsToId: raw.belongsToId, lastModified: raw.lastModified
    }
}

// if editing the transform, make a manual PriceinfoClassType instead of the line below
export type PriceinfoClassType = objPriceinfo