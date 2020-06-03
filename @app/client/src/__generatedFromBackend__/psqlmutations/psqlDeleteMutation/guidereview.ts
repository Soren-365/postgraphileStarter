export const mutation = `mutation deleteGuidereview($id: Int , $id: String!) {
        __typename
        deleteGuidereview(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     