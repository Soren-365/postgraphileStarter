export const mutation = `mutation updateAgencybid($id: Int ,$agencyId: Int , $clientMutationId: String!) {
        __typename
        updateAgencybid(input: {clientMutationId: $clientMutationId, patch: {,agencyId: $agencyId }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     