export const mutation = `mutation createAgencyoffer(,$tripsOfferesourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        createAgencyoffer(input: {clientMutationId: $clientMutationId,agencyoffer: {,tripsOfferesourceIdPool: $tripsOfferesourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     