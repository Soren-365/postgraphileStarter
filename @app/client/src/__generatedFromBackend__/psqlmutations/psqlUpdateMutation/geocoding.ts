export const mutation = `mutation updateGeocoding($id: Int ,$locationLat: Int ,$locationLng: Int ,$locationType: String ,$placesId: String ,$formattedAdress: String ,$type: String ,$viewportNorthEastLat: Int ,$viewportNorthEastLng: Int ,$viewportSouthWestLat: Int ,$viewportSouthWestLng: Int ,$createdById: Int! , $clientMutationId: String!) {
        __typename
        updateGeocoding(input: {clientMutationId: $clientMutationId, patch: {,locationLat: $locationLat ,locationLng: $locationLng ,locationType: $locationType ,placesId: $placesId ,formattedAdress: $formattedAdress ,type: $type ,viewportNorthEastLat: $viewportNorthEastLat ,viewportNorthEastLng: $viewportNorthEastLng ,viewportSouthWestLat: $viewportSouthWestLat ,viewportSouthWestLng: $viewportSouthWestLng ,createdById: $createdById }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     