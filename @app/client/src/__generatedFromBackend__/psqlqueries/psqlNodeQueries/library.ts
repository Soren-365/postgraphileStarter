export const query = `query getNodelibrary($nodeId: String!) {
        __typename
        libraryByNodeId(nodeId: $nodeId }) {
          nodes {
            id,bookCathegories,numberOfBook,userId

          }
        }
      }`
      export default `${query}`
     