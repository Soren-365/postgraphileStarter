export const query = `query getNodeassocguide($nodeId: String!) {
        __typename
        assocguideByNodeId(nodeId: $nodeId }) { 
            assocGuideId guideId atAgency timeCreated

        }
      }`
      export default `${query}`
     