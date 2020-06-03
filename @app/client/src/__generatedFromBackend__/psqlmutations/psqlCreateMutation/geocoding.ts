export const mutation = `mutation createGeocoding(,$locationLat: Int ,$locationLng: Int ,$locationType: String ,$placesId: String ,$formattedAdress: String ,$type: String ,$viewportNorthEastLat: Int ,$viewportNorthEastLng: Int ,$viewportSouthWestLat: Int ,$viewportSouthWestLng: Int ,$createdById: Int! ,$publishedById: Int! ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        createGeocoding(input: {id: $id,geocoding: {,locationLat: $locationLat ,locationLng: $locationLng ,locationType: $locationType ,placesId: $placesId ,formattedAdress: $formattedAdress ,type: $type ,viewportNorthEastLat: $viewportNorthEastLat ,viewportNorthEastLng: $viewportNorthEastLng ,viewportSouthWestLat: $viewportSouthWestLat ,viewportSouthWestLng: $viewportSouthWestLng ,createdById: $createdById ,publishedById: $publishedById ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     