export const mutation = `mutation deleteGuidedeal($id: Int , $id: String!) {
        __typename
        deleteGuidedeal(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     