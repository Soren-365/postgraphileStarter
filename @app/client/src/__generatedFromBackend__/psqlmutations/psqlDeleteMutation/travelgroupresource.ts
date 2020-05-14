export const mutation = `mutation deleteTravelgroupresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteTravelgroupresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     