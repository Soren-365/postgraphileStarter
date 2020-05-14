export const query = `query getAgencyassocevents($atAgency: Int!) {
        __typename
        assocevents(condition: {atAgency: $atAgency }) {
          nodes {
            assocEventId,eventId,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     