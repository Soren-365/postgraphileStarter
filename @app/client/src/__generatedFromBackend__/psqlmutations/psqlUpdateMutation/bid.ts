export const mutation = `mutation updateBid($id: Int ,$publisherId: [Int]! ,$createdById: [Int]! ,$bidAmount: [Int] ,$isActive: [Boolean]! ,$timeCreated: [Datetime]! , $clientMutationId: String!) {
        __typename
        updateBid(input: {clientMutationId: $clientMutationId, patch: {,publisherId: $publisherId ,createdById: $createdById ,bidAmount: $bidAmount ,isActive: $isActive ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     