export const query = `query Assocguide($assocGuideId: Int!) {
        __typename
        assocguide(id: $assocGuideId) {
            assocGuideId guideId atAgency timeCreated

        }
      }`
      export default `${query}`
