export const mutation = `mutation deleteTouristoffer($id: Int , $clientMutationId: String!) {
        __typename
        deleteTouristoffer(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     