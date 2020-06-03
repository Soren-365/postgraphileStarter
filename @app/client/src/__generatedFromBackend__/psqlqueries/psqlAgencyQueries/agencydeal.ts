export const query = `query getAgencyagencydeals($atAgency: Int!, $id: Int) {
        __typename
        agencydeals(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id tripOfferResourceIdPool guideResourceIdPool touristResouceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool

          }
        }
      }`
      export default `${query}`
     