export const query = `query getAgencycommandlogentries($atAgency: Int!) {
        __typename
        commandlogentries(condition: {atAgency: $atAgency }) {
          nodes {
            id,atPublisher,belongsToType,resourceId,logcommand,timeCommand

          }
        }
      }`
      export default `${query}`
     