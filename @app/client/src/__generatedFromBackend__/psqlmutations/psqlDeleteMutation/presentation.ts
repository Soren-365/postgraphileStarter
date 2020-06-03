export const mutation = `mutation deletePresentation($id: Int , $id: String!) {
        __typename
        deletePresentation(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     