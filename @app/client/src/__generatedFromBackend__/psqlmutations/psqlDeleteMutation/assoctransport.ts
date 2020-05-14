export const mutation = `mutation deleteAssoctransport($assocTransportId: [Int] , $clientMutationId: String!) {
        __typename
        deleteAssoctransport(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     