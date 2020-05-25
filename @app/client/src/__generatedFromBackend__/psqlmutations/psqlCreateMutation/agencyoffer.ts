export const mutation = `mutation createAgencyoffer(, $clientMutationId: String!) {
        __typename
        createAgencyoffer(input: {clientMutationId: $clientMutationId,agencyoffer: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     