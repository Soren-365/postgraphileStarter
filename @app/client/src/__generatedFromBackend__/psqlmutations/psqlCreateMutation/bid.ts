export const mutation = `mutation createBid(,$publisherId: [Int]! ,$createdById: [Int]! ,$bidAmount: [Int] ,$isActive: [Boolean]! ,$timeCreated: [Datetime]! , $id: String!) {
        __typename
        createBid(input: {id: $id,bid: {,publisherId: $publisherId ,createdById: $createdById ,bidAmount: $bidAmount ,isActive: $isActive ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     