export const mutation = `mutation deleteDate_($useTimeStamp: Boolean! , $clientMutationId: String!) {
        __typename
        deleteDate_(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     