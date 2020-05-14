export const query = `query getAgencyassoctransports($atAgency: Int!, $id: Int) {
        __typename
        assoctransports(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            assocTransportId transportId atAgency

          }
        }
      }`
      export default `${query}`
     