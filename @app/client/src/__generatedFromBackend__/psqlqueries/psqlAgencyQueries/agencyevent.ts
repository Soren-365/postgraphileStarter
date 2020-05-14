export const query = `query getAgencyagencyevents($atAgency: Int!, $id: Int) {
        __typename
        agencyevents(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            agencyId eventId timeCreated

          }
        }
      }`
      export default `${query}`
     