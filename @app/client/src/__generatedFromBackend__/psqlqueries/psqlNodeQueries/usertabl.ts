export const query = `query getNodeusertabl($nodeId: String!) {
        __typename
        usertablByNodeId(nodeId: $nodeId }) {
            id firstName lastName userEmail atAgency isAdmin atGuide atTourist timeCreated isActive isRomanian

        }
      }`
      export default `${query}`
     