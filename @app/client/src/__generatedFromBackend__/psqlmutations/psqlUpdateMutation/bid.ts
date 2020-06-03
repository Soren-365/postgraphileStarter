export const mutation = `mutation updateBid($id: Int ,$publisherId: [Int]! ,$createdById: [Int]! ,$bidAmount: [Int] ,$isActive: [Boolean]! ,$timeCreated: [Datetime]! , $id: String!) {
        __typename
        updateBid(input: {id: $id, patch: {,publisherId: $publisherId ,createdById: $createdById ,bidAmount: $bidAmount ,isActive: $isActive ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     