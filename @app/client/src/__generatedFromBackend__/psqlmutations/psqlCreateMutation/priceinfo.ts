export const mutation = `mutation createPriceinfo(,$publisherId: Int! ,$createdById: Int! ,$advertisedPrice: Int! ,$currentHighBId: Int ,$bidId: Int ,$acceptsOffers: Boolean! ,$auctionExpiry: Datetime ,$isAuction: Boolean! ,$isActive: Boolean ,$atResourceType: Resourcetype! ,$belongsToId: Int! ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        createPriceinfo(input: {id: $id,priceinfo: {,publisherId: $publisherId ,createdById: $createdById ,advertisedPrice: $advertisedPrice ,currentHighBId: $currentHighBId ,bidId: $bidId ,acceptsOffers: $acceptsOffers ,auctionExpiry: $auctionExpiry ,isAuction: $isAuction ,isActive: $isActive ,atResourceType: $atResourceType ,belongsToId: $belongsToId ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     