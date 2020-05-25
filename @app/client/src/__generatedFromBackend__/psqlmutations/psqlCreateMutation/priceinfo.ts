export const mutation = `mutation createPriceinfo(,$publisherId: Int! ,$createdById: Int! ,$advertisedPrice: Int! ,$currentHighBId: Int ,$bidId: Int ,$acceptsOffers: Boolean! ,$auctionExpiry: Datetime ,$isAuction: Boolean! ,$isActive: Boolean ,$atResourceType: Resourcetype! ,$belongsToId: Int! ,$lastModified: Datetime ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createPriceinfo(input: {clientMutationId: $clientMutationId,priceinfo: {,publisherId: $publisherId ,createdById: $createdById ,advertisedPrice: $advertisedPrice ,currentHighBId: $currentHighBId ,bidId: $bidId ,acceptsOffers: $acceptsOffers ,auctionExpiry: $auctionExpiry ,isAuction: $isAuction ,isActive: $isActive ,atResourceType: $atResourceType ,belongsToId: $belongsToId ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     