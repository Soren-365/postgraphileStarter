export const query = `query getAgencyassocdestinations($atAgency: Int!) {
        __typename
        assocdestinations(condition: {atAgency: $atAgency }) {
          nodes {
            assocDestinationId,destinationId,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     