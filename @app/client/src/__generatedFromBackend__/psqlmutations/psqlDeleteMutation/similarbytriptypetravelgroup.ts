export const mutation = `mutation deleteSimilarbytriptypetravelgroup($travelGroupIds: [Int] , $clientMutationId: String!) {
        __typename
        deleteSimilarbytriptypetravelgroup(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     