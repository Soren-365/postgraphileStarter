export const mutation = `mutation deleteGuide($id: Int , $id: String!) {
        __typename
        deleteGuide(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     