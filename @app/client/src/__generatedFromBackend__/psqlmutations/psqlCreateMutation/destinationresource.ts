export const mutation = `mutation createDestinationresource(,$destinationName: String ,$publishedById: Int! ,$createdById: Int! ,$area: Area ,$judet: Judet ,$tripTypeName: String ,$isActive: Boolean ,$priceInfoId: Int ,$activeAtPeriodsId: Int ,$presentationId: Int ,$atAgency: Int! ,$geoCodingId: Int ,$isPublic: Boolean! ,$lastModified: Datetime ,$lastModifiedBy: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createDestinationresource(input: {id: $id,destinationresource: {,destinationName: $destinationName ,publishedById: $publishedById ,createdById: $createdById ,area: $area ,judet: $judet ,tripTypeName: $tripTypeName ,isActive: $isActive ,priceInfoId: $priceInfoId ,activeAtPeriodsId: $activeAtPeriodsId ,presentationId: $presentationId ,atAgency: $atAgency ,geoCodingId: $geoCodingId ,isPublic: $isPublic ,lastModified: $lastModified ,lastModifiedBy: $lastModifiedBy ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     