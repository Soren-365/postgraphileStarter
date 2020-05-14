import { Auctioninfo  as gqlAuctioninfo } from '*.graphqls'

import { auctioninfoDbType as objAuctioninfo } from '../../../dbTypes/__generatedFromBackend__/types/auctioninfoDbType'


export const AuctioninfoTransform = (raw: gqlAuctioninfo): objAuctioninfo => {
    return {
         id: raw.id, publishedById: raw.publishedById, createdById: raw.createdById, advertisedPrice: raw.advertisedPrice, currentHighBid: raw.currentHighBid, bidId: raw.bidId, acceptsOffers: raw.acceptsOffers, auctionExpiry: raw.auctionExpiry, isAuction: raw.isAuction, isActive: raw.isActive, atResourceType: raw.atResourceType, belongsToId: raw.belongsToId
    }
}

// if editing the transform, make a manual AuctioninfoClassType instead of the line below
export type AuctioninfoClassType = objAuctioninfo