export const query = `query getAgencyagencyevents($atAgency: Int!) {
        __typename
        agencyevents(condition: {atAgency: $atAgency }) {
          nodes {
            agencyId,eventId,timeCreated

          }
        }
      }`
      export default `${query}`
     