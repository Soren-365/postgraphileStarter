export const query = `query getAgencyagencyoffers($atAgency: Int!, $id: Int) {
        __typename
        agencyoffers(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id tripsOfferesourceIdPool

          }
        }
      }`
      export default `${query}`
     