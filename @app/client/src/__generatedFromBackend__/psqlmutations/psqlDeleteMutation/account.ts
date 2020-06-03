export const mutation = `mutation deleteAccount($id: Int , $id: String!) {
        __typename
        deleteAccount(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     