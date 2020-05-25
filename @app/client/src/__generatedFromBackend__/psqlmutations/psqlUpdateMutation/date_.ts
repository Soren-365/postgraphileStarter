export const mutation = `mutation updateDate_($useTimeStamp: Boolean! , $clientMutationId: String!) {
        __typename
        updateDate_(input: {clientMutationId: $clientMutationId, patch: {useTimeStamp: $useTimeStamp }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     