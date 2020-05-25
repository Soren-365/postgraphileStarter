export const query = `query getConditionalAssoctransport(, $transportId:  number , $atAgency:  number ) {
        __typename
        assoctransports(condition: {,transportId: $transportId ,atAgency: $atAgency  })  {
          nodes {
            assocTransportId transportId atAgency

          }
        }
      }`
      export default `${query}`
        