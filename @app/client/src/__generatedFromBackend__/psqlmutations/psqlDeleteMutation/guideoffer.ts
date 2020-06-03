export const mutation = `mutation deleteGuideoffer($id: Int , $id: String!) {
        __typename
        deleteGuideoffer(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     