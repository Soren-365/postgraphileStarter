export const query = `query getAgencyassoctransports($atAgency: Int!) {
        __typename
        assoctransports(condition: {atAgency: $atAgency }) {
          nodes {
            assocTransportId,transportId,atAgency

          }
        }
      }`
      export default `${query}`
     