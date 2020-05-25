export const query = `query Assoctransport($assocTransportId: Int!) {
        __typename
        assoctransport(id: $assocTransportId) {
            assocTransportId transportId atAgency

        }
      }`
      export default `${query}`
