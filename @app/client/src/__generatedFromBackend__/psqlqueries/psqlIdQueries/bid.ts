export const query = `query Bid($id: Int!) {
        __typename
        bid(id: $id) {
            id publisherId createdById bidAmount isActive timeCreated
 
        }
      }`
      export default `${query}`
