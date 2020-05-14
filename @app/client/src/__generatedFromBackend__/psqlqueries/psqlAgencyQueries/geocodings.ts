export const query = `query getAgencygeocodings($atAgency: Int!) {
        __typename
        geocodings(condition: {atAgency: $atAgency }) {
          nodes {
            id,locationLat,locationLng,locationType,placesId,formattedAdress,type,viewportNorthEastLat,viewportNorthEastLng,viewportSouthWestLat,viewportSouthWestLng,createdById,publishedById,lastModified,timeCreated

          }
        }
      }`
      export default `${query}`
     