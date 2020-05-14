export const query = `query getAgencytouristbids($atAgency: Int!) {
        __typename
        touristbids(condition: {atAgency: $atAgency }) {
          nodes {
            id,tripOfferResourceIdPool,eventResourceIdPool,transportationResourceIdPool,accomodationResourceIdPool

          }
        }
      }`
      export default `${query}`
     