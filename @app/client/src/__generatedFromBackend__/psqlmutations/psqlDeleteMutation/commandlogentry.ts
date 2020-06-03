export const mutation = `mutation deleteCommandlogentry($id: Int , $id: String!) {
        __typename
        deleteCommandlogentry(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     