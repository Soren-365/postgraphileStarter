export const mutation = `mutation deleteAssoctravelgroup($assocTravelGroupId: [Int] , $clientMutationId: String!) {
        __typename
        deleteAssoctravelgroup(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     