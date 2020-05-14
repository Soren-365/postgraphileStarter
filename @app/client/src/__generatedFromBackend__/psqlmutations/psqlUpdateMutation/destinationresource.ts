export const mutation = `mutation updateDestinationresource($id: Int ,$destinationName: String ,$publishedById: Int! ,$createdById: Int! ,$area: Area ,$judet: Judet ,$tripTypeName: String ,$isActive: Boolean ,$priceInfoId: Int ,$activeAtPeriodsId: Int ,$presentationId: Int ,$atAgency: Int! ,$geoCodingId: Int ,$isPublic: Boolean! ,$lastModified: Datetime ,$lastModifiedBy: Int , $clientMutationId: String!) {
        __typename
        updateDestinationresource(input: {clientMutationId: $clientMutationId, patch: {,destinationName: $destinationName ,publishedById: $publishedById ,createdById: $createdById ,area: $area ,judet: $judet ,tripTypeName: $tripTypeName ,isActive: $isActive ,priceInfoId: $priceInfoId ,activeAtPeriodsId: $activeAtPeriodsId ,presentationId: $presentationId ,atAgency: $atAgency ,geoCodingId: $geoCodingId ,isPublic: $isPublic ,lastModified: $lastModified ,lastModifiedBy: $lastModifiedBy }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     