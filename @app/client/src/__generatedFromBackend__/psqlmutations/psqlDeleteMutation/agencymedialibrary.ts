export const mutation = `mutation deleteAgencymedialibrary($id: Int , $clientMutationId: String!) {
        __typename
        deleteAgencymedialibrary(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     