export const mutation = `mutation deleteAssocaccomodation($assocAccomodationId: [Int] , $clientMutationId: String!) {
        __typename
        deleteAssocaccomodation(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     