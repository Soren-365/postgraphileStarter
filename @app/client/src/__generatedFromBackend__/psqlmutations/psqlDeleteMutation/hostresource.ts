export const mutation = `mutation deleteHostresource($id: Int , $id: String!) {
        __typename
        deleteHostresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     