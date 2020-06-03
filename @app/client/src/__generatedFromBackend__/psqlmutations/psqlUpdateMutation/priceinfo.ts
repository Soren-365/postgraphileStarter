export const mutation = `mutation updatePriceinfo($id: Int ,$publisherId: Int! ,$createdById: Int! ,$advertisedPrice: Int! ,$currentHighBId: Int ,$bidId: Int ,$acceptsOffers: Boolean! ,$auctionExpiry: Datetime ,$isAuction: Boolean! ,$isActive: Boolean ,$atResourceType: Resourcetype! ,$belongsToId: Int! ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        updatePriceinfo(input: {id: $id, patch: {,publisherId: $publisherId ,createdById: $createdById ,advertisedPrice: $advertisedPrice ,currentHighBId: $currentHighBId ,bidId: $bidId ,acceptsOffers: $acceptsOffers ,auctionExpiry: $auctionExpiry ,isAuction: $isAuction ,isActive: $isActive ,atResourceType: $atResourceType ,belongsToId: $belongsToId ,lastModified: $lastModified ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     