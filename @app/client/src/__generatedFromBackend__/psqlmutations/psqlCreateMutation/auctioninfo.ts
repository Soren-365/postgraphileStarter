export const mutation = `mutation createAuctioninfo(,$publishedById: Int! ,$createdById: Int! ,$advertisedPrice: Int! ,$currentHighBid: Int ,$bidId: Int ,$acceptsOffers: Boolean! ,$auctionExpiry: Datetime ,$isAuction: Boolean! ,$isActive: Boolean ,$atResourceType: Resourcetype! ,$belongsToId: Int! , $clientMutationId: String!) {
        __typename
        createAuctioninfo(input: {clientMutationId: $clientMutationId,auctioninfo: {,publishedById: $publishedById ,createdById: $createdById ,advertisedPrice: $advertisedPrice ,currentHighBid: $currentHighBid ,bidId: $bidId ,acceptsOffers: $acceptsOffers ,auctionExpiry: $auctionExpiry ,isAuction: $isAuction ,isActive: $isActive ,atResourceType: $atResourceType ,belongsToId: $belongsToId }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     