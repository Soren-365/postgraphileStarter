export const query = `query Assocevent($assocEventId: Int!) {
        __typename
        assocevent(id: $assocEventId) {
            assocEventId eventId atAgency timeCreated

        }
      }`
      export default `${query}`
