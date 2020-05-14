export const mutation = `mutation createGuidefavorite(,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] , $clientMutationId: String!) {
        __typename
        createGuidefavorite(input: {clientMutationId: $clientMutationId,guidefavorite: {,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     