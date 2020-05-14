export const mutation = `mutation createGeocoding(,$locationLat: Int ,$locationLng: Int ,$locationType: String ,$placesId: String ,$formattedAdress: String ,$type: String ,$viewportNorthEastLat: Int ,$viewportNorthEastLng: Int ,$viewportSouthWestLat: Int ,$viewportSouthWestLng: Int ,$createdById: Int! ,$publishedById: Int! ,$lastModified: Datetime ,$timeCreated: TIMESTAMP default NOW( , $clientMutationId: String!) {
        __typename
        createGeocoding(input: {clientMutationId: $clientMutationId,geocoding: {,locationLat: $locationLat ,locationLng: $locationLng ,locationType: $locationType ,placesId: $placesId ,formattedAdress: $formattedAdress ,type: $type ,viewportNorthEastLat: $viewportNorthEastLat ,viewportNorthEastLng: $viewportNorthEastLng ,viewportSouthWestLat: $viewportSouthWestLat ,viewportSouthWestLng: $viewportSouthWestLng ,createdById: $createdById ,publishedById: $publishedById ,lastModified: $lastModified ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     