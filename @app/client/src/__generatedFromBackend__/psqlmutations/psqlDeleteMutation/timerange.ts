export const mutation = `mutation deleteTimerange($id: Int , $id: String!) {
        __typename
        deleteTimerange(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     