export const query = `query getAgencyassocguides($atAgency: Int!, $id: Int) {
        __typename
        assocguides(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            assocGuideId guideId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     