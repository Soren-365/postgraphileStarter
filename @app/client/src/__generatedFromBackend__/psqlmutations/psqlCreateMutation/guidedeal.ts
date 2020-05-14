export const mutation = `mutation createGuidedeal(,$tripsOfferResourceIdPool: [Int] ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] , $clientMutationId: String!) {
        __typename
        createGuidedeal(input: {clientMutationId: $clientMutationId,guidedeal: {,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     