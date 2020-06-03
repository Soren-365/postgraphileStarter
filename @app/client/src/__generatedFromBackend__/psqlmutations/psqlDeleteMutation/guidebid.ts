export const mutation = `mutation deleteGuidebid($id: Int , $id: String!) {
        __typename
        deleteGuidebid(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     