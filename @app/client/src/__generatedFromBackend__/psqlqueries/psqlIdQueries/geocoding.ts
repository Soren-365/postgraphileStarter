export const query = `query Geocoding($id: Int!) {
        __typename
        geocoding(id: $id) {
            id locationLat locationLng locationType placesId formattedAdress type viewportNorthEastLat viewportNorthEastLng viewportSouthWestLat viewportSouthWestLng createdById

        }
      }`
      export default `${query}`
