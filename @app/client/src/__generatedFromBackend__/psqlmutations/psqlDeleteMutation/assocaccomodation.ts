export const mutation = `mutation deleteAssocaccomodation($assocAccomodationId: [Int] , $id: String!) {
        __typename
        deleteAssocaccomodation(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     