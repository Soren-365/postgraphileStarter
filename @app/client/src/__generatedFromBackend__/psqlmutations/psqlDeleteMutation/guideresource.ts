export const mutation = `mutation deleteGuideresource($id: Int , $id: String!) {
        __typename
        deleteGuideresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     