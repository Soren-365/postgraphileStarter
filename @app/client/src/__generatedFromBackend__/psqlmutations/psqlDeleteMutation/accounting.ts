export const mutation = `mutation deleteAccounting($id: Int , $id: String!) {
        __typename
        deleteAccounting(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     