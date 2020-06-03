export const mutation = `mutation deleteAssoctravelgroup($assocTravelGroupId: [Int] , $id: String!) {
        __typename
        deleteAssoctravelgroup(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     