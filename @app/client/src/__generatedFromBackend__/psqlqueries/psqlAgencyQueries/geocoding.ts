export const query = `query getAgencygeocodings($atAgency: Int!, $id: Int) {
        __typename
        geocodings(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id locationLat locationLng locationType placesId formattedAdress type viewportNorthEastLat viewportNorthEastLng viewportSouthWestLat viewportSouthWestLng createdById

          }
        }
      }`
      export default `${query}`
     