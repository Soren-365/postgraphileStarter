export const mutation = `mutation deleteAssochost($assocHostId: [Int] , $clientMutationId: String!) {
        __typename
        deleteAssochost(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     