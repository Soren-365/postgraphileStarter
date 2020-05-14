export interface auctioninfoDbType {
id?: number;
publishedById: number;
createdById: number;
advertisedPrice: number;
currentHighBid?: number;
bidId?: number;
acceptsOffers: boolean;
auctionExpiry?: string;
isAuction: boolean;
isActive?: boolean;
atResourceType: string;
belongsToId: number;
 nodeId?: string;
}
