export const mutation = `mutation updateTouristoffer($id: Int , $clientMutationId: String!) {
        __typename
        updateTouristoffer(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     