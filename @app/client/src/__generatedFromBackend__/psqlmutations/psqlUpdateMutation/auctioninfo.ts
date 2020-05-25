export const mutation = `mutation updateAuctioninfo($id: Int ,$publishedById: Int! ,$createdById: Int! ,$advertisedPrice: Int! ,$currentHighBid: Int ,$bidId: Int ,$acceptsOffers: Boolean! ,$auctionExpiry: Datetime ,$isAuction: Boolean! ,$isActive: Boolean ,$atResourceType: Resourcetype! ,$belongsToId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAuctioninfo(input: {clientMutationId: $clientMutationId, patch: {,publishedById: $publishedById ,createdById: $createdById ,advertisedPrice: $advertisedPrice ,currentHighBid: $currentHighBid ,bidId: $bidId ,acceptsOffers: $acceptsOffers ,auctionExpiry: $auctionExpiry ,isAuction: $isAuction ,isActive: $isActive ,atResourceType: $atResourceType ,belongsToId: $belongsToId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     