export const query = `query getNodeassocaccomodation($nodeId: String!) {
        __typename
        assocaccomodationByNodeId(nodeId: $nodeId }) { 
            assocAccomodationId accomodationId atAgency timeCreated

        }
      }`
      export default `${query}`
     