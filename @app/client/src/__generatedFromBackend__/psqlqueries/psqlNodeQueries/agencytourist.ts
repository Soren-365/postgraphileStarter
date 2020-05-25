export const query = `query getNodeagencytourist($nodeId: String!) {
        __typename
        agencytouristByNodeId(nodeId: $nodeId }) {
            agencyId touristId timeCreated

        }
      }`
      export default `${query}`
     