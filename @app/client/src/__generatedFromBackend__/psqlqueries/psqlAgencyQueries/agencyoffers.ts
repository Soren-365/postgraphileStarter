export const query = `query getAgencyagencyoffers($atAgency: Int!) {
        __typename
        agencyoffers(condition: {atAgency: $atAgency }) {
          nodes {
            id,tripsOfferesourceIdPool

          }
        }
      }`
      export default `${query}`
     