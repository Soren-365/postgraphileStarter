export const query = `query getNodeusertabl($nodeId: String!) {
        __typename
        usertablByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     