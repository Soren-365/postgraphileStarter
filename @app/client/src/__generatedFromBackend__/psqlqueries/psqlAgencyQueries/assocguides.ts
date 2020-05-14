export const query = `query getAgencyassocguides($atAgency: Int!) {
        __typename
        assocguides(condition: {atAgency: $atAgency }) {
          nodes {
            assocGuideId,guideId,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     