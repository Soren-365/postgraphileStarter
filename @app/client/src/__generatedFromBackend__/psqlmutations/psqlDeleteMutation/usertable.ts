export const mutation = `mutation deleteUsertable($id: Int! , $id: String!) {
        __typename
        deleteUsertable(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     