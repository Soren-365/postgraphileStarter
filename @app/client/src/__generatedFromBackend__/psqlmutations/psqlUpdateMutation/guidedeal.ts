export const mutation = `mutation updateGuidedeal($id: Int ,$tripsOfferResourceIdPool: [Int] ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] , $clientMutationId: String!) {
        __typename
        updateGuidedeal(input: {clientMutationId: $clientMutationId, patch: {,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     