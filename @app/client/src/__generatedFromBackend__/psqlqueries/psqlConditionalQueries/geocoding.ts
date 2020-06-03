export const query = `query getConditionalGeocoding(, $undefined:  undefined ) {
        __typename
        geocodings(condition: {undefined: $undefined ,,,,,,,,,,,,,, })  {
          nodes {
            id locationLat locationLng locationType placesId formattedAdress type viewportNorthEastLat viewportNorthEastLng viewportSouthWestLat viewportSouthWestLng createdById publishedById lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        