export const query = `query getAgencyassocevents($atAgency: Int!, $id: Int) {
        __typename
        assocevents(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            assocEventId eventId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     