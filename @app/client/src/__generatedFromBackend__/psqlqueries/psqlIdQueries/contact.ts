export const query = `query Contact($id: Int!) {
        __typename
        contact(id: $id) {
            id firstName lastName associatedCompany street city postCode country telephone email isCompany createdById belongsToType belongsToId
 
        }
      }`
      export default `${query}`
