export const mutation = `mutation deleteBid($id: Int , $id: String!) {
        __typename
        deleteBid(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     