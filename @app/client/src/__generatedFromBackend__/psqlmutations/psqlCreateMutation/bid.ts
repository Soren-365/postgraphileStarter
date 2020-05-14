export const mutation = `mutation createBid(,$publisherId: [Int]! ,$createdById: [Int]! ,$bidAmount: [Int] ,$isActive: [Boolean]! ,$timeCreated: [Datetime]! , $clientMutationId: String!) {
        __typename
        createBid(input: {clientMutationId: $clientMutationId,bid: {,publisherId: $publisherId ,createdById: $createdById ,bidAmount: $bidAmount ,isActive: $isActive ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     