export const mutation = `mutation updatePriceinfo($id: Int ,$publisherId: Int! ,$createdById: Int! ,$advertisedPrice: Int! ,$currentHighBId: Int ,$bidId: Int ,$acceptsOffers: Boolean! ,$auctionExpiry: Datetime ,$isAuction: Boolean! ,$isActive: Boolean ,$atResourceType: Resourcetype! ,$belongsToId: Int! ,$lastModified: Datetime , $clientMutationId: String!) {
        __typename
        updatePriceinfo(input: {clientMutationId: $clientMutationId, patch: {,publisherId: $publisherId ,createdById: $createdById ,advertisedPrice: $advertisedPrice ,currentHighBId: $currentHighBId ,bidId: $bidId ,acceptsOffers: $acceptsOffers ,auctionExpiry: $auctionExpiry ,isAuction: $isAuction ,isActive: $isActive ,atResourceType: $atResourceType ,belongsToId: $belongsToId ,lastModified: $lastModified }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     