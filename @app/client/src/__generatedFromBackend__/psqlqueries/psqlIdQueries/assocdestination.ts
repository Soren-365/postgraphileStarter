export const query = `query Assocdestination($assocDestinationId: Int!) {
        __typename
        assocdestination(id: $assocDestinationId) {
            assocDestinationId destinationId atAgency timeCreated

        }
      }`
      export default `${query}`
