export const query = `query getNodeassoctravelgroup($nodeId: String!) {
        __typename
        assoctravelgroupByNodeId(nodeId: $nodeId }) { 
            assocTravelGroupId travelGroupId atAgency timeCreated

        }
      }`
      export default `${query}`
     