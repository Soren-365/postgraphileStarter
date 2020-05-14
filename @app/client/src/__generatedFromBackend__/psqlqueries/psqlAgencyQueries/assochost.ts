export const query = `query getAgencyassochosts($atAgency: Int!, $id: Int) {
        __typename
        assochosts(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            assocHostId hostId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     