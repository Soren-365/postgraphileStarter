export const mutation = `mutation deleteAgencytravelgroup($agencyId: Int , $clientMutationId: String!) {
        __typename
        deleteAgencytravelgroup(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     