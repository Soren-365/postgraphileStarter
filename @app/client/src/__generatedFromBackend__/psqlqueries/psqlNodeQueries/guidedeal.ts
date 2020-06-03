export const query = `query getNodeguidedeal($nodeId: String!) {
        __typename
        guidedealByNodeId(nodeId: $nodeId }) {
            id tripsOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool touristResourceIdPool

        }
      }`
      export default `${query}`
     