export const query = `query getAgencyagencydeals($atAgency: Int!) {
        __typename
        agencydeals(condition: {atAgency: $atAgency }) {
          nodes {
            id,tripOfferResourceIdPool,guideResourceIdPool,touristResouceIdPool,eventResourceIdPool,transportationResourceIdPool,accomodationResourceIdPool

          }
        }
      }`
      export default `${query}`
     