export const mutation = `mutation createGuideoffer(,$guideResourceIdPool: [Int] ,$transportResourceIdPool: [Int] ,$hostResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        createGuideoffer(input: {clientMutationId: $clientMutationId,guideoffer: {,guideResourceIdPool: $guideResourceIdPool ,transportResourceIdPool: $transportResourceIdPool ,hostResourceIdPool: $hostResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     