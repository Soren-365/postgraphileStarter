export const mutation = `mutation updateGuidefavorite($id: Int ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] , $clientMutationId: String!) {
        __typename
        updateGuidefavorite(input: {clientMutationId: $clientMutationId, patch: {,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     