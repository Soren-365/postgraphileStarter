export const mutation = `mutation updateTouristdeal($id: Int , $clientMutationId: String!) {
        __typename
        updateTouristdeal(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     