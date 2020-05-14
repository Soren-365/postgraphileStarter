export const query = `query getNodeguidefavorite($nodeId: String!) {
        __typename
        guidefavoriteByNodeId(nodeId: $nodeId }) { 
            id agenciesRomanianIdPool agenciesAbroadIdPool

        }
      }`
      export default `${query}`
     