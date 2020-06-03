export const mutation = `mutation deleteEventresource($id: Int , $id: String!) {
        __typename
        deleteEventresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     