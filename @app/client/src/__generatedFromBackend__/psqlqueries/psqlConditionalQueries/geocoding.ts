export const query = `query getConditionalGeocoding(, $id:  number , $createdById:  number , $publishedById:  number ) {
        __typename
        geocodings(condition: {id: $id ,,,,,,,,,,,createdById: $createdById ,publishedById: $publishedById ,, })  {
          nodes {
            id locationLat locationLng locationType placesId formattedAdress type viewportNorthEastLat viewportNorthEastLng viewportSouthWestLat viewportSouthWestLng createdById publishedById lastModified timeCreated
 
          }
        }
      }`
      export default `${query}`
        