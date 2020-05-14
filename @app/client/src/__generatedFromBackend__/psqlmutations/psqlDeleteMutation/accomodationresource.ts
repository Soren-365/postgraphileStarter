export const mutation = `mutation deleteAccomodationresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteAccomodationresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     