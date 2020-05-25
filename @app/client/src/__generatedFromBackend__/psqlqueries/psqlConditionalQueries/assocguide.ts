export const query = `query getConditionalAssocguide(, $guideId:  number , $timeCreated:  string ) {
        __typename
        assocguides(condition: {,guideId: $guideId ,,timeCreated: $timeCreated  })  {
          nodes {
            assocGuideId guideId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        