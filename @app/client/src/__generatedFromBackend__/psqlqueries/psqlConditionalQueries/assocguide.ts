export const query = `query getConditionalAssocguide(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        assocguides(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            assocGuideId guideId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        