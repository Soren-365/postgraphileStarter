export const mutation = `mutation deleteAssochost($assocHostId: [Int] , $id: String!) {
        __typename
        deleteAssochost(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     