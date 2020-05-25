export const query = `query getConditionalGeocoding(, $id:  number , $createdById:  number , $undefined:  number , $undefined:  string ) {
        __typename
        geocodings(condition: {id: $id ,,,,,,,,,,,createdById: $createdById ,undefined: $undefined ,undefined: $undefined  })  {
          nodes {
            id locationLat locationLng locationType placesId formattedAdress type viewportNorthEastLat viewportNorthEastLng viewportSouthWestLat viewportSouthWestLng createdById

          }
        }
      }`
      export default `${query}`
        