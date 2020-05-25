export const mutation = `mutation createTopics(, $clientMutationId: String!) {
        __typename
        createTopics(input: {clientMutationId: $clientMutationId,topics: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     