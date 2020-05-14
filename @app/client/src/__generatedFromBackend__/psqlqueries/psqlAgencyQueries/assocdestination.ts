export const query = `query getAgencyassocdestinations($atAgency: Int!, $id: Int) {
        __typename
        assocdestinations(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            assocDestinationId destinationId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     