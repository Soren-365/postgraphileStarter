export const query = `query getAgencycommandlogentries($atAgency: Int!, $id: Int) {
        __typename
        commandlogentries(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id atPublisher belongsToType resourceId logcommand timeCommand

          }
        }
      }`
      export default `${query}`
     